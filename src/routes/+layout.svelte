<script>
	import '../styles.css';
	import '../tailwind.css';
</script>

<main>
	<slot />
	<footer class="w-full flex items-center justify-between my-32 px-32">
		<div class="flex items-center justify-start font-display text-lg gap-2">
			<p>© 2024 Aditya Motale</p>
			<p class="font-semibold text-xl">•</p>
			<p>Bharat</p>
		</div>
	</footer>
</main>
