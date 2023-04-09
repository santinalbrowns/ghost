import database from "$lib/database";
import { redirect } from "@sveltejs/kit";

export async function handle({ event, resolve }) {

    const session = event.cookies.get("session");

    if (!session) {
        return await resolve(event);
    }

    const user = await database.user.findFirst({
        where: { Id: parseInt(session) },
    });

    if(user) {

        if(user.role == "admin" && event.url.pathname === '/') {

            console.log(event.url.pathname);

            //throw redirect(302, '/product');
        }

        event.locals.user = {
            id: user.Id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            role: user.role,
        }
    }

    /* if (!event.locals.user && event.url.pathname.startsWith('/')) {
        throw redirect(302, '/login');
    } */

    return await resolve(event);
}