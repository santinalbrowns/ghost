import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async () => {

    throw redirect(302, '/');

}) satisfies PageServerLoad;

export const actions: Actions = {
    default: async ({ cookies }) => {
        cookies.set('session', '', {
            path: '/',
            expires: new Date(0),
        });

        throw redirect(302, '/login');
    }
}
