<svelte:head>
	<title>Logistică — AMR, conveioare și ESS pentru depozite | R.P.A.</title>
	<meta
		name="description"
		content="Automatizăm depozite și hub-uri logistice cu ESS, AMR, conveioare inteligente, machine vision și robotică pentru picking și sortare."
	/>
</svelte:head>

<script lang="ts">
	import { reveal } from '$lib/actions/animate';
	import {
		Warehouse,
		Route,
		PackageSearch,
		BatteryCharging,
		Bot,
		Cable,
		ScanLine,
		Factory,
		ShieldCheck
	} from 'lucide-svelte';

	const useCases = [
		{
			icon: Warehouse,
			title: 'Depozite cu trafic intens',
			bullets: [
				'Layout optimizat pentru fluxuri inbound/outbound',
				'Interconectare WMS, ERP și flote AMR',
				'Monitorizare energetică și ESS pentru consumurile de vârf'
			]
		},
		{
			icon: Route,
			title: 'Sortare și cross-dock',
			bullets: [
				'Conveioare cu zone dinamice și divertere inteligente',
				'Scanare 3D + barcode pentru rutare automată',
				'Algoritmi pentru balansarea fluxurilor pe shift-uri'
			]
		},
		{
			icon: PackageSearch,
			title: 'Picking asistat digital',
			bullets: [
				'AMR cu shelving sau top module pentru pick-to-light',
				'Vision și cântărire pentru verificarea comenzilor',
				'Orchestrare în timp real între oameni, roboți și conveioare'
			]
		}
	];

	const solutions = [
		{
			icon: BatteryCharging,
			title: 'ESS pentru hub logistic',
			description: 'Stocare de energie pentru reducerea vârfurilor și backup-ul sistemelor critice.',
			highlights: ['Armonizare cu tarifele de energie și PV rooftop', 'Integrare EMS cu HVAC și sisteme de iluminat', 'Rapoarte ESG și monitorizare SOC în portal web']
		},
		{
			icon: Bot,
			title: 'AMR pentru picking și tugger',
			description: 'Roboți mobili transportă paleți, roll-container și cutii între zonele de picking.',
			highlights: ['SLAM + cod QR pentru zone aglomerate', 'Fleet manager conectat la WMS și TMS', 'Stații automate de încărcare și swapping baterii']
		},
		{
			icon: Cable,
			title: 'Conveioare & sortatoare',
			description: 'Sisteme modulare cu divertere, sortatoare tilt-tray și linii telescopice de încărcare.',
			highlights: ['Role motorizate cu zone independente', 'Divertere 90°/30° cu control adaptiv', 'Telescopic loader integrat cu TMS']
		},
		{
			icon: ScanLine,
			title: 'Machine vision & măsurători',
			description: 'Scanare volumetrică, citire coduri și validare etichete pentru fiecare colet.',
			highlights: ['Portal 6-side scan', 'OCR pentru AWB și loturi', 'Verificare greutate cu IMU și celule de sarcină']
		},
		{
			icon: Factory,
			title: 'Robotică pentru paletizare',
			description: 'Celule robotizate preiau sorturile finale și paletizează automat.',
			highlights: ['Grapple adaptiv pentru colete mixte', 'Simulare layout și digital twin', 'Safety zone cu LiDAR și radare SICK']
		}
	];
</script>

<!-- Hero -->
<section class="relative py-32 bg-rpa-navy text-white overflow-hidden grain grid-pattern">
	<div class="absolute inset-0 bg-gradient-to-br from-rpa-navy via-rpa-blue-dark/40 to-rpa-navy"></div>
	<div class="absolute top-12 left-20 w-72 h-72 border border-rpa-accent/10 rounded-full"></div>
	<div class="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
		<div class="accent-line mx-auto mb-6 animate-fade-in-up"></div>
		<h1 class="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up delay-100">Logistică</h1>
		<p class="text-xl text-gray-300/90 max-w-3xl mx-auto animate-fade-in-up delay-200">
			Construim depozite autonome cu ESS, AMR, conveioare și machine vision pentru e-commerce, retail și 3PL.
		</p>
	</div>
</section>

<!-- Use Cases -->
<section class="py-24 bg-white">
	<div class="max-w-6xl mx-auto px-6 lg:px-8">
		<div class="max-w-3xl mb-14" use:reveal>
			<div class="accent-line mb-6"></div>
			<h2 class="font-heading text-3xl md:text-4xl font-bold text-rpa-navy mb-4">Fluxuri optimizate</h2>
			<p class="text-gray-500 text-lg">
				Automatizăm capetele de intrare/ieșire, zonele de picking și sortare astfel încât fiecare colet să fie trasabil și livrat mai rapid.
			</p>
		</div>
		<div class="grid md:grid-cols-3 gap-6">
			{#each useCases as item, i}
				<div class="bg-rpa-gray rounded-2xl p-8 border border-gray-100 hover-lift" style="transition-delay: {i * 100}ms" use:reveal>
					<div class="w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-gray-100 mb-5">
						<item.icon class="w-6 h-6 text-rpa-accent" />
					</div>
					<h3 class="font-heading text-xl font-bold text-rpa-navy mb-3">{item.title}</h3>
					<ul class="space-y-2 text-sm text-gray-600">
						{#each item.bullets as bullet}
							<li class="flex items-start gap-2">
								<span class="text-rpa-accent font-bold">•</span>
								<span>{bullet}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Solutions -->
<section class="py-24 bg-rpa-gray">
	<div class="max-w-6xl mx-auto px-6 lg:px-8">
		<div class="max-w-3xl mb-14 text-center mx-auto" use:reveal>
			<p class="text-xs font-heading font-semibold tracking-[0.3em] text-rpa-accent mb-4 uppercase">SOLUȚII PENTRU DEPOZITE</p>
			<h2 class="font-heading text-3xl md:text-4xl font-bold text-rpa-navy mb-4">Intralogistică scalabilă cu ESS + AMR</h2>
			<p class="text-gray-600">
				Platformele noastre conectează depozitul la clienți în timp real, menținând energie stabilă, trafic fluid și zero erori la expediere.
			</p>
		</div>
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each solutions as solution, i}
				<div class="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover-lift" style="transition-delay: {i * 80}ms" use:reveal>
					<div class="w-12 h-12 rounded-xl bg-rpa-accent/10 flex items-center justify-center mb-5">
						<solution.icon class="w-6 h-6 text-rpa-accent" />
					</div>
					<h3 class="font-heading text-xl font-bold text-rpa-navy mb-3">{solution.title}</h3>
					<p class="text-gray-600 text-sm mb-4">{solution.description}</p>
					<ul class="space-y-2 text-sm text-gray-600">
						{#each solution.highlights as highlight}
							<li class="flex items-start gap-2">
								<ShieldCheck class="w-4 h-4 text-rpa-accent mt-0.5" />
								<span>{highlight}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA -->
<section class="relative py-24 bg-rpa-navy text-white overflow-hidden grain grid-pattern">
	<div class="absolute inset-0 bg-gradient-to-br from-rpa-navy via-rpa-blue-dark/30 to-rpa-navy"></div>
	<div class="absolute bottom-14 right-20 w-64 h-64 border border-white/10 rounded-full"></div>
	<div class="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center" use:reveal>
		<div class="accent-line mx-auto mb-6"></div>
		<h2 class="font-heading text-3xl md:text-4xl font-bold mb-6">Transformați depozitul în hub autonom</h2>
		<p class="text-gray-300/90 mb-10 text-lg">
			Planificăm și implementăm intralogistică scalabilă cu ESS, AMR, conveioare și robotică pentru termene de livrare mai scurte.
		</p>
		<a
			href="/contact"
			class="inline-flex items-center gap-2 bg-rpa-accent hover:bg-rpa-accent-light text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200"
		>
			Contactează-ne
			<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
		</a>
	</div>
</section>
