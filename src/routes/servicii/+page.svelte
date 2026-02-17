<svelte:head>
	<title>Servicii — ESS, AMR și Conveioare | R.P.A.</title>
	<meta
		name="description"
		content="Servicii end-to-end pentru baterii ESS Romania, AMR roboți mobili autonomi, conveioare industriale, machine vision și integrare robotică."
	/>
	<meta property="og:title" content="Servicii — R.P.A. Integrator ESS, AMR, Conveioare" />
	<meta
		property="og:description"
		content="Engineering, implementare și mentenanță pentru energy storage systems Romania, AMR și conveioare inteligente."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://rpa.ro/servicii" />
	<meta property="og:image" content="https://rpa.ro/infinity-logo-v3.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Servicii ESS • AMR • Conveioare — R.P.A." />
	<meta
		name="twitter:description"
		content="Consultanță, integrare și suport pentru baterii ESS Romania, AMR roboți mobili autonomi și conveioare industriale."
	/>
	<meta name="twitter:image" content="https://rpa.ro/infinity-logo-v3.png" />
</svelte:head>

<script lang="ts">
	import { reveal } from '$lib/actions/animate';
	import {
		FlaskConical,
		Cog,
		ShieldCheck,
		Wrench,
		MonitorCog,
		Plug,
		ClipboardCheck,
		BookOpen,
		GraduationCap,
		PhoneCall,
		Settings,
		Rocket,
		BatteryCharging,
		Bot,
		Cable,
		ScanLine
	} from 'lucide-svelte';

	const flagshipSolutions = [
		{
			icon: BatteryCharging,
			title: 'Baterii ESS & Energy Storage',
			description: 'Dimensionare, BMS, integrare EMS/SCADA și comisionare pentru energy storage systems Romania.',
			bullets: ['Containerizare LFP/LMFP', 'Protecție incendiu, HVAC, PCS', 'Documentație ANRE & SR EN 62933']
		},
		{
			icon: Bot,
			title: 'AMR — Roboți Mobili Autonomi',
			description: 'Analizăm fluxurile logistice, alegem platforma AMR și integrăm fleet manager cu WMS/MES.',
			bullets: ['Cartografiere și simulare SLAM', 'Fleet manager + traffic control', 'Safety SICK și PLC interlock']
		},
		{
			icon: Cable,
			title: 'Conveioare & Intralogistică',
			description: 'Proiectăm conveioare modulare, transferuri hibride AMR + conveioare și structuri inox/IP65.',
			bullets: ['Lanț, bandă, role motorizate', 'Condition monitoring și vibrații', 'Integrare PLC, VFD, machine vision']
		},
		{
			icon: ScanLine,
			title: 'Machine Vision & Control Calitate',
			description: 'Camere 2D/3D, algoritmi AI și senzori SICK pentru trasabilitate și ghidare robotică.',
			bullets: ['Inspecție de suprafață', 'Citire coduri și OCR', 'Ghidare robotică 3D']
		}
	];

	const researchItems = [
		'Analiză detaliată a proceselor existente',
		'Studii de fezabilitate și ROI',
		'Design ingineresc 3D și simulare',
		'Simulări digitale pentru ESS, AMR și conveioare',
		'Prototipare rapidă și testare PoC',
		'Documentație tehnică completă',
		'Selectarea optimă a componentelor'
	];

	const researchSteps = [
		{ title: 'Consultanță Inițială', desc: 'Înțelegem nevoile și obiectivele dumneavoastră.' },
		{ title: 'Analiză Tehnică', desc: 'Evaluăm procesele și identificăm soluțiile optime.' },
		{ title: 'Design & Simulare', desc: 'Creăm designul detaliat și simulăm funcționarea.' },
		{ title: 'Validare & Aprobare', desc: 'Prezentăm soluția finală pentru aprobare.' }
	];

	const implItems = [
		'Achiziție și management componente',
		'Asamblare și integrare mecanică',
		'Programare PLC, HMI și roboți',
		'Skid-uri ESS, PCS și integrare HVAC',
		'Sincronizare AMR cu conveioare inteligente',
		'Instalare și configurare la fața locului',
		'Teste de acceptanță (FAT/SAT)',
		'Training operatori și documentație'
	];

	const implFeatures = [
		{ icon: Wrench, title: 'Instalare' },
		{ icon: MonitorCog, title: 'Programare' },
		{ icon: Plug, title: 'Integrare' },
		{ icon: ClipboardCheck, title: 'Teste FAT/SAT' },
		{ icon: BookOpen, title: 'Documentație' },
		{ icon: GraduationCap, title: 'Training' }
	];

	const supportItems = [
		'Suport tehnic telefonic și remote 24/7',
		'Monitorizare SOC și temperatură pentru ESS',
		'Mentenanță preventivă programată',
		'Fleet management AMR și actualizări OTA',
		'Intervenții rapide la fața locului',
		'Actualizări software și optimizare',
		'Piese de schimb și consumabile',
		'Rapoarte periodice de performanță'
	];

	const supportTiers = [
		{
			icon: PhoneCall,
			title: 'Suport Remote',
			desc: 'Asistență telefonică și acces remote pentru ESS, AMR și conveioare, cu diagnosticare și resetări controlate.'
		},
		{
			icon: Settings,
			title: 'Mentenanță Preventivă',
			desc: 'Inspecții programate, calibrare BMS, verificări safety și lanțuri conveioare pentru funcționare optimă.'
		},
		{
			icon: Rocket,
			title: 'Optimizare Continuă',
			desc: 'Analiză performanță, actualizări software/fleet, optimizări energetice și rapoarte pentru management.'
		}
	];
</script>

<!-- Hero -->
<section class="py-24 bg-gradient-to-br from-rpa-navy via-rpa-blue-dark to-rpa-navy text-white">
	<div class="max-w-4xl mx-auto px-6 text-center">
		<h1 class="text-4xl md:text-5xl font-extrabold mb-6">Serviciile Noastre</h1>
		<p class="text-xl text-gray-300 max-w-2xl mx-auto">
			Baterii ESS, flote AMR, conveioare industriale și machine vision — toate integrate de aceeași echipă.
		</p>
	</div>
</section>

<!-- Flagship Solutions -->
<section class="py-24 bg-white">
	<div class="max-w-6xl mx-auto px-6">
		<div class="text-center max-w-3xl mx-auto mb-16">
			<p class="text-sm font-semibold tracking-[0.3em] text-rpa-accent" use:reveal>FOCUS STRATEGIC</p>
			<h2 class="text-3xl md:text-4xl font-bold text-rpa-navy mt-4" use:reveal>Soluții critice livrate end-to-end</h2>
			<p class="text-gray-600 mt-4" use:reveal>
				Consultanță, engineering, implementare și suport pentru baterii ESS România, AMR roboți mobili autonomi și conveioare industriale grele.
			</p>
		</div>
		<div class="grid md:grid-cols-2 gap-8">
			{#each flagshipSolutions as solution}
				<div class="bg-rpa-gray rounded-2xl p-8 border border-gray-100 card-hover" use:reveal>
					<div class="w-12 h-12 bg-rpa-accent/10 rounded-xl flex items-center justify-center mb-4">
						<solution.icon class="w-6 h-6 text-rpa-accent" />
					</div>
					<h3 class="text-xl font-bold text-rpa-navy mb-3">{solution.title}</h3>
					<p class="text-gray-600 mb-4">{solution.description}</p>
					<ul class="space-y-2 text-sm text-gray-600">
						{#each solution.bullets as item}
							<li class="flex items-start gap-2">
								<span class="text-rpa-accent font-bold mt-0.5">•</span>
								<span>{item}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Process Overview -->
<section class="py-16 bg-white">
	<div class="max-w-4xl mx-auto px-6">
		<div use:reveal class="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
			<div class="bg-rpa-gray rounded-xl px-6 py-4">
				<div class="w-10 h-10 bg-rpa-accent/10 rounded-lg flex items-center justify-center mb-2 mx-auto">
					<FlaskConical class="w-5 h-5 text-rpa-accent" />
				</div>
				<div class="font-bold text-rpa-navy text-sm">Cercetare & Design</div>
			</div>
			<div class="text-rpa-accent text-2xl hidden md:block">→</div>
			<div class="text-rpa-accent text-2xl md:hidden">↓</div>
			<div class="bg-rpa-gray rounded-xl px-6 py-4">
				<div class="w-10 h-10 bg-rpa-accent/10 rounded-lg flex items-center justify-center mb-2 mx-auto">
					<Cog class="w-5 h-5 text-rpa-accent" />
				</div>
				<div class="font-bold text-rpa-navy text-sm">Implementare</div>
			</div>
			<div class="text-rpa-accent text-2xl hidden md:block">→</div>
			<div class="text-rpa-accent text-2xl md:hidden">↓</div>
			<div class="bg-rpa-gray rounded-xl px-6 py-4">
				<div class="w-10 h-10 bg-rpa-accent/10 rounded-lg flex items-center justify-center mb-2 mx-auto">
					<ShieldCheck class="w-5 h-5 text-rpa-accent" />
				</div>
				<div class="font-bold text-rpa-navy text-sm">Suport & Mentenanță</div>
			</div>
		</div>
	</div>
</section>

<!-- Service 1: Research & Design -->
<section class="py-24 bg-rpa-gray">
	<div class="max-w-6xl mx-auto px-6">
		<div class="grid md:grid-cols-2 gap-16 items-center">
			<div use:reveal>
				<div class="w-14 h-14 bg-rpa-accent/10 rounded-2xl flex items-center justify-center mb-6">
					<FlaskConical class="w-7 h-7 text-rpa-accent" />
				</div>
				<h2 class="text-3xl font-bold text-rpa-navy mb-6">Cercetare & Design</h2>
				<p class="text-gray-600 mb-6 leading-relaxed">
					Fiecare proiect de succes începe cu o analiză temeinică și un design bine gândit. Echipa noastră de ingineri lucrează îndeaproape cu dumneavoastră pentru a înțelege procesele, a identifica oportunitățile de automatizare și a dezvolta soluția optimă.
				</p>
				<ul class="space-y-3">
					{#each researchItems as item}
						<li class="flex items-start gap-3">
							<span class="text-rpa-accent font-bold mt-0.5">✓</span>
							<span class="text-gray-600">{item}</span>
						</li>
					{/each}
				</ul>
			</div>
			<div use:reveal class="bg-white rounded-2xl p-8 shadow-sm">
				<h3 class="font-bold text-rpa-navy mb-4">Etapele Procesului</h3>
				<div class="space-y-4">
					{#each researchSteps as step, i}
						<div class="flex gap-4 items-start">
							<div class="w-8 h-8 rounded-full bg-rpa-accent text-white flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</div>
							<div>
								<div class="font-semibold text-rpa-navy">{step.title}</div>
								<div class="text-sm text-gray-600">{step.desc}</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Service 2: Implementation -->
<section class="py-24 bg-white">
	<div class="max-w-6xl mx-auto px-6">
		<div class="grid md:grid-cols-2 gap-16 items-center">
			<div use:reveal class="order-2 md:order-1 bg-rpa-gray rounded-2xl p-8">
				<h3 class="font-bold text-rpa-navy mb-4">Ce Include</h3>
				<div class="grid grid-cols-2 gap-4">
					{#each implFeatures as feat}
						<div class="bg-white rounded-xl p-4 card-hover">
							<div class="w-8 h-8 bg-rpa-accent/10 rounded-lg flex items-center justify-center mb-2">
								<feat.icon class="w-4 h-4 text-rpa-accent" />
							</div>
							<div class="text-sm font-semibold text-rpa-navy">{feat.title}</div>
						</div>
					{/each}
				</div>
			</div>
			<div use:reveal class="order-1 md:order-2">
				<div class="w-14 h-14 bg-rpa-accent/10 rounded-2xl flex items-center justify-center mb-6">
					<Cog class="w-7 h-7 text-rpa-accent" />
				</div>
				<h2 class="text-3xl font-bold text-rpa-navy mb-6">Implementare</h2>
				<p class="text-gray-600 mb-6 leading-relaxed">
					Transformăm designul în realitate cu precizie și profesionalism. Echipa noastră gestionează întregul proces de implementare, de la achiziția componentelor la instalare, configurare și punerea în funcțiune.
				</p>
				<ul class="space-y-3">
					{#each implItems as item}
						<li class="flex items-start gap-3">
							<span class="text-rpa-accent font-bold mt-0.5">✓</span>
							<span class="text-gray-600">{item}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Service 3: Support -->
<section class="py-24 bg-rpa-gray">
	<div class="max-w-6xl mx-auto px-6">
		<div class="grid md:grid-cols-2 gap-16 items-center">
			<div use:reveal>
				<div class="w-14 h-14 bg-rpa-accent/10 rounded-2xl flex items-center justify-center mb-6">
					<ShieldCheck class="w-7 h-7 text-rpa-accent" />
				</div>
				<h2 class="text-3xl font-bold text-rpa-navy mb-6">Suport & Mentenanță</h2>
				<p class="text-gray-600 mb-6 leading-relaxed">
					Investiția în automatizare nu se oprește la punerea în funcțiune. Oferim pachete complete de suport și mentenanță pentru a asigura funcționarea optimă a sistemelor pe termen lung.
				</p>
				<ul class="space-y-3">
					{#each supportItems as item}
						<li class="flex items-start gap-3">
							<span class="text-rpa-accent font-bold mt-0.5">✓</span>
							<span class="text-gray-600">{item}</span>
						</li>
					{/each}
				</ul>
			</div>
			<div use:reveal class="space-y-4">
				{#each supportTiers as tier}
					<div class="bg-white rounded-2xl p-6 shadow-sm card-hover">
						<div class="flex items-center gap-3 mb-2">
							<div class="w-10 h-10 bg-rpa-accent/10 rounded-lg flex items-center justify-center">
								<tier.icon class="w-5 h-5 text-rpa-accent" />
							</div>
							<h3 class="font-bold text-rpa-navy">{tier.title}</h3>
						</div>
						<p class="text-sm text-gray-600">{tier.desc}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="py-24 bg-rpa-navy text-white text-center">
	<div class="max-w-3xl mx-auto px-6">
		<h2 use:reveal class="text-3xl font-bold mb-6">Aveți un Proiect în Minte?</h2>
		<p use:reveal class="text-gray-300 mb-8">Contactați-ne pentru o consultanță gratuită și o ofertă personalizată.</p>
		<a use:reveal href="/contact" class="inline-block bg-rpa-accent hover:bg-rpa-accent-dark text-white font-semibold px-8 py-4 rounded-lg btn-hover">
			Solicită o Ofertă
		</a>
	</div>
</section>
