<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<div class="font-bold text-lg">
			<span class="text-green-600">Ghost</span>
		</div>
		<ul>
			<li>
				<a
					class:!text-green-600={$page.url.pathname == '/'}
					class:bg-gray-100={$page.url.pathname == '/'}
					href="/">Home</a
				>
			</li>
			<li><a href="/products">Products</a></li>
		</ul>
	</nav>
</header>

<section class="w-full">

    <div class="m-auto py-10" style="max-width: 1024px;">
        <div class="text-3xl">
            Best pickups
        </div>
    </div>

	<div class="products">
		{#each Array.from({ length: 2 }) as product, index}
			<div class="product flex-col">
				<div class="image" style="background-image: url(images/{index}.jpg);" />
				<div class="p-3">
					<div class="flex items-center justify-between">
						<div class="">Shopping Bags</div>
						<div class="text-lg">$50</div>
					</div>
					<div class="text-xs">Paper</div>

					<div class="flex items-center justify-between relative">
						<div class="flex items-center space-x-2 text-sm">
							<span>Reviews</span>
							<div class="flex items-center">
								{#each Array.from({ length: 5 }) as item, index}
									<span class="material-symbols-rounded !text-base text-yellow-400">star</span>
								{/each}
							</div>
						</div>
						<div class="absolute right-0 -top-3">
							<div class="relative">
								<span class="material-symbols-outlined !text-2xl text-gray-500"> local_mall </span>

								<div
									class="bg-green-500 absolute flex items-center justify-center h-4 w-4 rounded-full"
									style="top: 20px; left: 4px"
								>
									<span class="material-symbols-outlined !text-xs text-white"> add </span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<style lang="postcss">
	header {
		width: 100%;
		@apply bg-white shadow-sm;
	}

	nav {
		max-width: 1024px;
		@apply w-full m-auto h-16 flex items-center space-x-6;
	}

	nav ul {
		@apply list-none;
	}

	nav ul li {
		@apply inline-block;
	}

	nav ul li a {
		@apply block px-2.5 py-1 rounded-lg text-sm border-transparent hover:border-green-600 hover:text-green-600 text-gray-600;
	}

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
