<script lang="ts">
	import { enhance } from '$app/forms';
    import type { ActionData } from './$types'

    export let form: ActionData
</script>

<form method="post" use:enhance>

    {#if form?.exists}
        <p>User already exists</p>
    {/if}
    {#if form?.required}
        <p>All fields are required</p>
    {/if}

    <div>
        <label for="firstname">Firs tname</label>
        <input type="text" name="firstname" id="firstname">
    </div>

    <div>
        <label for="lastname">Last name</label>
        <input type="text" name="lastname" id="lastname">
    </div>

    <div>
        <label for="email">Email</label>
        <input type="email" name="email" id="email">
    </div>


    <div>
        <label for="password">Password</label>
        <input type="text" name="password" id="password">
    </div>

    <!-- <div class="error">Email is already</div> -->

    <button>Register</button>
</form>