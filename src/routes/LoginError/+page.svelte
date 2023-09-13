<!-- src/App.svelte -->

<script>
 import LoginForm from './components/LoginForm.svelte';

 </script>
  
  <main>
    <h1>Kangan Quiz</h1>
    <!-- LOGIN -->
	<div>
	Unsuccessful Login
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

	.error-message {
      color: red;
      margin-top: 5px;
      margin-bottom: 5px ;
}
	}  </style> 
  