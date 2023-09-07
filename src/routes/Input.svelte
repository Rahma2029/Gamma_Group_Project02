<script>

let username = '';
let password = '';

import UserLogin from './UserLogin.svelte';

</script>

<form on:submit={UserLogin}>
  <label for="username">Username:</label>
  <input type="text" id="username" bind:value={username} required />

  <label for="password">Password:</label>
  <input type="password" id="password" bind:value={password} required />

  <button type="submit">Log In</button>
</form>

<div>
  <!-- Other content in your app -->
  <UserLogin />
</div>