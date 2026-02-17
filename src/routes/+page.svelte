<svelte:head>
	<title>R.P.A. — Robotic Process Automation | Automatizare Industrială România</title>
	<meta name="description" content="Soluții de automatizare industrială, viziune artificială și integrare robotică. R.P.A. oferă servicii complete de la cercetare la implementare și suport." />
	<meta property="og:title" content="R.P.A. — Automatizare Industrială România" />
	<meta property="og:description" content="Soluții de automatizare industrială, viziune artificială și integrare robotică." />
	<meta property="og:type" content="website" />
</svelte:head>

<script lang="ts">
	import { reveal } from '$lib/actions/animate';
	import InfinityLogo from '$lib/components/InfinityLogo.svelte';
	import { FlaskConical, Cog, ShieldCheck, Car, UtensilsCrossed, Package, Cpu } from 'lucide-svelte';

	const services = [
		{
			icon: FlaskConical,
			title: 'Cercetare & Design',
			description: 'Design ingineresc personalizat, planificare, prototipare și testare pentru validarea conceptelor.'
		},
		{
			icon: Cog,
			title: 'Implementare',
			description: 'Instalare, configurare, comisionare și integrare completă cu documentație profesională.'
		},
		{
			icon: ShieldCheck,
			title: 'Suport & Mentenanță',
			description: 'Suport tehnic 24/7, mentenanță predictivă, training și optimizare continuă.'
		}
	];

	const industries = [
		{ icon: Car, name: 'Automotive' },
		{ icon: UtensilsCrossed, name: 'Food & Beverage' },
		{ icon: Package, name: 'Logistică' },
		{ icon: Cpu, name: 'Electronică' }
	];
</script>

<!-- Hero Section -->
<section class="relative min-h-screen flex items-center justify-center bg-rpa-navy text-white">
	<div class="absolute inset-0 bg-gradient-to-br from-rpa-navy via-rpa-blue-dark to-rpa-navy opacity-90"></div>
	<div class="relative z-10 text-center max-w-4xl mx-auto px-6">
		<div class="mb-8 flex flex-col items-center">
			<InfinityLogo size={80} />
			<div class="text-6xl font-extrabold tracking-tighter mt-4">R.P.A.</div>
			<div class="text-rpa-accent text-lg mt-2 tracking-[0.25em] uppercase font-medium">Robotic Process Automation</div>
		</div>
		<h1 class="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
			Soluții Industriale<br />
			<span class="text-rpa-accent">de Ultimă Generație</span>
		</h1>
		<p class="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
			Dezvoltarea și integrarea soluțiilor industriale la cererea clientului.
			De la viziune artificială la automatizare completă.
		</p>
		<a href="/contact" class="inline-block bg-rpa-accent hover:bg-rpa-accent-dark text-white font-semibold px-8 py-4 rounded-lg btn-hover text-lg">
			Contactează-ne
		</a>
	</div>
</section>

<!-- Services Overview -->
<section class="py-24 bg-white">
	<div class="max-w-6xl mx-auto px-6">
		<h2 use:reveal class="text-3xl font-bold text-center text-rpa-navy mb-4">Serviciile Noastre</h2>
		<p use:reveal class="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
			Oferim soluții complete, de la faza de cercetare până la suport continuu.
		</p>
		<div class="grid md:grid-cols-3 gap-8">
			{#each services as service}
				<div use:reveal class="bg-rpa-gray rounded-2xl p-8 card-hover">
					<div class="w-12 h-12 bg-rpa-accent/10 rounded-xl flex items-center justify-center mb-4">
						<service.icon class="w-6 h-6 text-rpa-accent" />
					</div>
					<h3 class="text-xl font-bold text-rpa-navy mb-3">{service.title}</h3>
					<p class="text-gray-600">{service.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Industries -->
<section class="py-24 bg-rpa-gray">
	<div class="max-w-6xl mx-auto px-6">
		<h2 use:reveal class="text-3xl font-bold text-center text-rpa-navy mb-4">Industrii</h2>
		<p use:reveal class="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
			Soluții adaptate pentru diverse sectoare industriale.
		</p>
		<div class="grid md:grid-cols-4 gap-6">
			{#each industries as industry}
				<div use:reveal class="bg-white rounded-xl p-6 text-center card-hover">
					<div class="w-12 h-12 bg-rpa-accent/10 rounded-xl flex items-center justify-center mb-3 mx-auto">
						<industry.icon class="w-6 h-6 text-rpa-accent" />
					</div>
					<h3 class="font-semibold text-rpa-navy">{industry.name}</h3>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA -->
<section class="py-24 bg-rpa-navy text-white text-center">
	<div class="max-w-3xl mx-auto px-6">
		<h2 use:reveal class="text-3xl font-bold mb-6">Gata să Începem?</h2>
		<p use:reveal class="text-xl text-gray-300 mb-10">
			Contactați-ne pentru a discuta despre proiectul dumneavoastră.
		</p>
		<div use:reveal class="flex flex-col sm:flex-row gap-4 justify-center">
			<a href="/contact" class="bg-rpa-accent hover:bg-rpa-accent-dark text-white font-semibold px-8 py-4 rounded-lg btn-hover">
				Completează Formularul
			</a>
			<a href="tel:+40751271751" class="border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200">
				+40 751 271 751
			</a>
		</div>
	</div>
</section>
