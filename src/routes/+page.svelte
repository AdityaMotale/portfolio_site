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
	<!------------------------------------------ Hero Section ------------------------------------------>

	<div class="h-[80vh] flex flex-col items-center justify-center sm:px-[20%] px-[8%]">
		<h1 class="font-display font-semibold md:text-8xl text-5xl tracking-tighter text-center">
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

	<!------------------------------------------ Projects Section ------------------------------------------>

	<div class="grid w-full md:grid-cols-5 grid-cols-1 px-[4%] gap-10">
		<!-- Tic Tac Toe Game AI -->

		<a
			href="/projects/tic_tac_toe"
			class="flex flex-col items-end bg-[#D094E5] rounded-3xl w-full col-span-3 p-10 relative overflow-hidden
			group transition-all ease-in-out duration-300 hover:-translate-y-3"
		>
			<p class="font-display md:text-2xl text-lg font-medium tracking-normal text-right">GAME AI</p>
			<div class="h-4"></div>
			<h3 class="font-display md:text-5xl text-3xl font-semibold tracking-tighter text-right">
				Tic Tac Toe
			</h3>
			<div class="h-8"></div>
			<div class="h-[400px]"></div>
			<img
				class="absolute md:-bottom-60 -bottom-20 md:right-52 right-20 transition-all ease-in-out duration-300 md:group-hover:-bottom-[264px] group-hover:-bottom-[104px]"
				src={TicTacToe}
				alt="Tic Tac Toe Game"
			/>
		</a>

		<!-- Think School App Prototype -->

		<a
			href="/projects/think_school"
			class="flex flex-col items-end bg-[#A3DCD4] rounded-3xl w-full md:col-span-2 col-span-3 p-10 relative overflow-hidden
			group transition-all ease-in-out duration-300 hover:-translate-y-2"
		>
			<p class="font-display md:text-2xl text-lg font-medium tracking-normal text-right">
				APP PROTOTYPE
			</p>
			<div class="h-4"></div>
			<h3 class="font-display md:text-5xl text-3xl font-semibold tracking-tighter text-right">
				Think School App
			</h3>
			<div class="h-8"></div>
			<div class="h-[400px]"></div>
			<img
				class="absolute -bottom-56 md:right-20 right-8 transition-all ease-in-out duration-300 group-hover:-bottom-[248px]"
				src={ThinkSchoolApp}
				alt="Think School App Prototype"
			/>
		</a>

		<!-- Paw Logging Library -->

		<a
			href="https://pub.dev/packages/paw"
			class="flex flex-col items-end bg-[#BDDFF9] rounded-3xl w-full md:col-span-2 col-span-3
			p-10 relative overflow-hidden group transition-all ease-in-out duration-300
			hover:-translate-y-2"
		>
			<p class="font-display md:text-2xl text-lg font-medium tracking-normal text-right">
				DART LOGGING
			</p>
			<div class="h-4"></div>
			<h3 class="font-display md:text-5xl text-3xl font-semibold tracking-tighter text-right">
				Paw Logger
			</h3>
			<div class="h-8"></div>
			<div class="h-[240px]"></div>
			<img
				class="absolute md:-bottom-12 md:-right-24 -bottom-6 -right-12 transition-all ease-in-out
				duration-300 md:group-hover:-bottom-[72px] group-hover:-bottom-[48px]"
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
			<p class="font-display md:text-2xl text-lg font-medium tracking-normal text-right">
				COMPRESSION LIBRARY
			</p>
			<div class="h-4"></div>
			<h3 class="font-display md:text-5xl text-3xl font-semibold tracking-tighter text-right">
				TurboZip Compression
			</h3>
			<div class="h-8"></div>
			<div class="h-[240px]"></div>
			<img
				class="absolute md:-bottom-12 md:left-32 bottom-0 left-12 transition-all ease-in-out duration-300
				md:group-hover:-bottom-[72px] group-hover:-bottom-[24px]"
				src={TurboZip}
				alt="TurboZip Library"
			/>
		</a>
	</div>

	<!------------------------------------------ Experience Section ------------------------------------------>

	<div class="md:h-40 h-28"></div>

	<!-- Quote -->

	<h3
		class="font-display font-semibold w-full md:text-[3rem] md:leading-[3.8rem] text-[1.875rem] leading-[2.5rem] pr-[4%] md:pl-[28%] pl-[4%]"
	>
		Programming is a constant battle between building your ideas and making sure they survive
		reality.
	</h3>

	<div class="md:h-32 h-20"></div>

	<!-- Experience -->

	<div class="w-full flex flex-col px-[4%] gap-8">
		<!-- NAW -->

		<div
			class="rounded-full bg-[#025A4E] gap-2 flex items-center justify-between text-white lg:ml-[60%] lg:w-[40%] w-full py-4 px-8"
		>
			<div>
				<h3 class="font-display text-lg font-semibold">NAW</h3>
				<div class="h-2"></div>
				<h5 class="font-display text-sm">Web Developer & UX for IVI Systems</h5>
			</div>
			<p class="text-right">Feb 24 — June 24</p>
		</div>

		<!-- Kraftbase -->

		<div
			class="rounded-full bg-[#025A4E] flex items-center justify-between text-white lg:ml-[64%] lg:w-[24%] w-full py-4 px-8"
		>
			<div>
				<h3 class="font-display text-lg font-semibold">Kraftbase</h3>
				<div class="h-2"></div>
				<h5 class="font-display text-sm">Flutter Dev (Freelance)</h5>
			</div>
			<p>Mar 24 —<br />April 24</p>
		</div>

		<!-- NestFi -->

		<div
			class="rounded-full bg-[#025A4E] flex items-center justify-between text-white lg:ml-[28%] lg:w-[32%] w-full py-4 px-8"
		>
			<div>
				<h3 class="font-display text-lg font-semibold">NestFi</h3>
				<div class="h-2"></div>
				<h5 class="font-display text-sm">Flutter Developer</h5>
			</div>
			<p>May 22 —<br />Sept 22</p>
		</div>

		<!-- Folk Dev -->

		<div
			class="rounded-full bg-[#025A4E] flex items-center justify-between text-white lg:w-[28%] w-full py-4 px-8"
		>
			<div>
				<h3 class="font-display text-lg font-semibold">Folk Developers</h3>
				<div class="h-2"></div>
				<h5 class="font-display text-sm">Flutter Dev Intern</h5>
			</div>
			<p>Nov 21 —<br />Jan 22</p>
		</div>
	</div>
</section>
