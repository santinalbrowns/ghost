<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<form method="post" use:enhance>
	{#if form?.required}
		<p class="error">Email and password are required fields.</p>
	{/if}

	{#if form?.credentials}
		<p class="error">You have entered the wrong credentials.</p>
	{/if}

	<div>
		<label for="email">Email</label>
		<input type="email" name="email" id="email" />
	</div>

	<div>
		<label for="password">Password</label>
		<input type="password" name="password" id="password" />
	</div>

	<!-- <div class="error">Email is already</div> -->

	<button>Login</button>
</form>
