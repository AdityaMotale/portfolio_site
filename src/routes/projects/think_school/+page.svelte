<script lang="ts">
	import Phone from '$lib/images/phone.png';
</script>

<svelte:head>
	<title>Think School App — Adii</title>
	<meta name="description" content="Think School app prototype by Aditya Motale" />
	<link rel="icon" href="/projects/think_school.png" />
</svelte:head>

<section class="max-w-screen-lg min-w-full py-10">
	<div
		class="w-full flex flex-wrap md:flex-nowrap items-center justify-center gap-20 px-10 md:px-20"
	>
		<div class="flex flex-col items-start justify-start md:max-w-[60%]">
			<h2 class="font-display font-bold text-4xl">
				Think School <span class="text-accent">App Prototype</span>
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
				Creating a mobile app for Think School is not just about expanding the reach; it’s about
				transforming how business education is delivered and consumed. With the proposed features,
				Think School can offer a more engaging, accessible, and personalized learning experience,
				staying ahead of the curve in the evolving landscape of digital education.
			</p>

			<div class="h-10"></div>

			<!-- Links -->

			<div class="flex items-center font-serif text-lg gap-1">
				<p>🔗</p>
				<a
					class="underline underline-offset-4 hover:text-accent decoration-accent"
					href="https://elemental-ton-d70.notion.site/Think-School-App-7c54579bf31642ac9798ce3c9fe1d149?pvs=74"
				>
					Read Report
				</a>
			</div>

			<div class="h-4"></div>

			<div class="flex items-center font-serif text-lg gap-1">
				<p>🔗</p>
				<a
					class="underline underline-offset-4 hover:text-accent decoration-accent"
					href="https://github.com/AdityaMotale/think_school"
				>
					GitHub Repository
				</a>
			</div>

			<div class="h-10"></div>

			<div class="bg-primary bg-opacity-5 rounded-md flex items-start justify-start p-4 gap-2">
				<p class="font-serif text-base">📌</p>
				<p class="font-serif text-base">
					<span class="font-medium">Notice:</span> All assets (including but not limited to images,
					logos, and names) are trademarks of{' '}
					<a
						class="underline underline-offset-2 decoration-accent hover:text-accent"
						href="https://thethinkschool.com/"
					>
						Think School Pvt. Ltd.
					</a>{' '}
					and are used solely for educational purposes. The prototype and report are not intended for
					commercial use.
				</p>
			</div>
		</div>

		<div>
			<div class="h-[596px] w-[272px] flex items-center justify-center relative">
				<img class="w-full h-full" src={Phone} alt="Phone Mockup" />
				<div class="h-[596px] w-[272px] absolute top-[-120px] left-[-75px]">
					<iframe
						title=""
						src="https://adityamotale.github.io/think_school_release/"
						class="w-[420px] h-[844px] scale-[60%]"
					></iframe>
				</div>
			</div>
		</div>
	</div>
</section>
