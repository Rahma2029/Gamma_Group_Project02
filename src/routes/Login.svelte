<!-- src/routes/Login.svelte -->
<script>
   import Login from './Login.svelte';
    // import Input  from './Input.svelte'
	/* export let name; */
		// [ADMIN LOGIN] Function for handling admin login
		
async function handleAdminLogin() {
  try {
    const { data, error } = await supabase
      .from('users') // Replace 'user_table' with your actual table name
      .select('*')
      .eq('username', providedUsername); // Replace 'username' with your column name

    if (error) {
      console.error('Database error:', error.message);
      return; // Return early if there's an error
    }

    if (data && data.length > 0) {
      const user = data[0];
      const storedPassword = user.password; // Retrieve the hashed and salted password
      const passwordMatches = await comparePasswords(providedPassword, storedPassword);

      if (passwordMatches && user.role === 'Admin') {
        // Password matches, user is an admin
        // Proceed with admin authentication logic
      } else {
        console.error('Admin credentials are not valid.');
      }
    } else {
      console.error('Admin not found.');
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// [USER LOGIN] Function for handling user login
async function handleUserLogin() {
  try {
    const { data, error } = await supabase
      .from('users') // Replace 'user_table' with your actual table name
      .select('*')
      .eq('username', providedUsername); // Replace 'username' with your column name

    if (error) {
      console.error('Database error:', error.message);
      return; // Return early if there's an error
    }

    if (data && data.length > 0) {
      const user = data[0];
      const storedPassword = user.password; // Retrieve the hashed and salted password
      const passwordMatches = await comparePasswords(providedPassword, storedPassword);

      if (passwordMatches && user.role === 'User') {
        // Password matches, user is authenticated
        const userRole = user.role; // Retrieve the user's role
        // Proceed with user authentication logic based on the role
      } else {
        console.error('Password does not match or user is not a User.');
      }
    } else {
      console.error('User not found.');
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

</script>



 
  

  