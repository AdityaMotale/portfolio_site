<script lang="ts">
	import Phone from '$lib/images/phone.png';
</script>

<svelte:head>
	<title>Think School App — Adii</title>
	<meta name="description" content="Think School app prototype by Aditya Motale" />
	<link rel="icon" href="/projects/tic_tac_toe.png" />
</svelte:head>

<section class="max-w-screen-lg min-w-full py-10">
	<div
		class="w-full flex flex-wrap md:flex-nowrap items-center justify-center gap-20 px-10 md:px-20"
	>
		<div class="flex flex-col items-start justify-start md:max-w-[60%]">
			<h2 class="font-display font-bold text-4xl">
				<span class="text-accent">Toc-Tac-Toe</span> Game
			</h2>

			<div class="h-8"></div>

			<!-- Info Callout -->

			<div class="border border-accent rounded-md flex items-start justify-start p-2 gap-2">
				<p class="font-serif text-base">💡</p>
				<p class="font-serif text-base">
					<span class="font-medium">Tip:</span> You can interact with the App shown on the side. If on
					trackpad you can use two finger gesture to scroll the device.
				</p>
			</div>

			<div class="h-8"></div>

			<p class="font-serif text-xl">
				Tic-tac-toe is a two-player game on a 3x3 grid, where players aim to align three marks. The
				AI opponent uses the Minimax algorithm, evaluating all possible moves to make optimal
				decisions by simulating future game states.
			</p>

			<div class="h-10"></div>

			<!-- Links -->

			<div class="flex items-center font-serif text-lg gap-1">
				<p>🔗</p>
				<a
					class="underline underline-offset-4 hover:text-accent decoration-accent"
					href="https://github.com/AdityaMotale/tic_tac_toe"
				>
					GitHub Repository
				</a>
			</div>

			<div class="h-4"></div>

			<div class="flex items-center font-serif text-lg gap-1">
				<p>🔗</p>
				<a
					class="underline underline-offset-4 hover:text-accent decoration-accent"
					href="https://adityamotale.github.io/tic_tac_toe_release/"
				>
					Web App
				</a>
			</div>

			<div class="h-4"></div>

			<div class="flex items-center font-serif text-lg gap-1">
				<p>🔗</p>
				<a
					class="underline underline-offset-4 hover:text-accent decoration-accent"
					href="https://www.figma.com/community/file/1385900866220392105/tictactoe-game"
				>
					Figma Designs
				</a>
			</div>

			<div class="h-10"></div>

			<!-- Special Thanks -->

			<h4 class="font-display font-bold text-2xl">
				Special <span class="text-accent">Thanks</span> 💌
			</h4>

			<div class="h-6"></div>

			<!-- Links -->

			<div class="flex items-center font-serif text-lg gap-1">
				<p>🎨</p>
				{' '}
				<a
					class="underline underline-offset-4 hover:text-accent decoration-accent"
					href="https://www.openpeeps.com/"
				>
					Open Peeps
				</a>{' '}
				<p>for amazing illustrations</p>
			</div>

			<div class="h-4"></div>

			<div class="flex items-center font-serif text-lg gap-1">
				<p>*️⃣</p>
				{' '}
				<a
					class="underline underline-offset-4 hover:text-accent decoration-accent"
					href="https://github.com/lucide-icons/lucide"
				>
					Lucide Dev
				</a>{' '}
				<p>for icons</p>
			</div>
		</div>

		<div>
			<div class="h-[596px] w-[272px] flex items-center justify-center relative">
				<img class="w-full h-full" src={Phone} alt="Phone Mockup" />
				<div class="h-[596px] w-[272px] absolute top-[-120px] left-[-75px]">
					<iframe
						title="Tic Tac Toe Game"
						src="https://adityamotale.github.io/tic_tac_toe_release/"
						class="w-[420px] h-[844px] scale-[60%]"
					></iframe>
				</div>
			</div>
		</div>
	</div>
</section>
