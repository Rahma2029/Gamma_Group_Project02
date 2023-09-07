<script>
	 
	// Function to determine which login logic to execute based on user type
	async function handleLogin() {
		const userType = 'Admin'; // Replace with your logic to determine the user type

		if (userType === 'Admin') {
		await handleAdminLogin();
		} 
		else if (userType === 'User') {
		await handleUserLogin();
		} 
		else {
		console.error('Invalid user type.');
		}
	}

		import GitHubSignIn from "./GitHubSignIn.svelte";
		import Navbar from './navbar.svelte';
	// Call the handleLogin function when a login action occurs (e.g., button click)
	/* async function handleLoginButtonClick() {
		await handleLogin();
	}*/
	</script> 

	


<main>
		<Navbar />

		<h1>Kangan Quiz</h1>
	<!--  <Login /> -->
		<div>
		<!-- Other content -->
		<GitHubSignIn />
		</div>
	</main>

	<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}  </style>