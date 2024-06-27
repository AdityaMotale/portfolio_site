<script lang="ts">
	import Phone from '$lib/images/phone.png';
</script>

<svelte:head>
	<title>Think School App — Adii</title>
	<meta name="description" content="Think School app prototype by Aditya Motale" />
	<link rel="icon" href="/projects/think_school.png" />
</svelte:head>

<div class="flex flex-col items-center justify-center sm:px-[20%] px-[10%]">
	<div class="sm:h-32 h-12"></div>

	<h1 class="font-display font-semibold md:text-8xl text-5xl tracking-tighter text-center">
		Think School App Prototype
	</h1>

	<div class="sm:h-24 h-12"></div>

	<p class="font-display md:text-xl text-lg md:text-[1.875rem] md:leading-[2.5rem] font-medium">
		Creating a mobile app for Think School isn't just about expanding reach; it's about transforming
		business education delivery. The proposed features will offer a more engaging, accessible, and
		personalized learning experience, keeping Think School ahead in the evolving digital education
		landscape.
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

			<div class="flex items-center font-serif text-lg gap-1 text-accent">
				<p>🔗</p>
				<a
					class="underline underline-offset-4 hover:text-accent decoration-accent"
					href="https://elemental-ton-d70.notion.site/Think-School-App-7c54579bf31642ac9798ce3c9fe1d149?pvs=74"
				>
					Read Report
				</a>
			</div>

			<div class="h-4"></div>

			<div class="flex items-center font-serif text-lg gap-1 text-accent">
				<p>🔗</p>
				<a
					class="underline underline-offset-4 hover:text-accent decoration-accent"
					href="https://github.com/AdityaMotale/think_school"
				>
					GitHub Repository
				</a>
			</div>

			<div class="h-12"></div>

			<div class="bg-primary bg-opacity-5 rounded-md flex items-start justify-start p-4 gap-2">
				<p class="font-serif text-base">👉</p>
				<p class="font-serif text-base">
					<span class="font-medium">Notice:</span> All assets (including but not limited to images,
					logos, and names) are trademarks of{' '}
					<a
						class="underline underline-offset-2 decoration-accent hover:text-accent text-accent"
						href="https://thethinkschool.com/"
					>
						Think School Pvt. Ltd.
					</a>{' '}
					and are used solely for educational purposes. The prototype and report are not intended for
					commercial use.
				</p>
			</div>
		</div>
		<div class="h-[596px] w-[272px] relative">
			<img class="w-full h-full" src={Phone} alt="Phone Mockup" />
			<div class="h-[596px] w-[272px] absolute top-[-120px] left-[-75px]">
				<iframe
					title="Think School App Prototype"
					src="https://adityamotale.github.io/think_school_release/"
					class="w-[420px] h-[844px] scale-[60%]"
				></iframe>
			</div>
		</div>
	</div>
</div>
