<script>
	import '../app.css';
	import welcome_fallback from '$lib/images/logo.png';
</script>

<nav class="flex bg-pge">
	<a href="/" class="teste text-4xl font-semibold text-white py-3 px-6">SGRH</a>
</nav>

<div class="flex flex-col footer-adjust">
	<slot />
</div>

<footer class="flex justify-center bg-pge-cinza-claro">
	<img src={welcome_fallback} alt="Welcome" />
</footer>

<style>
	.footer-adjust {
		height: 80vh;
	}
</style>