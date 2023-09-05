<!-- src/routes/Login.svelte -->
<script>
  import { supabase } from '../supabase';

  let username = 'user';
  let password = 'user123';

  async function loginUser() {
    try {
      const { user, error } = await supabase.auth.signIn({
        email: username, // Supabase uses 'email' for username authentication
        password,
      });

      if (error) {
        console.error('Authentication error:', error.message);
      } else {
        console.log('Logged in as:', user);
        // Redirect or update UI upon successful login
      }
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  }
</script>

  
  <!-- src/routes/Login.svelte -->

<form on:submit={loginUser}>
    <label for="username">Username:</label>
    <input type="text" id="username" bind:value={username} required />
  
    <label for="password">Password:</label>
    <input type="password" id="password" bind:value={password} required />
  
    <button type="submit">Log In</button>
  </form>
  
  