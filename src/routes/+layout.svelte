<script>
	import '../styles.css';
	import '../tailwind.css';
</script>

<main>
	<slot />
	<footer
		class="w-full flex md:flex-row flex-col md:items-start md:gap-0 gap-12 items-center justify-between px-[10%] mt-44 mb-24"
	>
		<div class="flex items-center justify-start font-display font-medium text-lg gap-4">
			<p>© 2024 Aditya Motale</p>
			<p class="font-semibold text-xl">•</p>
			<p>Bharat</p>
		</div>
		<div class="flex flex-col md:items-start items-center gap-8 font-display text-base font-medium">
			<!-- Title -->

			<p class="font-semibold text-lg">Elsewhere</p>

			<!-- Contacts -->

			<a href="https://github.com/AdityaMotale">GitHub</a>
			<a href="https://www.linkedin.com/in/aditya-motale/">LinkedIn</a>
			<a href="https://www.figma.com/@adityamotale">Figma</a>
			<a href="https://read.cv/adii">CV</a>
		</div>
	</footer>
</main>
