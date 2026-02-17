<svelte:head>
	<title>Electronică — Machine vision, ESS și robotică de precizie | R.P.A.</title>
	<meta
		name="description"
		content="Integram ESS, AMR, conveioare, machine vision și robotică pentru fabrici de electronică și PCB: AOI, testare funcțională, cleanroom și trasabilitate."
	/>
</svelte:head>

<script lang="ts">
	import { reveal } from '$lib/actions/animate';
	import {
		CircuitBoard,
		Cpu,
		Microscope,
		BatteryCharging,
		Bot,
		Cable,
		ScanLine,
		Factory,
		ShieldCheck
	} from 'lucide-svelte';

	const useCases = [
		{
			icon: CircuitBoard,
			title: 'Asamblare PCB & SMT',
			bullets: [
				'Conveioare ESD-safe și magazii inteligente',
				'Interfață cu linii SMT, SPI și reflow',
				'Gestionarea programelor de schimb rapid (SMED)'
			]
		},
		{
			icon: Cpu,
			title: 'Testare funcțională & burn-in',
			bullets: [
				'ESS tampon pentru regimuri energetice sensibile',
				'Fixtures automate cu monitorizare temperatură',
				'Integrare MES pentru rapoarte și certificate COA'
			]
		},
		{
			icon: Microscope,
			title: 'Control calitate optică',
			bullets: [
				'AOI 2D/3D și microscopie automată',
				'Detectare defecte BGA, QFN și conectori fine pitch',
				'Analitice AI pentru trending și reacții CAPA'
			]
		}
	];

	const solutions = [
		{
			icon: BatteryCharging,
			title: 'ESS pentru linii sensibile',
			description: 'Microgrid și UPS industrial pentru linii SMT, testare și camere climatice.',
			highlights: ['Filtrare armonici și stabilizare tensiune', 'Integrare cu generatoare și PV', 'Monitorizare SOC și alarmare instant']
		},
		{
			icon: Bot,
			title: 'AMR ESD-safe',
			description: 'Roboți mobili transportă magazine PCB și containere cu componente în zona cleanroom.',
			highlights: ['Platforme cu împământare permanentă', 'Acces controlat prin badge și semafoare', 'Fleet manager sincronizat cu MES și kanban']
		},
		{
			icon: Cable,
			title: 'Conveioare pentru electronice fine',
			description: 'Sisteme tip pallet, edge-belt și transferuri fără vibrații.',
			highlights: ['Materiale ESD și senzori de poziționare', 'Indexare precisă pentru stații automate', 'Compatibilitate cu magazine Smema']
		},
		{
			icon: ScanLine,
			title: 'Machine vision & AOI',
			description: 'Module de inspecție 2D/3D integrate cu linii SMT și celule robotizate.',
			highlights: ['AOI multi-culoare și profilometru 3D', 'Citire DataMatrix și RFID', 'Rețele neurale pentru defecte complexe']
		},
		{
			icon: Factory,
			title: 'Robotică de precizie',
			description: 'Celule pick-and-place, screw driving și testare finală cu repetabilitate sub-milimetrica.',
			highlights: ['Coboți și SCARA cu control forță', 'Sisteme de vacuum și screw feeders inteligente', 'Siguranță cat. 3 cu senzori SICK']
		}
	];
</script>

<!-- Hero -->
<section class="relative py-32 bg-rpa-navy text-white overflow-hidden grain grid-pattern">
	<div class="absolute inset-0 bg-gradient-to-br from-rpa-navy via-rpa-blue-dark/40 to-rpa-navy"></div>
	<div class="absolute top-12 right-16 w-72 h-72 border border-rpa-accent/10 rounded-full"></div>
	<div class="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
		<div class="accent-line mx-auto mb-6 animate-fade-in-up"></div>
		<h1 class="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up delay-100">Electronică</h1>
		<p class="text-xl text-gray-300/90 max-w-3xl mx-auto animate-fade-in-up delay-200">
			Linii SMT, AOI avansat și logistică ESD-safe livrate cu ESS, AMR, conveioare și robotică de precizie.
		</p>
	</div>
</section>

<!-- Use Cases -->
<section class="py-24 bg-white">
	<div class="max-w-6xl mx-auto px-6 lg:px-8">
		<div class="max-w-3xl mb-14" use:reveal>
			<div class="accent-line mb-6"></div>
			<h2 class="font-heading text-3xl md:text-4xl font-bold text-rpa-navy mb-4">Procese electronice critice</h2>
			<p class="text-gray-500 text-lg">
				Menținem controlul particulelor, ESD și trasabilitatea completă pentru OEM-uri și EMS din automotive, industrial și consumer.
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
			<p class="text-xs font-heading font-semibold tracking-[0.3em] text-rpa-accent mb-4 uppercase">SOLUȚII PENTRU HIGH-TECH</p>
			<h2 class="font-heading text-3xl md:text-4xl font-bold text-rpa-navy mb-4">Integrare completă ESS + AMR + Vision</h2>
			<p class="text-gray-600">
				Automatizăm liniile electronice cu aceeași platformă de monitorizare energetică, logistică internă și control calitate optic 24/7.
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
	<div class="absolute bottom-12 left-16 w-64 h-64 border border-white/10 rounded-full"></div>
	<div class="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center" use:reveal>
		<div class="accent-line mx-auto mb-6"></div>
		<h2 class="font-heading text-3xl md:text-4xl font-bold mb-6">Echipăm fabrica pentru next-gen electronics</h2>
		<p class="text-gray-300/90 mb-10 text-lg">
			Contactați-ne pentru integrarea ESS, AMR, conveioare și machine vision adaptate cerințelor ESD și cleanroom.
		</p>
		<a
			href="/contact"
			class="inline-flex items-center gap-2 bg-rpa-accent hover:bg-rpa-accent-light text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200"
		>
			Contactați experții
			<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
		</a>
	</div>
</section>
