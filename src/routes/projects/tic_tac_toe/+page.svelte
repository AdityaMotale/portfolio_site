<script lang="ts">
	import Phone from '$lib/images/phone.png';
</script>

<svelte:head>
	<title>Tic Tac Toe — Adii</title>
	<meta name="description" content="Tic Tac Toe Game with Game AI by Aditya Motale" />
	<link rel="icon" href="/projects/tic_tac_toe.png" />
</svelte:head>

<div class="flex flex-col items-center justify-center sm:px-[20%] px-[10%]">
	<div class="sm:h-32 h-12"></div>

	<h1 class="font-display font-semibold md:text-8xl text-5xl tracking-tighter text-center">
		Tic Tac Toe Game w/ Game AI
	</h1>

	<div class="sm:h-24 h-12"></div>

	<p class="font-display md:text-xl text-lg md:text-[1.875rem] md:leading-[2.5rem] font-medium">
		Tic-tac-toe is a two-player game on a 3x3 grid, where players aim to align three marks. The AI
		opponent uses the Minimax algorithm, evaluating all possible moves to make optimal decisions by
		simulating future game states.
	</p>

	<div class="sm:h-24 h-12"></div>

	<div class="flex md:flex-row flex-col-reverse gap-20 md:gap-0 items-center justify-between">
		<div class="flex flex-col items-start justify-start md:max-w-[60%]">
			<!-- Info Callout -->

			<div
				class="border border-accent text-accent rounded-md flex items-start justify-start p-3 gap-2
				font-display text-sm font-medium"
			>
				<p>💡</p>
				<p>
					You can interact with the App shown on the side. If on trackpad you can use two finger
					gesture to scroll the device.
				</p>
			</div>

			<div class="h-12"></div>

			<!-- Links -->

			<div class="text-accent flex items-center font-serif text-lg gap-1">
				<p>🔗</p>
				<a
					class="underline underline-offset-4 hover:text-accent decoration-accent"
					href="https://github.com/AdityaMotale/tic_tac_toe"
				>
					GitHub Repository
				</a>
			</div>

			<div class="h-4"></div>

			<div class="text-accent flex items-center font-serif text-lg gap-1">
				<p>🔗</p>
				<a
					class="underline underline-offset-4 hover:text-accent decoration-accent"
					href="https://adityamotale.github.io/tic_tac_toe_release/"
				>
					Web App
				</a>
			</div>

			<div class="h-4"></div>

			<div class="text-accent flex items-center font-serif text-lg gap-1">
				<p>🔗</p>
				<a
					class="underline underline-offset-4 hover:text-accent decoration-accent"
					href="https://www.figma.com/community/file/1385900866220392105/tictactoe-game"
				>
					Figma Designs
				</a>
			</div>

			<div class="h-12"></div>

			<!-- Special Thanks -->

			<h4 class="font-display font-bold text-2xl">Special Thanks 💌</h4>

			<div class="h-6"></div>

			<!-- Links -->

			<p class="font-serif text-lg w-full">
				🎨 <a
					class="w-fit text-accent underline underline-offset-4 hover:text-accent decoration-accent"
					href="https://www.openpeeps.com/"
				>
					Open Peeps
				</a>
				for amazing illustrations
			</p>

			<div class="h-4"></div>

			<p class="font-serif text-lg w-full">
				*️⃣ <a
					class="text-accent underline underline-offset-4 hover:text-accent decoration-accent"
					href="https://github.com/lucide-icons/lucide"
				>
					Lucide Dev
				</a> for icons
			</p>
		</div>
		<div class="h-[596px] w-[272px] relative">
			<img class="w-full h-full" src={Phone} alt="Phone Mockup" />
			<div class="h-[596px] w-[272px] absolute top-[-120px] left-[-75px]">
				<iframe
					title="Tic Tac Toe Game Web App"
					src="https://adityamotale.github.io/tic_tac_toe_release/"
					class="w-[420px] h-[844px] scale-[60%]"
				></iframe>
			</div>
		</div>
	</div>
</div>
