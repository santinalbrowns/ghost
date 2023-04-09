import database from '$lib/database';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import * as bcrypt from "bcrypt";
import { object, string } from 'yup';

export const load = (async ({locals}) => {

    if(locals.user) {
        throw redirect(302, '/');
    }
    
    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    default: async ({ request, cookies }) => {
        const form = await request.formData();

        const schema = object({
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

            if (!user) {
                return fail(400, { credentials: true });
            };

            const valid = await bcrypt.compare(body.password, user.password);

            if (!valid) {
                return fail(401, { credentials: true });
            }

            cookies.set('session', user.Id.toString(), {
                path: '/',
                httpOnly: true,
                sameSite: 'strict',
                secure: process.env.NODE_ENV === 'production',
                maxAge: 60 * 60 * 24 * 30,
            });

        } catch (error) {
            return fail(400, { required: true });
        }

        throw redirect(302, '/');
    }
}