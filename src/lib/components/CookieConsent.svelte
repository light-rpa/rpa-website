<script lang="ts">
	import { browser } from '$app/environment';
	import { Cookie } from 'lucide-svelte';

	let visible = $state(false);

	if (browser) {
		visible = !localStorage.getItem('cookie-consent');
	}

	function accept() {
		localStorage.setItem('cookie-consent', 'accepted');
		visible = false;
	}

	function dismiss() {
		localStorage.setItem('cookie-consent', 'dismissed');
		visible = false;
	}
</script>

{#if visible}
	<div class="fixed bottom-0 left-0 right-0 z-50 bg-rpa-navy/95 backdrop-blur-sm border-t border-white/10 p-4 md:p-6">
		<div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-4">
			<Cookie class="w-6 h-6 text-rpa-accent shrink-0 hidden sm:block" />
			<p class="text-sm text-gray-300 flex-1">
				Acest site folosește cookie-uri tehnice esențiale pentru funcționarea corectă. Nu utilizăm cookie-uri de marketing.
				<a href="/gdpr" class="text-rpa-accent hover:underline">Politica de Confidențialitate</a>
			</p>
			<div class="flex gap-3 shrink-0">
				<button onclick={dismiss} class="text-sm text-gray-400 hover:text-white transition-colors px-4 py-2">
					Închide
				</button>
				<button onclick={accept} class="text-sm bg-rpa-accent hover:bg-rpa-accent-dark text-white font-semibold px-6 py-2 rounded-lg btn-hover transition-colors">
					Accept
				</button>
			</div>
		</div>
	</div>
{/if}
