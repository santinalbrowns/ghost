import database from '$lib/database';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import * as bcrypt from "bcrypt";
import { object, string } from 'yup';

export const load = (async ({ locals }) => {

    if (locals.user) {
        throw redirect(302, '/');
    }

    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    default: async ({ request }) => {
        const form = await request.formData();

        const schema = object({
            firstname: string().required(),
            lastname: string().required(),
            email: string().email().required(),
            password: string().required(),
        });

        try {
            const data: Record<string, any> = {};

            form.forEach((value, key) => (data[key] = value));

            const body = await schema.validate(data);

            const user = await database.user.findFirst({
                where: { email: body.email }
            });

            if (user) {
                return fail(400, { exists: true });
            };

            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(body.password, salt);

            await database.user.create({
                data: {
                    firstname: body.firstname,
                    lastname: body.lastname,
                    email: body.email,
                    password: hash,
                    role: "auth",
                }
            });

        } catch (error) {
            return fail(400, { required: true });
        }

        throw redirect(303, '/login');
    },
}