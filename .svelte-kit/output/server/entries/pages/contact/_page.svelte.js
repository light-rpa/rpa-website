import { a4 as head, c as attr, g as escape_html } from "../../../chunks/index.js";
function _page($$renderer) {
  let formData = {
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    gdpr: false
  };
  head("1bv7ezn", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Contact — R.P.A. | Automatizare Industrială</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Contactați R.P.A. pentru soluții de automatizare industrială. Telefon: +40 751 271 751, Email: office@rpa.ro"/>`);
  });
  $$renderer.push(`<section class="relative py-32 bg-rpa-navy text-white overflow-hidden grain grid-pattern"><div class="absolute inset-0 bg-gradient-to-br from-rpa-navy via-rpa-blue-dark/40 to-rpa-navy"></div> <div class="absolute bottom-10 left-20 w-64 h-64 border border-rpa-accent/5 rounded-full"></div> <div class="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center"><div class="accent-line mx-auto mb-6 animate-fade-in-up"></div> <h1 class="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up delay-100">Contactează-ne</h1> <p class="text-xl text-gray-300/90 max-w-2xl mx-auto animate-fade-in-up delay-200">Suntem aici să vă ajutăm. Completați formularul sau contactați-ne direct.</p></div></section> <section class="py-28 bg-white"><div class="max-w-7xl mx-auto px-6 lg:px-8"><div class="grid lg:grid-cols-3 gap-12"><div class="lg:col-span-2 reveal"><div class="accent-line mb-6"></div> <h2 class="font-heading text-2xl font-bold text-rpa-navy mb-8">Trimite-ne un Mesaj</h2> `);
  {
    $$renderer.push("<!--[!-->");
    $$renderer.push(`<form class="space-y-6"><div class="grid sm:grid-cols-2 gap-6"><div><label for="name" class="block text-sm font-semibold text-rpa-navy mb-2">Nume Complet *</label> <input type="text" id="name" name="name" required=""${attr("value", formData.name)} class="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-rpa-accent focus:ring-2 focus:ring-rpa-accent/20 outline-none transition-all bg-rpa-gray/50"/></div> <div><label for="company" class="block text-sm font-semibold text-rpa-navy mb-2">Companie</label> <input type="text" id="company" name="company"${attr("value", formData.company)} class="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-rpa-accent focus:ring-2 focus:ring-rpa-accent/20 outline-none transition-all bg-rpa-gray/50"/></div></div> <div class="grid sm:grid-cols-2 gap-6"><div><label for="email" class="block text-sm font-semibold text-rpa-navy mb-2">Email *</label> <input type="email" id="email" name="email" required=""${attr("value", formData.email)} class="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-rpa-accent focus:ring-2 focus:ring-rpa-accent/20 outline-none transition-all bg-rpa-gray/50"/></div> <div><label for="phone" class="block text-sm font-semibold text-rpa-navy mb-2">Telefon</label> <input type="tel" id="phone" name="phone"${attr("value", formData.phone)} class="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-rpa-accent focus:ring-2 focus:ring-rpa-accent/20 outline-none transition-all bg-rpa-gray/50"/></div></div> <div><label for="subject" class="block text-sm font-semibold text-rpa-navy mb-2">Subiect *</label> `);
    $$renderer.select(
      {
        id: "subject",
        name: "subject",
        required: true,
        value: formData.subject,
        class: "w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-rpa-accent focus:ring-2 focus:ring-rpa-accent/20 outline-none transition-all bg-rpa-gray/50"
      },
      ($$renderer2) => {
        $$renderer2.option({ value: "" }, ($$renderer3) => {
          $$renderer3.push(`Selectează un subiect`);
        });
        $$renderer2.option({ value: "consultanta" }, ($$renderer3) => {
          $$renderer3.push(`Consultanță Tehnică`);
        });
        $$renderer2.option({ value: "oferta" }, ($$renderer3) => {
          $$renderer3.push(`Solicitare Ofertă`);
        });
        $$renderer2.option({ value: "suport" }, ($$renderer3) => {
          $$renderer3.push(`Suport Tehnic`);
        });
        $$renderer2.option({ value: "parteneriat" }, ($$renderer3) => {
          $$renderer3.push(`Propunere Parteneriat`);
        });
        $$renderer2.option({ value: "altele" }, ($$renderer3) => {
          $$renderer3.push(`Altele`);
        });
      }
    );
    $$renderer.push(`</div> <div><label for="message" class="block text-sm font-semibold text-rpa-navy mb-2">Mesaj *</label> <textarea id="message" name="message" rows="5" required="" class="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-rpa-accent focus:ring-2 focus:ring-rpa-accent/20 outline-none transition-all resize-y bg-rpa-gray/50">`);
    const $$body = escape_html(formData.message);
    if ($$body) {
      $$renderer.push(`${$$body}`);
    }
    $$renderer.push(`</textarea></div> <div class="flex items-start gap-3"><input type="checkbox" id="gdpr" name="gdpr" required=""${attr("checked", formData.gdpr, true)} class="mt-1 w-4 h-4 text-rpa-accent border-gray-300 rounded"/> <label for="gdpr" class="text-sm text-gray-500">Sunt de acord cu <a href="/gdpr" class="text-rpa-accent hover:underline">Politica de Confidențialitate</a> și prelucrarea datelor personale. *</label></div> <button type="submit" class="inline-flex items-center gap-2 bg-rpa-accent hover:bg-rpa-accent-light text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 w-full sm:w-auto">Trimite Mesajul <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="m22 2-11 11"></path></svg></button></form>`);
  }
  $$renderer.push(`<!--]--></div> <div class="space-y-6 reveal"><div class="bg-rpa-gray rounded-2xl p-8 border border-gray-100"><h3 class="font-heading font-bold text-rpa-navy mb-6">Informații de Contact</h3> <div class="space-y-5"><div class="flex items-start gap-4"><div class="w-10 h-10 rounded-lg bg-white flex items-center justify-center border border-gray-100 shrink-0"><svg class="w-5 h-5 text-rpa-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></div> <div><div class="text-xs font-semibold text-rpa-navy uppercase tracking-wide mb-1">Email</div> <a href="mailto:office@rpa.ro" class="text-rpa-accent hover:underline text-sm">office@rpa.ro</a></div></div> <div class="flex items-start gap-4"><div class="w-10 h-10 rounded-lg bg-white flex items-center justify-center border border-gray-100 shrink-0"><svg class="w-5 h-5 text-rpa-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div> <div><div class="text-xs font-semibold text-rpa-navy uppercase tracking-wide mb-1">Telefon</div> <a href="tel:+40751271751" class="text-rpa-accent hover:underline text-sm">+40 751 271 751</a></div></div> <div class="flex items-start gap-4"><div class="w-10 h-10 rounded-lg bg-white flex items-center justify-center border border-gray-100 shrink-0"><svg class="w-5 h-5 text-rpa-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg></div> <div><div class="text-xs font-semibold text-rpa-navy uppercase tracking-wide mb-1">Locație</div> <p class="text-gray-500 text-sm">România</p></div></div> <div class="flex items-start gap-4"><div class="w-10 h-10 rounded-lg bg-white flex items-center justify-center border border-gray-100 shrink-0"><svg class="w-5 h-5 text-rpa-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div> <div><div class="text-xs font-semibold text-rpa-navy uppercase tracking-wide mb-1">Program</div> <p class="text-gray-500 text-sm">Luni - Vineri: 08:00 - 17:00</p></div></div></div></div> <div class="bg-rpa-gray rounded-2xl p-8 border border-gray-100"><h3 class="font-heading font-bold text-rpa-navy mb-4">Locație</h3> <div class="bg-white rounded-xl h-48 flex items-center justify-center border border-gray-100"><div class="text-center"><div class="w-12 h-12 rounded-full bg-rpa-accent/10 flex items-center justify-center mx-auto mb-3"><svg class="w-6 h-6 text-rpa-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg></div> <p class="text-sm text-gray-400">Google Maps</p></div></div></div></div></div></div></section>`);
}
export {
  _page as default
};
