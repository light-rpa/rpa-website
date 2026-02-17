<svelte:head>
	<title>Automotive — Automatizare, ESS și AMR pentru producția auto | R.P.A.</title>
	<meta
		name="description"
		content="Integram ESS, AMR, conveioare și machine vision pentru industria automotive din România: linii de baterii, sudare, control calitate și logistică internă."
	/>
</svelte:head>

<script lang="ts">
	import { reveal } from '$lib/actions/animate';
	import { Car, Gauge, Wrench, BatteryCharging, Bot, Cable, ScanLine, Factory, ShieldCheck } from 'lucide-svelte';

	const useCases = [
		{
			icon: Car,
			title: 'Asamblare vehicule & baterii',
			bullets: [
				'Kituri Just-in-Sequence sincronizate cu WMS și PLC',
				'Linii module & pack HV cu trasabilitate completă',
				'Integrare station buffer și testare EOL'
			]
		},
		{
			icon: Gauge,
			title: 'Testare & validare',
			bullets: [
				'Standuri HV cu monitorizare BMS și EMS',
				'Camera închisă pentru cicluri de încărcare/descărcare',
				'Analitice SPC integrate în MES'
			]
		},
		{
			icon: Wrench,
			title: 'Celule robotizate',
			bullets: [
				'Sudare MIG/TIG și aplicare adezivi structural',
				'Paletizare motoare și manipulare componente grele',
				'Safety SICK și interlock cu linii conveioare'
			]
		}
	];

	const solutions = [
		{
			icon: BatteryCharging,
			title: 'ESS pentru e-mobility',
			description: 'Buffer energetic și test racks pentru linii de baterii și celule HV.',
			highlights: ['Rack-uri LFP/LMFP până la 1500 V', 'Integrare EMS, SCADA și HVAC', 'Protecție incendiu NFPA / SR EN 62933']
		},
		{
			icon: Bot,
			title: 'AMR pentru logistică internă',
			description: 'Flote AMR livrează kituri și componente JIS între magazii și linii.',
			highlights: ['Fleet manager cu traffic control', 'Pick-up automat cu lift sau top module', 'Handshakes Andon & PLC']
		},
		{
			icon: Cable,
			title: 'Conveioare heavy-duty',
			description: 'Trasee hibride bandă + role pentru caroserii, powertrain și baterii.',
			highlights: ['Structuri inox/IP54 pentru zone curate', 'Condition monitoring vibrații și temperatură', 'Integrare VFD, safety relays și MES']
		},
		{
			icon: ScanLine,
			title: 'Machine vision 2D/3D',
			description: 'Inspecție pentru conectică, suduri laser și finisaje interioare.',
			highlights: ['AOI cu camere liniare/3D', 'Citire DataMatrix și OCR pentru trasabilitate', 'Algoritmi AI pentru defecte estetice']
		},
		{
			icon: Factory,
			title: 'Celule robotizate integrate',
			description: 'Robotizare pentru sudare, aplicare adeziv, montaj și testare.',
			highlights: ['Programare multi-brand (ABB, KUKA, Fanuc)', 'Simulare offline și commissioning rapid', 'Safety zonal cu LiDAR și cortine SICK']
		}
	];
</script>

<!-- Hero -->
<section class="relative py-32 bg-rpa-navy text-white overflow-hidden grain grid-pattern">
	<div class="absolute inset-0 bg-gradient-to-br from-rpa-navy via-rpa-blue-dark/40 to-rpa-navy"></div>
	<div class="absolute top-10 right-16 w-80 h-80 border border-rpa-accent/5 rounded-full"></div>
	<div class="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
		<div class="accent-line mx-auto mb-6 animate-fade-in-up"></div>
		<h1 class="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up delay-100">
			Automotive
		</h1>
		<p class="text-xl text-gray-300/90 max-w-3xl mx-auto animate-fade-in-up delay-200">
			Integram ESS, AMR, conveioare și celule robotizate pentru fabrici auto și producători e-mobility din România.
		</p>
	</div>
</section>

<!-- Use Cases -->
<section class="py-24 bg-white">
	<div class="max-w-6xl mx-auto px-6 lg:px-8">
		<div class="max-w-3xl mb-14" use:reveal>
			<div class="accent-line mb-6"></div>
			<h2 class="font-heading text-3xl md:text-4xl font-bold text-rpa-navy mb-4">Scenarii critice</h2>
			<p class="text-gray-500 text-lg">
				Acoperim întregul flux perimetral: de la intrarea componentelor până la testare end-of-line, cu focus pe trasabilitate și siguranță funcțională.
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
			<p class="text-xs font-heading font-semibold tracking-[0.3em] text-rpa-accent mb-4 uppercase">SOLUȚII DEDICATE</p>
			<h2 class="font-heading text-3xl md:text-4xl font-bold text-rpa-navy mb-4">ESS, AMR și robotică pentru automotive</h2>
			<p class="text-gray-600">
				Soluții validate în proiecte OEM, Tier 1 și Tier 2, compatibile cu standardele VDA, ISO 26262 și cerințe de calitate specifice e-mobility.
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
	<div class="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center" use:reveal>
		<div class="accent-line mx-auto mb-6"></div>
		<h2 class="font-heading text-3xl md:text-4xl font-bold mb-6">Planificați următorul proiect automotive</h2>
		<p class="text-gray-300/90 mb-10 text-lg">
			Discutăm rapid despre cerințele dumneavoastră pentru ESS, AMR, conveioare și celule robotizate, cu livrare la cheie în România și UE.
		</p>
		<a
			href="/contact"
			class="inline-flex items-center gap-2 bg-rpa-accent hover:bg-rpa-accent-light text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200"
		>
			Contactează echipa
			<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
		</a>
	</div>
</section>
