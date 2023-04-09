<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="w-full">
	<div class="m-auto py-10 hidden" style="max-width: 1024px;">
		<div class="text-3xl">Recommendation</div>
	</div>

	<div class="products">
		{#each data.products as product}
			<a class="product flex-col" href="/products/{product.id}">
				<div class="image" style="background-image: url(images/{product.image}.jpg);" />
				<div class="p-3">
					<div class="flex items-center justify-between">
						<div class="">{product.name}</div>
						<div class="text-lg">${product.price}</div>
					</div>
					<div class="text-xs">{product.description}</div>

					<div class="flex items-center justify-between relative">
						<div class="flex items-center space-x-2 text-sm">
							<span>Reviews</span>
							<div class="flex items-center">
								{#each Array.from({ length: 5 }) as item, index}
									<span class="material-symbols-rounded !text-base text-yellow-400">star</span>
								{/each}
							</div>
						</div>
					</div>
				</div>
			</a>
		{/each}
	</div>
</section>

<style lang="postcss">
	.products {
		max-width: 1024px;
		@apply grid grid-cols-3 gap-10 w-full m-auto;
	}

	.product {
		@apply flex bg-white shadow-md rounded-md;
	}

	.image {
		@apply h-52 w-full bg-gray-200 rounded-t-md bg-cover bg-center;
	}

	.material-symbols-rounded {
		font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48;
	}
	.material-symbols-outlined {
		font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
	}
</style>
