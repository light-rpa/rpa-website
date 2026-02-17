import { a7 as head, c as ensure_array_like, f as escape_html } from './index-EKD4Y-Jo.js';

function _page($$renderer) {
  const industries = [
    {
      icon: "🚗",
      name: "Automotive",
      description: "Industria automotive necesită precizie extremă și repetabilitate perfectă. Implementăm soluții de automatizare pentru liniile de asamblare, sisteme de inspecție vizuală pentru controlul calității și celule robotizate pentru sudare, manipulare și vopsire.",
      applications: [
        "Inspecție Vizuală",
        "Asamblare Robotizată",
        "Sudare",
        "Paletizare",
        "Trasabilitate",
        "Control Calitate"
      ]
    },
    {
      icon: "🍕",
      name: "Food & Beverage",
      description: "Automatizarea în industria alimentară necesită respectarea strictă a normelor de igienă și siguranță. Oferim soluții pentru ambalare, sortare, etichetare și control calitate, folosind materiale și echipamente certificate pentru contact alimentar.",
      applications: [
        "Ambalare",
        "Sortare",
        "Etichetare",
        "Control Calitate",
        "Paletizare",
        "Dozare"
      ]
    },
    {
      icon: "📦",
      name: "Logistică",
      description: "Optimizăm fluxurile logistice prin automatizarea proceselor de sortare, depozitare și expediere. Implementăm sisteme de conveioare inteligente, soluții de picking robotizat și sisteme de management al depozitelor integrate cu senzori SICK.",
      applications: [
        "Sortare Automată",
        "Picking Robotizat",
        "Conveioare Inteligente",
        "Scanare Coduri",
        "Măsurare Dimensională",
        "AGV"
      ]
    },
    {
      icon: "💻",
      name: "Electronică",
      description: "Industria electronică necesită manipulare precisă a componentelor miniaturale și controlul strict al calității. Dezvoltăm soluții de inspecție optică automată (AOI), sisteme pick-and-place și teste funcționale automatizate.",
      applications: [
        "Inspecție AOI",
        "Pick-and-Place",
        "Teste Funcționale",
        "Asamblare PCB",
        "Etichetare",
        "Trasabilitate"
      ]
    }
  ];
  head("64jlya", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Industrii — R.P.A. | Soluții pe Sectoare</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Soluții de automatizare industrială pentru automotive, food &amp; beverage, logistică și electronică. R.P.A. — experiență în diverse sectoare."/>`);
  });
  $$renderer.push(`<section class="py-24 bg-gradient-to-br from-rpa-navy via-rpa-blue-dark to-rpa-navy text-white"><div class="max-w-4xl mx-auto px-6 text-center"><h1 class="text-4xl md:text-5xl font-bold mb-6">Industrii</h1> <p class="text-xl text-gray-300 max-w-2xl mx-auto">Soluții de automatizare adaptate cerințelor specifice fiecărui sector industrial.</p></div></section> <section class="py-24 bg-white"><div class="max-w-6xl mx-auto px-6"><div class="grid md:grid-cols-2 gap-8"><!--[-->`);
  const each_array = ensure_array_like(industries);
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let ind = each_array[$$index_1];
    $$renderer.push(`<div class="bg-rpa-gray rounded-2xl p-8 hover:shadow-lg transition-shadow duration-200"><div class="flex items-center gap-4 mb-6"><div class="text-5xl">${escape_html(ind.icon)}</div> <h2 class="text-2xl font-bold text-rpa-navy">${escape_html(ind.name)}</h2></div> <p class="text-gray-600 mb-6 leading-relaxed">${escape_html(ind.description)}</p> <div><h3 class="text-sm font-semibold text-rpa-navy mb-3 uppercase tracking-wider">Aplicații Tipice</h3> <div class="flex flex-wrap gap-2"><!--[-->`);
    const each_array_1 = ensure_array_like(ind.applications);
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let app = each_array_1[$$index];
      $$renderer.push(`<span class="bg-white text-sm text-rpa-navy px-3 py-1 rounded-full border border-gray-200">${escape_html(app)}</span>`);
    }
    $$renderer.push(`<!--]--></div></div></div>`);
  }
  $$renderer.push(`<!--]--></div></div></section> <section class="py-24 bg-rpa-navy text-white text-center"><div class="max-w-3xl mx-auto px-6"><h2 class="text-3xl font-bold mb-6">Nu Găsești Industria Ta?</h2> <p class="text-gray-300 mb-8">Soluțiile noastre sunt flexibile și adaptabile. Contactați-ne pentru a discuta despre sectorul dumneavoastră.</p> <a href="/contact" class="inline-block bg-rpa-accent hover:bg-rpa-blue-light text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200">Discută cu Noi</a></div></section>`);
}

export { _page as default };
//# sourceMappingURL=_page.svelte-9SKs5O5j.js.map
