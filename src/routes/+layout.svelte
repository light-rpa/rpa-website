<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import InfinityLogo from '$lib/components/InfinityLogo.svelte';
	import CookieConsent from '$lib/components/CookieConsent.svelte';
	import { Mail, Phone, MapPin } from 'lucide-svelte';

	let { children } = $props();
	let mobileOpen = $state(false);
	const siteUrl = 'https://rpa.ro';
	const canonicalUrl = $derived(new URL(page.url.pathname + page.url.search, siteUrl).toString());
	const structuredOrganization = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'R.P.A. — Robotic Process Automation',
		url: siteUrl,
		logo: `${siteUrl}/infinity-logo-v3.png`,
		contactPoint: [
			{
				'@type': 'ContactPoint',
				telephone: '+40 751 271 751',
				contactType: 'customer support',
				areaServed: 'RO',
				availableLanguage: ['ro', 'en']
			}
		],
		sameAs: [siteUrl]
	};
	const structuredLocalBusiness = $derived(() => ({
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		name: 'R.P.A. — Robotic Process Automation',
		url: canonicalUrl,
		image: `${siteUrl}/infinity-logo-v3.png`,
		telephone: '+40 751 271 751',
		address: {
			'@type': 'PostalAddress',
			addressCountry: 'RO',
			addressLocality: 'România'
		}
	}));

	const navLinks = [
		{ href: '/', label: 'Acasă' },
		{ href: '/despre', label: 'Despre Noi' },
		{ href: '/servicii', label: 'Servicii' },
		{ href: '/industrii', label: 'Industrii' },
		{ href: '/contact', label: 'Contact' }
	];

	function isActive(href: string): boolean {
		if (href === '/') return page.url.pathname === '/';
		return page.url.pathname.startsWith(href);
	}
</script>

<svelte:head>
	<link rel="canonical" href={canonicalUrl} />
	<link rel="alternate" hreflang="ro-ro" href={canonicalUrl} />
	<link rel="alternate" hreflang="x-default" href={canonicalUrl} />
	<meta property="og:site_name" content="R.P.A. — Robotic Process Automation" />
	<script type="application/ld+json">{JSON.stringify(structuredOrganization)}</script>
	<script type="application/ld+json">{JSON.stringify(structuredLocalBusiness)}</script>
</svelte:head>

<!-- Navbar -->
<header class="fixed top-0 left-0 right-0 z-50 bg-rpa-navy/95 backdrop-blur-sm border-b border-white/10">
	<nav class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
		<a href="/" class="flex items-center gap-3">
			<InfinityLogo size={36} />
			<div class="flex flex-col">
				<span class="text-xl font-bold text-white tracking-tight leading-none">R.P.A.</span>
				<span class="hidden sm:inline text-[10px] text-rpa-accent tracking-[0.2em] uppercase leading-none mt-0.5">Robotic Process Automation</span>
			</div>
		</a>

		<!-- Desktop nav -->
		<div class="hidden md:flex items-center gap-8">
			{#each navLinks as link}
				<a
					href={link.href}
					class="text-sm transition-colors duration-200 relative {isActive(link.href) ? 'text-white font-semibold' : 'text-gray-400 hover:text-rpa-accent'}"
				>
					{link.label}
					{#if isActive(link.href)}
						<span class="absolute -bottom-1 left-0 right-0 h-0.5 bg-rpa-accent rounded-full"></span>
					{/if}
				</a>
			{/each}
		</div>

		<!-- Mobile hamburger -->
		<button class="md:hidden text-white p-2" onclick={() => mobileOpen = !mobileOpen} aria-label="Meniu">
			{#if mobileOpen}
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
			{:else}
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
			{/if}
		</button>
	</nav>

	<!-- Mobile menu -->
	{#if mobileOpen}
		<div class="md:hidden bg-rpa-navy border-t border-white/10 px-6 py-4 space-y-3">
			{#each navLinks as link}
				<a
					href={link.href}
					class="block transition-colors {isActive(link.href) ? 'text-rpa-accent font-semibold' : 'text-gray-300 hover:text-rpa-accent'}"
					onclick={() => mobileOpen = false}
				>{link.label}</a>
			{/each}
		</div>
	{/if}
</header>

<!-- Main content with top padding for fixed navbar -->
<main class="pt-16">
	{@render children()}
</main>

<!-- Footer -->
<footer class="bg-rpa-navy text-gray-400 border-t border-white/10">
	<div class="max-w-6xl mx-auto px-6 py-16">
		<div class="grid md:grid-cols-4 gap-8">
			<!-- Brand -->
			<div class="md:col-span-2">
				<div class="flex items-center gap-3 mb-4">
					<InfinityLogo size={32} />
					<div>
						<div class="text-xl font-bold text-white leading-none">R.P.A.</div>
						<div class="text-[10px] text-rpa-accent tracking-[0.2em] uppercase mt-0.5">Robotic Process Automation</div>
					</div>
				</div>
				<p class="text-sm leading-relaxed">
					Integrare de sisteme ESS, roboți mobili AMR, conveioare industriale și viziune artificială pentru producția din România. Partener autorizat SICK.
				</p>
			</div>

			<!-- Links -->
			<div>
				<h4 class="text-white font-semibold mb-4">Navigare</h4>
				<div class="space-y-2 text-sm">
					{#each navLinks as link}
						<a href={link.href} class="block hover:text-rpa-accent transition-colors">{link.label}</a>
					{/each}
					<a href="/gdpr" class="block hover:text-rpa-accent transition-colors">Politica GDPR</a>
				</div>
			</div>

			<!-- Contact -->
			<div>
				<h4 class="text-white font-semibold mb-4">Contact</h4>
				<div class="space-y-3 text-sm">
					<a href="mailto:office@rpa.ro" class="flex items-center gap-2 hover:text-rpa-accent transition-colors">
						<Mail class="w-4 h-4 text-rpa-accent" />
						office@rpa.ro
					</a>
					<a href="tel:+40751271751" class="flex items-center gap-2 hover:text-rpa-accent transition-colors">
						<Phone class="w-4 h-4 text-rpa-accent" />
						+40 751 271 751
					</a>
					<p class="flex items-center gap-2">
						<MapPin class="w-4 h-4 text-rpa-accent" />
						România
					</p>
				</div>
			</div>
		</div>
	</div>
	<div class="border-t border-white/10 py-6 text-center text-sm">
		<div class="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-2">
			<p>© {new Date().getFullYear()} R.P.A. Toate drepturile rezervate.</p>
			<a href="/gdpr" class="hover:text-rpa-accent transition-colors">Politica de Confidențialitate</a>
		</div>
	</div>
</footer>

<CookieConsent />
