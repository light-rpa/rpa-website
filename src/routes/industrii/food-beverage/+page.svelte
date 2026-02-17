<svelte:head>
	<title>Food & Beverage — Automatizare igienică, ESS și AMR | R.P.A.</title>
	<meta
		name="description"
		content="Soluții ESS, AMR, conveioare inox și machine vision pentru fabrici food & beverage: CIP, trasabilitate, ambalare și logistică frigorifică."
	/>
</svelte:head>

<script lang="ts">
	import { reveal } from '$lib/actions/animate';
	import {
		UtensilsCrossed,
		Thermometer,
		Droplets,
		PackageCheck,
		BatteryCharging,
		Bot,
		Cable,
		ScanLine,
		Factory,
		ShieldCheck
	} from 'lucide-svelte';

	const useCases = [
		{
			icon: UtensilsCrossed,
			title: 'Linii de procesare și ambalare',
			bullets: [
				'Conveioare inox IP66 cu zone de spălare',
				'PLC + SCADA pentru dozare și CIP',
				'Integrare etichetare, cântărire și reject automat'
			]
		},
		{
			icon: Thermometer,
			title: 'Lanț frigorific monitorizat',
			bullets: [
				'ESS pentru backup camere frigorifice',
				'Senzori temperatură/umiditate cu alarmare 24/7',
				'Compliance HACCP și IFS pe rapoarte automate'
			]
		},
		{
			icon: Droplets,
			title: 'Igienă și siguranță alimentară',
			bullets: [
				'Trasee fără zone moarte, șuruburi ascunse',
				'Materiale certificate FDA și garnituri food-grade',
				'Curățare automată și validare CIP/SIP'
			]
		}
	];

	const solutions = [
		{
			icon: BatteryCharging,
			title: 'ESS pentru continuitate',
			description: 'Microgrid și backup pentru linii frigorifice, pasteurizare și utilități critice.',
			highlights: ['Container inox cu HVAC redundant', 'Integrare cu generatoare și PV rooftop', 'Monitorizare SOC și rapoarte HACCP']
		},
		{
			icon: Bot,
			title: 'AMR pentru intralogistică igienică',
			description: 'Roboți mobili transportă paleți, lăzi și ingrediente în zone umede/seci.',
			highlights: ['Platforme IP54 și accesorii food-grade', 'Fleet manager + WMS pentru lotizare', 'Stații automate de încărcare și handoff conveioare']
		},
		{
			icon: Cable,
			title: 'Conveioare inox modulare',
			description: 'Benzile modulare și lanțurile flush grid acoperă fluxurile crude și ready-to-eat.',
			highlights: ['Profile igienice fără pori', 'Zone dedicate pentru inspecție și eșantionare', 'Condition monitoring pentru motoare și rulmenți']
		},
		{
			icon: ScanLine,
			title: 'Machine vision pentru calitate',
			description: 'Inspecție 2D/3D pentru etichete, nivel de umplere și contaminanți.',
			highlights: ['Citire lot și coduri GS1', 'Detecție particule și contaminare', 'Analitice AI pentru defecte subtile']
		},
		{
			icon: Factory,
			title: 'Robotică colaborativă & pick-and-place',
			description: 'Coboți și celule IP65 pentru ambalare secundară și paletizare.',
			highlights: ['End-effectore food-grade', 'Spălare cu presiune și protecție anticorozivă', 'Interblocări siguranță cu senzori SICK']
		}
	];
</script>

<!-- Hero -->
<section class="relative py-32 bg-rpa-navy text-white overflow-hidden grain grid-pattern">
	<div class="absolute inset-0 bg-gradient-to-br from-rpa-navy via-rpa-blue-dark/45 to-rpa-navy"></div>
	<div class="absolute bottom-10 left-16 w-72 h-72 border border-rpa-accent/10 rounded-full"></div>
	<div class="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
		<div class="accent-line mx-auto mb-6 animate-fade-in-up"></div>
		<h1 class="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up delay-100">Food & Beverage</h1>
		<p class="text-xl text-gray-300/90 max-w-3xl mx-auto animate-fade-in-up delay-200">
			Procese igienice, logistică frigorifică și control calitate cu ESS, AMR, conveioare inox și machine vision integrate.
		</p>
	</div>
</section>

<!-- Use Cases -->
<section class="py-24 bg-white">
	<div class="max-w-6xl mx-auto px-6 lg:px-8">
		<div class="max-w-3xl mb-14" use:reveal>
			<div class="accent-line mb-6"></div>
			<h2 class="font-heading text-3xl md:text-4xl font-bold text-rpa-navy mb-4">Procese pe care le digitalizăm</h2>
			<p class="text-gray-500 text-lg">
				Respectăm standardele HACCP, IFS și BRC, sincronizând zona de producție, ambalare și depozitare într-un flux trasabil.
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
			<p class="text-xs font-heading font-semibold tracking-[0.3em] text-rpa-accent mb-4 uppercase">SOLUȚII IGIENICE</p>
			<h2 class="font-heading text-3xl md:text-4xl font-bold text-rpa-navy mb-4">Echipamente pregătite pentru audit alimentar</h2>
			<p class="text-gray-600">
				Din ESS containerizate până la AMR și conveioare, fiecare soluție este validată pentru curățare, trasabilitate și timp minim de downtime.
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
		<h2 class="font-heading text-3xl md:text-4xl font-bold mb-6">Pregătiți-vă pentru următorul audit</h2>
		<p class="text-gray-300/90 mb-10 text-lg">
			Automatizăm fabricile food & beverage astfel încât producția și lanțul frigorific să rămână conforme și eficiente.
		</p>
		<a
			href="/contact"
			class="inline-flex items-center gap-2 bg-rpa-accent hover:bg-rpa-accent-light text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200"
		>
			Vorbește cu noi
			<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
		</a>
	</div>
</section>
