import database from '$lib/database';
import type { PageServerLoad } from './$types';

export const load = (async () => {

    const products = await database.product.findMany();

    return {
        products: products
    };
}) satisfies PageServerLoad;