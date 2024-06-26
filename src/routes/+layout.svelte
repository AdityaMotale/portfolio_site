<script>
	import '../styles.css';
	import '../tailwind.css';
</script>

<main>
	<header class="flex items-center justify-between px-[12%] py-8 sticky top-0 z-50">
		<a href="/">
			<img src="/logo.png" alt="Adii" width="60" />
		</a>
		<a href="https://github.com/AdityaMotale">
			<img src="/icons/github.svg" alt="Github" />
		</a>
	</header>
	<slot />
	<footer
		class="w-full flex md:flex-row flex-col md:items-start md:gap-0 gap-12 items-center
		justify-between md:px-[20%] px-[10%] mt-44 mb-24"
	>
		<div class="flex items-center justify-start font-display font-medium text-lg gap-4">
			<p>© 2024 Aditya Motale</p>
			<p class="font-semibold text-xl">•</p>
			<p>Bharat</p>
		</div>

		<div class="flex md:flex-row flex-col md:items-start items-center justify-start gap-20">
			<div
				class="flex flex-col md:items-start items-center gap-8 font-display text-base font-medium"
			>
				<!-- Title -->

				<p class="font-semibold text-lg">Elsewhere</p>

				<!-- Contacts -->

				<a href="https://github.com/AdityaMotale">GitHub</a>
				<a href="https://www.linkedin.com/in/aditya-motale/">LinkedIn</a>
				<a href="https://www.figma.com/@adityamotale">Figma</a>
				<a href="https://read.cv/adii">CV</a>
			</div>

			<div
				class="flex flex-col md:items-start items-center gap-8 font-display text-base font-medium"
			>
				<!-- Title -->

				<p class="font-semibold text-lg">Contact</p>

				<!-- Contacts -->

				<a href="mailto:adityamotale.22@gmail.com">EMail</a>
				<a href="https://mail.google.com/mail/u/0/?fs=1&to=adityamotale.22@gmail.com&tf=cm">GMail</a
				>
			</div>
		</div>
	</footer>
</main>
