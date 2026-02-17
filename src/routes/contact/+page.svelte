<svelte:head>
	<title>Contact — R.P.A. | Automatizare Industrială</title>
	<meta name="description" content="Contactați R.P.A. pentru soluții de automatizare industrială. Telefon: +40 751 271 751, Email: office@rpa.ro" />
</svelte:head>

<!-- Hero -->
<section class="py-24 bg-gradient-to-br from-rpa-navy via-rpa-blue-dark to-rpa-navy text-white">
	<div class="max-w-4xl mx-auto px-6 text-center">
		<h1 class="text-4xl md:text-5xl font-bold mb-6">Contactează-ne</h1>
		<p class="text-xl text-gray-300 max-w-2xl mx-auto">
			Suntem aici să vă ajutăm. Completați formularul sau contactați-ne direct.
		</p>
	</div>
</section>

<!-- Contact Content -->
<section class="py-24 bg-white">
	<div class="max-w-6xl mx-auto px-6">
		<div class="grid lg:grid-cols-3 gap-12">
			<!-- Form -->
			<div class="lg:col-span-2">
				<h2 class="text-2xl font-bold text-rpa-navy mb-8">Trimite-ne un Mesaj</h2>

				{#if submitted}
					<div class="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
						<div class="text-4xl mb-4">✅</div>
						<h3 class="text-xl font-bold text-green-800 mb-2">Mesaj Trimis cu Succes!</h3>
						<p class="text-green-700">Vă vom contacta în cel mai scurt timp posibil.</p>
					</div>
				{:else}
					<form class="space-y-6" onsubmit={handleSubmit}>
						<div class="grid sm:grid-cols-2 gap-6">
							<div>
								<label for="name" class="block text-sm font-semibold text-rpa-navy mb-2">Nume Complet *</label>
								<input type="text" id="name" name="name" required bind:value={formData.name}
									class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rpa-accent focus:ring-2 focus:ring-rpa-accent/20 outline-none transition-colors" />
							</div>
							<div>
								<label for="company" class="block text-sm font-semibold text-rpa-navy mb-2">Companie</label>
								<input type="text" id="company" name="company" bind:value={formData.company}
									class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rpa-accent focus:ring-2 focus:ring-rpa-accent/20 outline-none transition-colors" />
							</div>
						</div>
						<div class="grid sm:grid-cols-2 gap-6">
							<div>
								<label for="email" class="block text-sm font-semibold text-rpa-navy mb-2">Email *</label>
								<input type="email" id="email" name="email" required bind:value={formData.email}
									class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rpa-accent focus:ring-2 focus:ring-rpa-accent/20 outline-none transition-colors" />
							</div>
							<div>
								<label for="phone" class="block text-sm font-semibold text-rpa-navy mb-2">Telefon</label>
								<input type="tel" id="phone" name="phone" bind:value={formData.phone}
									class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rpa-accent focus:ring-2 focus:ring-rpa-accent/20 outline-none transition-colors" />
							</div>
						</div>
						<div>
							<label for="subject" class="block text-sm font-semibold text-rpa-navy mb-2">Subiect *</label>
							<select id="subject" name="subject" required bind:value={formData.subject}
								class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rpa-accent focus:ring-2 focus:ring-rpa-accent/20 outline-none transition-colors bg-white">
								<option value="">Selectează un subiect</option>
								<option value="consultanta">Consultanță Tehnică</option>
								<option value="oferta">Solicitare Ofertă</option>
								<option value="suport">Suport Tehnic</option>
								<option value="parteneriat">Propunere Parteneriat</option>
								<option value="altele">Altele</option>
							</select>
						</div>
						<div>
							<label for="message" class="block text-sm font-semibold text-rpa-navy mb-2">Mesaj *</label>
							<textarea id="message" name="message" rows="5" required bind:value={formData.message}
								class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rpa-accent focus:ring-2 focus:ring-rpa-accent/20 outline-none transition-colors resize-y"></textarea>
						</div>
						<div class="flex items-start gap-3">
							<input type="checkbox" id="gdpr" name="gdpr" required bind:checked={formData.gdpr}
								class="mt-1 w-4 h-4 text-rpa-accent border-gray-300 rounded" />
							<label for="gdpr" class="text-sm text-gray-600">
								Sunt de acord cu <a href="/gdpr" class="text-rpa-accent hover:underline">Politica de Confidențialitate</a> și prelucrarea datelor personale. *
							</label>
						</div>
						<button type="submit"
							class="bg-rpa-accent hover:bg-rpa-blue-light text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 w-full sm:w-auto">
							Trimite Mesajul
						</button>
					</form>
				{/if}
			</div>

			<!-- Sidebar -->
			<div class="space-y-8">
				<div class="bg-rpa-gray rounded-2xl p-8">
					<h3 class="font-bold text-rpa-navy mb-6">Informații de Contact</h3>
					<div class="space-y-4">
						<div class="flex items-start gap-4">
							<span class="text-2xl">📧</span>
							<div>
								<div class="text-sm font-semibold text-rpa-navy">Email</div>
								<a href="mailto:office@rpa.ro" class="text-rpa-accent hover:underline">office@rpa.ro</a>
							</div>
						</div>
						<div class="flex items-start gap-4">
							<span class="text-2xl">📞</span>
							<div>
								<div class="text-sm font-semibold text-rpa-navy">Telefon</div>
								<a href="tel:+40751271751" class="text-rpa-accent hover:underline">+40 751 271 751</a>
							</div>
						</div>
						<div class="flex items-start gap-4">
							<span class="text-2xl">📍</span>
							<div>
								<div class="text-sm font-semibold text-rpa-navy">Locație</div>
								<p class="text-gray-600">România</p>
							</div>
						</div>
						<div class="flex items-start gap-4">
							<span class="text-2xl">🕐</span>
							<div>
								<div class="text-sm font-semibold text-rpa-navy">Program</div>
								<p class="text-gray-600">Luni - Vineri: 08:00 - 17:00</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Map Placeholder -->
				<div class="bg-rpa-gray rounded-2xl p-8">
					<h3 class="font-bold text-rpa-navy mb-4">Locație</h3>
					<div class="bg-gray-200 rounded-xl h-48 flex items-center justify-center text-gray-500">
						<div class="text-center">
							<div class="text-3xl mb-2">🗺️</div>
							<p class="text-sm">Google Maps</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<script lang="ts">
	let submitted = $state(false);
	let formData = $state({
		name: '',
		company: '',
		email: '',
		phone: '',
		subject: '',
		message: '',
		gdpr: false
	});

	function handleSubmit(e: Event) {
		e.preventDefault();
		// TODO: Implement form submission
		submitted = true;
	}
</script>
