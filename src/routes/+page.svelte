<script lang="ts">
	import TicTacToe from '$lib/images/tic_tac_toe.svg';
	import ThinkSchoolApp from '$lib/images/think_school_app.png';
	import PawLogger from '$lib/images/paw_logger.png';
	import TurboZip from '$lib/images/turbo_zip.svg';
</script>

<svelte:head>
	<title>Aditya Motale</title>
	<meta name="description" content="Portfolio site of Aditya Motale" />
</svelte:head>

<section class="w-full flex flex-col items-center">
	<div class="md:h-20 h-10"></div>

	<!-- Hero Section -->
	<div class="h-[80vh] flex flex-col items-center justify-center sm:px-[20%] px-[8%]">
		<h1 class="font-display font-semibold md:text-8xl text-6xl tracking-tighter">
			Hi. I’m Aditya.
		</h1>
		<div class="sm:h-8 h-6"></div>
		<h3
			class="font-display font-medium md:text-3xl text-xl text-center leading-snug tracking-tight"
		>
			An engineer by choice, dedicated to bringing ideas to life that create a positive impact on
			the world.
		</h3>
	</div>

	<div class="grid w-full grid-cols-5 px-[4%] gap-10">
		<!-- Tic Tac Toe Game AI -->
		<a
			href="/projects/tic_tac_toe"
			class="flex flex-col items-end bg-[#D094E5] rounded-3xl w-full col-span-3 p-10 relative overflow-hidden
			group transition-all ease-in-out duration-300 hover:-translate-y-3"
		>
			<p class="font-display text-2xl font-medium tracking-normal">GAME AI</p>
			<div class="h-4"></div>
			<h3 class="font-display text-5xl font-semibold tracking-tighter">Tic Tac Toe</h3>
			<div class="h-8"></div>
			<div class="h-[400px]"></div>
			<img
				class="absolute -bottom-60 right-52 transition-all ease-in-out duration-300 group-hover:-bottom-[264px]"
				src={TicTacToe}
				alt="Tic Tac Toe Game"
			/>
		</a>

		<!-- Think School App Prototype -->
		<a
			href="/projects/think_school"
			class="flex flex-col items-end bg-[#A3DCD4] rounded-3xl w-full col-span-2 p-10 relative overflow-hidden
			group transition-all ease-in-out duration-300 hover:-translate-y-2"
		>
			<p class="font-display text-2xl font-medium tracking-normal">APP PROTOTYPE</p>
			<div class="h-4"></div>
			<h3 class="font-display text-5xl font-semibold tracking-tighter">Think School App</h3>
			<div class="h-8"></div>
			<div class="h-[400px]"></div>
			<img
				class="absolute -bottom-56 right-20 transition-all ease-in-out duration-300 group-hover:-bottom-[264px]"
				src={ThinkSchoolApp}
				alt="Think School App Prototype"
			/>
		</a>

		<!-- Paw Logging Library -->
		<a
			href="https://pub.dev/packages/paw"
			class="flex flex-col items-end bg-[#BDDFF9] rounded-3xl w-full col-span-2 p-10 relative overflow-hidden
			group transition-all ease-in-out duration-300 hover:-translate-y-2"
		>
			<p class="font-display text-2xl font-medium tracking-normal">DART LOGGING</p>
			<div class="h-4"></div>
			<h3 class="font-display text-5xl font-semibold tracking-tighter text-right">Paw Logger</h3>
			<div class="h-8"></div>
			<div class="h-[240px]"></div>
			<img
				class="absolute -bottom-12 -right-24 transition-all ease-in-out duration-300 group-hover:-bottom-[72px]"
				src={PawLogger}
				alt="Paw Logging Library"
			/>
		</a>

		<!-- Turbo-Zip Library -->
		<a
			href="https://pub.dev/packages/turbo_zip"
			class="flex flex-col items-end bg-[#E8B89C] rounded-3xl w-full col-span-3 p-10 relative overflow-hidden
			group transition-all ease-in-out duration-300 hover:-translate-y-2"
		>
			<p class="font-display text-2xl font-medium tracking-normal">COMPRESSION LIBRARY</p>
			<div class="h-4"></div>
			<h3 class="font-display text-5xl font-semibold tracking-tighter text-right">
				TurboZip Compression
			</h3>
			<div class="h-8"></div>
			<div class="h-[240px]"></div>
			<img
				class="absolute -bottom-12 right-20 transition-all ease-in-out duration-300 group-hover:-bottom-[72px]"
				src={TurboZip}
				alt="TurboZip Library"
			/>
		</a>
	</div>

	<div class="md:h-20 h-10"></div>
</section>
