<script lang="ts">
	import '../app.css';
	let { children } = $props();
	let mobileOpen = $state(false);

	const navLinks = [
		{ href: '/', label: 'Acasă' },
		{ href: '/despre', label: 'Despre Noi' },
		{ href: '/servicii', label: 'Servicii' },
		{ href: '/industrii', label: 'Industrii' },
		{ href: '/contact', label: 'Contact' }
	];
</script>

<!-- Navbar -->
<header class="fixed top-0 left-0 right-0 z-50 bg-rpa-navy/95 backdrop-blur-sm border-b border-white/10">
	<nav class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
		<a href="/" class="flex items-center gap-2">
			<span class="text-2xl font-bold text-white tracking-tight">R.P.A.</span>
			<span class="hidden sm:inline text-xs text-rpa-accent tracking-widest uppercase">Robotic Process Automation</span>
		</a>

		<!-- Desktop nav -->
		<div class="hidden md:flex items-center gap-8">
			{#each navLinks as link}
				<a href={link.href} class="text-sm text-gray-300 hover:text-rpa-accent transition-colors duration-200">{link.label}</a>
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
				<a href={link.href} class="block text-gray-300 hover:text-rpa-accent transition-colors" onclick={() => mobileOpen = false}>{link.label}</a>
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
				<div class="text-2xl font-bold text-white mb-2">R.P.A.</div>
				<p class="text-sm text-rpa-accent mb-4 tracking-widest uppercase">Robotic Process Automation</p>
				<p class="text-sm leading-relaxed">
					Soluții de automatizare industrială, viziune artificială și integrare robotică.
					Partener autorizat SICK.
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
				<div class="space-y-2 text-sm">
					<a href="mailto:office@rpa.ro" class="block hover:text-rpa-accent transition-colors">office@rpa.ro</a>
					<a href="tel:+40751271751" class="block hover:text-rpa-accent transition-colors">+40 751 271 751</a>
					<p>România</p>
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
