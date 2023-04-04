<script lang="ts">

	import { page } from "$app/stores";

</script>
<header>
	<nav>
		<div class="flex space-x-4 items-center">
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
		</div>

		<ul>
			<li>
				<a
					href="/login" class="bg-blue-500 !text-white">Login</a
				>
			</li>
		</ul>
	</nav>
</header>

<style lang="postcss">
    header {
		width: 100%;
		@apply bg-white shadow-sm;
	}

	nav {
		max-width: 1024px;
		@apply w-full m-auto h-16 flex items-center space-x-6 justify-between;
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
</style>