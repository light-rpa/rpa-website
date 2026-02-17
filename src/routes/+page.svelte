<svelte:head>
	<title>R.P.A. — ESS, AMR și Conveioare | Automatizare industrială în România</title>
	<meta
		name="description"
		content="Integram baterii ESS în România, roboți mobili AMR și conveioare industriale grele, alături de viziune artificială și senzori SICK pentru producția locală."
	/>
	<meta property="og:title" content="R.P.A. — Baterii ESS, AMR și Conveioare" />
	<meta
		property="og:description"
		content="Energy storage systems Romania, AMR roboți mobili autonomi și conveioare industriale integrate într-o singură echipă."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://rpa.ro/" />
	<meta property="og:image" content="https://rpa.ro/infinity-logo-v3.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="R.P.A. — ESS, AMR și Conveioare" />
	<meta
		name="twitter:description"
		content="Integrare completă: baterii ESS Romania, AMR roboți mobili autonomi, conveioare industriale și automatizare."
	/>
	<meta name="twitter:image" content="https://rpa.ro/infinity-logo-v3.png" />
</svelte:head>

<script lang="ts">
	import { reveal } from '$lib/actions/animate';
	import InfinityLogo from '$lib/components/InfinityLogo.svelte';
	import {
		BatteryCharging,
		Bot,
		Cable,
		Factory,
		Warehouse,
		Car,
		UtensilsCrossed,
		Package,
		Cpu,
		FlaskConical,
		Cog,
		ShieldCheck,
		ScanLine,
		BrainCircuit,
		CircuitBoard
	} from 'lucide-svelte';

	const heroBadges = ['Baterii ESS Romania', 'AMR roboți mobili autonomi', 'Conveioare industriale inteligente'];

	const deliveryPillars = [
		{
			icon: FlaskConical,
			title: 'Consultanță & Inovație',
			description: 'Audit energetic, dimensionare ESS containerizate, simulări de trafic AMR și layout-uri de conveioare.'
		},
		{
			icon: Cog,
			title: 'Integrare & Execuție',
			description: 'Inginerie mecanică, PLC/SCADA, BMS, fleet manager și instalare on-site cu echipe autorizate SICK.'
		},
		{
			icon: ShieldCheck,
			title: 'Operațional 24/7',
			description: 'Telemetrie, mentenanță predictivă, SLA-uri industriale și instruire pentru personalul din fabrică.'
		}
	];

	const focusAreas = [
		{
			icon: BatteryCharging,
			title: 'Baterii ESS & Energy Storage Systems',
			description: 'Proiectăm și instalăm baterii ESS modulare (LFP/LMFP) pentru parcuri fotovoltaice, microgrid și industrie grea.',
			bullets: ['Dimensionare până la zeci de MWh', 'Integrare EMS, SCADA și PCS', 'Certificări și securitate la incendiu conform SR EN 62933']
		},
		{
			icon: Bot,
			title: 'AMR — Roboți Mobili Autonomi',
			description: 'Flote AMR orchestrate prin WMS/MES, cu navigație SLAM și senzori de siguranță SICK pentru intralogistică.',
			bullets: ['Cartografiere și simulare fluxuri', 'Fleet manager și traffic control', 'Interfață cu linii robotizate și ERP']
		},
		{
			icon: Cable,
			title: 'Conveioare & Intralogistică Grele',
			description: 'Conveioare modulare, lanțuri, role motorizate și sisteme hibride AMR+conveior pentru curățenie, food și automotive.',
			bullets: ['Structuri inox/IP65 și execuție heavy-duty', 'Monitorizare vibrații și condition monitoring', 'Sincronizare PLC, VFD și safety relays']
		}
	];

	const industries = [
		{
			icon: Factory,
			name: 'Energie & Stocare',
			description: 'Energy storage systems Romania pentru microgrid, parcuri PV și echilibrare rețea.'
		},
		{
			icon: Warehouse,
			name: 'Logistică & E-Commerce',
			description: 'Conveioare industriale, AMR pentru picking și depozite frigorifice.'
		},
		{
			icon: Car,
			name: 'Automotive & E-Mobility',
			description: 'Celule robotizate, linii de baterii, testare end-of-line.'
		},
		{
			icon: UtensilsCrossed,
			name: 'Food & Beverage',
			description: 'Conveioare inox, CIP, trasabilitate și inspecție vizuală.'
		},
		{
			icon: Package,
			name: 'Retail & FMCG',
			description: 'Sortare automatizată, paletizare și SICK barcode gating.'
		},
		{
			icon: Cpu,
			name: 'Electronică & High-Tech',
			description: 'Machine vision, pick-and-place și manipulare de precizie.'
		}
	];

	const complementaryCapabilities = [
		{
			icon: ScanLine,
			title: 'Machine Vision 2D/3D',
			description: 'Oferim inspecție și ghidare robotică cu camere SICK, Cognex și algoritmi AI proprietari.'
		},
		{
			icon: BrainCircuit,
			title: 'Integrare Robotică',
			description: 'Celule cobot și industriale sincronizate cu AMR, conveioare și ESS pentru fluxuri mixte.'
		},
		{
			icon: CircuitBoard,
			title: 'Automatizare PLC, SCADA & MES',
			description: 'Programare Siemens, Rockwell, Beckhoff și conectivitate cu EMS, BMS și fleet management.'
		},
		{
			icon: ShieldCheck,
			title: 'Safety & Senzori SICK',
			description: 'LiDAR, cortine optice, zone safe pentru AMR și conveioare cu cerințe SIL3.'
		}
	];
</script>

<section class="relative min-h-screen flex items-center bg-rpa-navy text-white overflow-hidden grain grid-pattern">
	<div class="absolute inset-0 bg-gradient-to-br from-black/40 via-rpa-blue-dark/60 to-rpa-navy"></div>
	<div class="relative z-10 w-full max-w-6xl mx-auto px-6 py-24">
		<div class="flex flex-col gap-10 lg:flex-row lg:items-center">
			<div class="flex-1 text-center lg:text-left">
				<div class="flex items-center justify-center lg:justify-start gap-4 mb-8">
					<InfinityLogo size={72} />
					<div>
						<p class="text-sm uppercase tracking-[0.35em] text-rpa-accent">R.P.A.</p>
						<p class="text-sm text-gray-300">Robotic Process Automation</p>
					</div>
				</div>
				<h1 class="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
					Sisteme ESS, AMR și conveioare <span class="text-rpa-accent">gata pentru producție grea</span>
				</h1>
				<p class="text-xl text-gray-300 mb-8">
					Integrăm baterii ESS România, AMR roboți mobili autonomi și conveioare industriale cu machine vision, robotică și senzori SICK pentru fabrici reziliente.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start">
					<a href="/contact" class="bg-rpa-accent hover:bg-rpa-accent-dark text-white font-semibold px-8 py-4 rounded-xl btn-hover text-lg">Programează o discuție</a>
					<a href="/servicii" class="border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl text-lg transition">
						Vezi capabilitățile
					</a>
				</div>
				<div class="flex flex-wrap gap-3 justify-center lg:justify-start">
					{#each heroBadges as badge}
						<span class="text-xs uppercase tracking-[0.2em] bg-white/5 border border-white/20 rounded-full px-4 py-2 text-gray-200">{badge}</span>
					{/each}
				</div>
			</div>
			<div class="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
				<div class="bg-white/5 border border-white/10 rounded-2xl p-6">
					<p class="text-sm text-gray-400">Capacități ESS proiectate</p>
					<p class="text-3xl font-bold">10+ MWh</p>
					<p class="text-sm text-gray-400 mt-2">Energy storage systems România</p>
				</div>
				<div class="bg-white/5 border border-white/10 rounded-2xl p-6">
					<p class="text-sm text-gray-400">Flote AMR integrate</p>
					<p class="text-3xl font-bold">50+ roboți</p>
					<p class="text-sm text-gray-400 mt-2">Traffic control & safety SIL3</p>
				</div>
				<div class="bg-white/5 border border-white/10 rounded-2xl p-6">
					<p class="text-sm text-gray-400">Conveioare livrate</p>
					<p class="text-3xl font-bold">8 km+</p>
					<p class="text-sm text-gray-400 mt-2">Lanțuri, role, inox heavy-duty</p>
				</div>
				<div class="bg-white/5 border border-white/10 rounded-2xl p-6">
					<p class="text-sm text-gray-400">Suport</p>
					<p class="text-3xl font-bold">24/7</p>
					<p class="text-sm text-gray-400 mt-2">Telemetrie, SLA, remote response</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="py-24 bg-white">
	<div class="max-w-6xl mx-auto px-6">
		<div class="text-center max-w-3xl mx-auto mb-16">
			<p class="text-sm font-semibold tracking-[0.3em] text-rpa-accent" use:reveal>EXPERTIZĂ PRINCIPALĂ</p>
			<h2 class="text-3xl md:text-4xl font-bold text-rpa-navy mt-4" use:reveal>Zone critice pe care le livrăm end-to-end</h2>
			<p class="text-gray-600 mt-4" use:reveal>
				De la engineering la service, conectăm ESS, AMR și conveioare într-o platformă unică de automatizare industrială.
			</p>
		</div>
		<div class="grid md:grid-cols-3 gap-8">
			{#each focusAreas as area}
				<div class="bg-rpa-gray rounded-2xl p-8 card-hover border border-gray-100" use:reveal>
					<div class="w-12 h-12 bg-rpa-accent/10 rounded-xl flex items-center justify-center mb-4">
						<area.icon class="w-6 h-6 text-rpa-accent" />
					</div>
					<h3 class="text-xl font-bold text-rpa-navy mb-3">{area.title}</h3>
					<p class="text-gray-600 mb-4">{area.description}</p>
					<ul class="space-y-2 text-sm text-gray-500">
						{#each area.bullets as bullet}
							<li class="flex items-start gap-2">
								<span class="text-rpa-accent mt-0.5">•</span>
								<span>{bullet}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="py-24 bg-rpa-gray">
	<div class="max-w-6xl mx-auto px-6">
		<h2 class="text-3xl font-bold text-center text-rpa-navy mb-4" use:reveal>Pilonii noștri de livrare</h2>
		<p class="text-center text-gray-600 mb-16 max-w-3xl mx-auto" use:reveal>
			Proces complet: consultanță, integrare hardware-software și operaționalizare cu SLA industrial.
		</p>
		<div class="grid md:grid-cols-3 gap-8">
			{#each deliveryPillars as service}
				<div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100" use:reveal>
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

<section class="py-24 bg-white">
	<div class="max-w-6xl mx-auto px-6">
		<div class="flex flex-col lg:flex-row gap-12 items-start">
			<div class="lg:w-1/2" use:reveal>
				<p class="text-sm font-semibold tracking-[0.3em] text-rpa-accent">CAPABILITĂȚI COMPLEMENTARE</p>
				<h2 class="text-3xl font-bold text-rpa-navy mt-4 mb-4">Machine vision, robotică și senzori SICK</h2>
				<p class="text-gray-600">
					Menținem focusul pe ESS, AMR și conveioare, dar livrăm și tot ecosistemul: machine vision 2D/3D, integrare robotică, automatizare PLC/SCADA și siguranță funcțională.
				</p>
				<p class="text-gray-600 mt-4">
					Toate soluțiile sunt testate în teren industrial, cu configurații redundante și documentație completă pentru audituri OEM.
				</p>
			</div>
			<div class="lg:w-1/2 grid sm:grid-cols-2 gap-6">
				{#each complementaryCapabilities as cap}
					<div class="bg-rpa-gray rounded-2xl p-6 border border-gray-100 hover-lift" use:reveal>
						<div class="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-3">
							<cap.icon class="w-5 h-5 text-rpa-accent" />
						</div>
						<h3 class="text-base font-semibold text-rpa-navy mb-2">{cap.title}</h3>
						<p class="text-sm text-gray-600">{cap.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<section class="py-24 bg-rpa-gray">
	<div class="max-w-6xl mx-auto px-6">
		<h2 class="text-3xl font-bold text-center text-rpa-navy mb-4" use:reveal>Industrii strategice</h2>
		<p class="text-center text-gray-600 mb-16 max-w-3xl mx-auto" use:reveal>
			Menținem liniile critice pentru energie/stocare, automotive, logistică, food & beverage și electronică.
		</p>
		<div class="grid md:grid-cols-3 gap-6">
			{#each industries as industry}
				<div class="bg-white rounded-2xl p-8 card-hover border border-gray-100" use:reveal>
					<div class="w-12 h-12 bg-rpa-accent/10 rounded-xl flex items-center justify-center mb-4">
						<industry.icon class="w-6 h-6 text-rpa-accent" />
					</div>
					<h3 class="font-semibold text-rpa-navy mb-2">{industry.name}</h3>
					<p class="text-gray-600 text-sm">{industry.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="py-24 bg-rpa-navy text-white text-center">
	<div class="max-w-3xl mx-auto px-6">
		<h2 class="text-3xl font-bold mb-6" use:reveal>Pregătește-ți fabrica pentru următorul val</h2>
		<p class="text-xl text-gray-300 mb-10" use:reveal>
			De la baterii ESS la flote AMR și conveioare inteligente, echipa R.P.A. livrează proiecte industriale complete în România.
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center" use:reveal>
			<a href="/contact" class="bg-rpa-accent hover:bg-rpa-accent-dark text-white font-semibold px-8 py-4 rounded-lg btn-hover">
				Completează formularul
			</a>
			<a href="tel:+40751271751" class="border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200">
				+40 751 271 751
			</a>
		</div>
	</div>
</section>
