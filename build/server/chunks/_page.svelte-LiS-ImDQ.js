import { a5 as head, a6 as ensure_array_like, c as escape_html } from './index-CWidu4kO.js';

function _page($$renderer) {
  const services = [
    {
      icon: "🔬",
      title: "Cercetare & Design",
      description: "Design ingineresc personalizat, planificare, prototipare și testare pentru validarea conceptelor."
    },
    {
      icon: "⚙️",
      title: "Implementare",
      description: "Instalare, configurare, comisionare și integrare completă cu documentație profesională."
    },
    {
      icon: "🛡️",
      title: "Suport & Mentenanță",
      description: "Suport tehnic 24/7, mentenanță predictivă, training și optimizare continuă."
    }
  ];
  const industries = [
    { icon: "🚗", name: "Automotive" },
    { icon: "🍕", name: "Food & Beverage" },
    { icon: "📦", name: "Logistică" },
    { icon: "💻", name: "Electronică" }
  ];
  head("1uha8ag", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>R.P.A. — Robotic Process Automation | Automatizare Industrială România</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Soluții de automatizare industrială, viziune artificială și integrare robotică. R.P.A. oferă servicii complete de la cercetare la implementare și suport."/>`);
  });
  $$renderer.push(`<section class="relative min-h-screen flex items-center justify-center bg-rpa-navy text-white"><div class="absolute inset-0 bg-gradient-to-br from-rpa-navy via-rpa-blue-dark to-rpa-navy opacity-90"></div> <div class="relative z-10 text-center max-w-4xl mx-auto px-6"><div class="mb-8"><div class="text-6xl font-bold tracking-tight">R.P.A.</div> <div class="text-rpa-accent text-lg mt-2 tracking-widest uppercase">Robotic Process Automation</div></div> <h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">Soluții Industriale<br/> <span class="text-rpa-accent">de Ultimă Generație</span></h1> <p class="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Dezvoltarea și integrarea soluțiilor industriale la cererea clientului.
			De la viziune artificială la automatizare completă.</p> <a href="/contact" class="inline-block bg-rpa-accent hover:bg-rpa-blue-light text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 text-lg">Contactează-ne</a></div></section> <section class="py-24 bg-white"><div class="max-w-6xl mx-auto px-6"><h2 class="text-3xl font-bold text-center text-rpa-navy mb-4">Serviciile Noastre</h2> <p class="text-center text-gray-600 mb-16 max-w-2xl mx-auto">Oferim soluții complete, de la faza de cercetare până la suport continuu.</p> <div class="grid md:grid-cols-3 gap-8"><!--[-->`);
  const each_array = ensure_array_like(services);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let service = each_array[$$index];
    $$renderer.push(`<div class="bg-rpa-gray rounded-2xl p-8 hover:shadow-lg transition-shadow duration-200"><div class="text-4xl mb-4">${escape_html(service.icon)}</div> <h3 class="text-xl font-bold text-rpa-navy mb-3">${escape_html(service.title)}</h3> <p class="text-gray-600">${escape_html(service.description)}</p></div>`);
  }
  $$renderer.push(`<!--]--></div></div></section> <section class="py-24 bg-rpa-gray"><div class="max-w-6xl mx-auto px-6"><h2 class="text-3xl font-bold text-center text-rpa-navy mb-4">Industrii</h2> <p class="text-center text-gray-600 mb-16 max-w-2xl mx-auto">Soluții adaptate pentru diverse sectoare industriale.</p> <div class="grid md:grid-cols-4 gap-6"><!--[-->`);
  const each_array_1 = ensure_array_like(industries);
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let industry = each_array_1[$$index_1];
    $$renderer.push(`<div class="bg-white rounded-xl p-6 text-center hover:shadow-md transition-shadow duration-200"><div class="text-3xl mb-3">${escape_html(industry.icon)}</div> <h3 class="font-semibold text-rpa-navy">${escape_html(industry.name)}</h3></div>`);
  }
  $$renderer.push(`<!--]--></div></div></section> <section class="py-24 bg-rpa-navy text-white text-center"><div class="max-w-3xl mx-auto px-6"><h2 class="text-3xl font-bold mb-6">Gata să Începem?</h2> <p class="text-xl text-gray-300 mb-10">Contactați-ne pentru a discuta despre proiectul dumneavoastră.</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"><a href="/contact" class="bg-rpa-accent hover:bg-rpa-blue-light text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200">Completează Formularul</a> <a href="tel:+40751271751" class="border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200">+40 751 271 751</a></div></div></section>`);
}

export { _page as default };
//# sourceMappingURL=_page.svelte-LiS-ImDQ.js.map
