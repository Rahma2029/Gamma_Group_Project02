<!-- GitHubSignIn.svelte -->
<script>
  async function signInWithGitHub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    });

    if (error) {
      console.error('GitHub login error:', error.message);
    } else {
      // Handle successful login here, e.g., navigate to a new page
      window.location.href = '/dashboard'; // Replace '/dashboard' with your desired route
    }
  }
</script>

<button on:click={signInWithGitHub}>Sign in with GitHub</button>



  
