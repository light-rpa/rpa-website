<svelte:head>
	<title>Industrii — Energie, ESS, AMR și Conveioare | R.P.A.</title>
	<meta
		name="description"
		content="Energy storage systems Romania, AMR, conveioare industriale și automatizare pentru automotive, food & beverage, logistică și electronică."
	/>
	<meta property="og:title" content="Industrii — Energie & Automatizare R.P.A." />
	<meta
		property="og:description"
		content="Capabilități pentru energie și stocare, logistică, automotive, food & beverage și electronică în România."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://rpa.ro/industrii" />
	<meta property="og:image" content="https://rpa.ro/infinity-logo-v3.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Industrii deservite — R.P.A." />
	<meta
		name="twitter:description"
		content="Integrare ESS, AMR și conveioare pentru energie, logistică, automotive, food & beverage și electronică."
	/>
	<meta name="twitter:image" content="https://rpa.ro/infinity-logo-v3.png" />
</svelte:head>

<!-- Hero -->
<section class="relative py-32 bg-rpa-navy text-white overflow-hidden grain grid-pattern">
	<div class="absolute inset-0 bg-gradient-to-br from-rpa-navy via-rpa-blue-dark/40 to-rpa-navy"></div>
	<div class="absolute top-10 left-20 w-72 h-72 border border-rpa-accent/5 rounded-full"></div>
	<div class="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
		<div class="accent-line mx-auto mb-6 animate-fade-in-up"></div>
		<h1 class="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up delay-100">Industrii</h1>
		<p class="text-xl text-gray-300/90 max-w-2xl mx-auto animate-fade-in-up delay-200">
			Soluții ESS, AMR, conveioare și automatizare adaptate cerințelor energiei, logisticii, automotive, food & beverage și electronicii.
		</p>
	</div>
</section>

<!-- Industries -->
<section class="py-28 bg-white">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<div class="grid md:grid-cols-2 gap-8">
			{#each industries as ind, i}
				<div class="bg-rpa-gray rounded-2xl p-10 border border-gray-100 hover-lift" style="transition-delay: {i * 100}ms" use:reveal>
					<div class="flex items-center gap-5 mb-8">
						<div class="w-16 h-16 rounded-2xl bg-white flex items-center justify-center border border-gray-100 shrink-0">
							{@html ind.icon}
						</div>
						<h2 class="font-heading text-2xl font-bold text-rpa-navy">{ind.name}</h2>
					</div>
					<p class="text-gray-500 mb-8 leading-relaxed">{ind.description}</p>
					<div>
						<h3 class="text-xs font-heading font-semibold text-rpa-navy mb-4 uppercase tracking-[0.15em]">Aplicații Tipice</h3>
						<div class="flex flex-wrap gap-2">
							{#each ind.applications as app}
								<span class="bg-white text-sm text-rpa-navy px-3 py-1.5 rounded-lg border border-gray-200 font-medium">{app}</span>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA -->
<section class="relative py-28 bg-rpa-navy text-white overflow-hidden grain grid-pattern">
	<div class="absolute inset-0 bg-gradient-to-br from-rpa-navy via-rpa-blue-dark/30 to-rpa-navy"></div>
	<div class="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center" use:reveal>
		<h2 class="font-heading text-3xl md:text-4xl font-bold mb-6">Nu Găsești Industria Ta?</h2>
		<p class="text-gray-300/90 mb-10 text-lg">Soluțiile noastre sunt flexibile și adaptabile. Contactați-ne pentru a discuta despre sectorul dumneavoastră.</p>
		<a href="/contact" class="inline-flex items-center gap-2 bg-rpa-accent hover:bg-rpa-accent-light text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200">
			Discută cu Noi
			<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
		</a>
	</div>
</section>

<script lang="ts">
	import { reveal } from '$lib/actions/animate';

	const industries = [
		{
			icon: '<svg class="w-8 h-8 text-rpa-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M12 7V3"/><path d="M9 17v2"/><path d="M15 17v2"/><path d="M7 11h10"/><path d="M7 13h6"/></svg>',
			name: 'Energie & Stocare',
			description: 'Energy storage systems Romania pentru parcuri fotovoltaice, microgrid industrial și backup de înaltă putere, cu integrare EMS/BMS și siguranță la incendiu.',
			applications: ['Energy Storage Systems', 'Microgrid Control', 'PCS & HV Rooms', 'Fire Safety & HVAC', 'Monitorizare SOC', 'Service 24/7']
		},
		{
			icon: '<svg class="w-8 h-8 text-rpa-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>',
			name: 'Automotive',
			description: 'Industria automotive necesită precizie extremă și repetabilitate perfectă. Implementăm soluții de automatizare pentru liniile de asamblare, sisteme de inspecție vizuală pentru controlul calității și celule robotizate pentru sudare, manipulare și vopsire.',
			applications: ['Inspecție Vizuală', 'Asamblare Robotizată', 'Sudare', 'Paletizare', 'Trasabilitate', 'Control Calitate']
		},
		{
			icon: '<svg class="w-8 h-8 text-rpa-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8c0-5-5-5-5-5s-5 0-5 5"/><path d="M2 12h20"/><path d="M20 12v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8"/><path d="M6 12v-2"/><path d="M18 12v-2"/><path d="M12 12v9"/></svg>',
			name: 'Food & Beverage',
			description: 'Automatizarea în industria alimentară necesită respectarea strictă a normelor de igienă și siguranță. Oferim soluții pentru ambalare, sortare, etichetare și control calitate, folosind materiale și echipamente certificate pentru contact alimentar.',
			applications: ['Ambalare', 'Sortare', 'Etichetare', 'Control Calitate', 'Paletizare', 'Dozare']
		},
		{
			icon: '<svg class="w-8 h-8 text-rpa-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>',
			name: 'Logistică',
			description: 'Optimizăm fluxurile logistice prin automatizarea proceselor de sortare, depozitare și expediere. Implementăm sisteme de conveioare inteligente, soluții de picking robotizat și sisteme de management al depozitelor integrate cu senzori SICK.',
			applications: ['Sortare Automată', 'Picking Robotizat', 'Conveioare Inteligente', 'Scanare Coduri', 'Măsurare Dimensională', 'AGV']
		},
		{
			icon: '<svg class="w-8 h-8 text-rpa-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>',
			name: 'Electronică',
			description: 'Industria electronică necesită manipulare precisă a componentelor miniaturale și controlul strict al calității. Dezvoltăm soluții de inspecție optică automată (AOI), sisteme pick-and-place și teste funcționale automatizate.',
			applications: ['Inspecție AOI', 'Pick-and-Place', 'Teste Funcționale', 'Asamblare PCB', 'Etichetare', 'Trasabilitate']
		}
	];
</script>
