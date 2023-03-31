<script>
	import '../app.css';
	import welcome_fallback from '$lib/images/logo.png';
</script>

<nav class="flex bg-pge">
	<h1 class="teste text-4xl font-semibold text-white py-4 px-6">SGRH</h1>
</nav>

<slot />

<footer class="flex justify-center">
	<img src={welcome_fallback} alt="Welcome" />
</footer>
