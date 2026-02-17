import { a7 as head, c as ensure_array_like, f as escape_html } from './index-EKD4Y-Jo.js';

function _page($$renderer) {
  const researchItems = [
    "Analiză detaliată a proceselor existente",
    "Studii de fezabilitate și ROI",
    "Design ingineresc 3D și simulare",
    "Prototipare rapidă și testare PoC",
    "Documentație tehnică completă",
    "Selectarea optimă a componentelor"
  ];
  const researchSteps = [
    {
      title: "Consultanță Inițială",
      desc: "Înțelegem nevoile și obiectivele dumneavoastră."
    },
    {
      title: "Analiză Tehnică",
      desc: "Evaluăm procesele și identificăm soluțiile optime."
    },
    {
      title: "Design & Simulare",
      desc: "Creăm designul detaliat și simulăm funcționarea."
    },
    {
      title: "Validare & Aprobare",
      desc: "Prezentăm soluția finală pentru aprobare."
    }
  ];
  const implItems = [
    "Achiziție și management componente",
    "Asamblare și integrare mecanică",
    "Programare PLC, HMI și roboți",
    "Instalare și configurare la fața locului",
    "Teste de acceptanță (FAT/SAT)",
    "Training operatori și documentație"
  ];
  const implFeatures = [
    { icon: "🔧", title: "Instalare" },
    { icon: "💻", title: "Programare" },
    { icon: "🔌", title: "Integrare" },
    { icon: "📋", title: "Teste FAT/SAT" },
    { icon: "📖", title: "Documentație" },
    { icon: "🎓", title: "Training" }
  ];
  const supportItems = [
    "Suport tehnic telefonic și remote 24/7",
    "Mentenanță preventivă programată",
    "Intervenții rapide la fața locului",
    "Actualizări software și optimizare",
    "Piese de schimb și consumabile",
    "Rapoarte periodice de performanță"
  ];
  const supportTiers = [
    {
      icon: "📞",
      title: "Suport Remote",
      desc: "Asistență telefonică și acces remote pentru diagnosticare rapidă și rezolvare probleme."
    },
    {
      icon: "🔧",
      title: "Mentenanță Preventivă",
      desc: "Inspecții programate, calibrare și înlocuire componente uzate pentru funcționare optimă."
    },
    {
      icon: "🚀",
      title: "Optimizare Continuă",
      desc: "Analiză performanță, actualizări software și îmbunătățiri pentru productivitate maximă."
    }
  ];
  head("1bcn4cv", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Servicii — R.P.A. | Cercetare, Implementare, Suport</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Servicii complete de automatizare industrială: cercetare și design, implementare profesională, suport tehnic și mentenanță."/>`);
  });
  $$renderer.push(`<section class="py-24 bg-gradient-to-br from-rpa-navy via-rpa-blue-dark to-rpa-navy text-white"><div class="max-w-4xl mx-auto px-6 text-center"><h1 class="text-4xl md:text-5xl font-bold mb-6">Serviciile Noastre</h1> <p class="text-xl text-gray-300 max-w-2xl mx-auto">De la concept la realitate — și dincolo de ea. Oferim servicii complete pe întreg ciclul de viață al proiectului.</p></div></section> <section class="py-16 bg-white"><div class="max-w-4xl mx-auto px-6"><div class="flex flex-col md:flex-row items-center justify-center gap-4 text-center"><div class="bg-rpa-gray rounded-xl px-6 py-4"><div class="text-2xl mb-1">🔬</div> <div class="font-bold text-rpa-navy text-sm">Cercetare &amp; Design</div></div> <div class="text-rpa-accent text-2xl hidden md:block">→</div> <div class="text-rpa-accent text-2xl md:hidden">↓</div> <div class="bg-rpa-gray rounded-xl px-6 py-4"><div class="text-2xl mb-1">⚙️</div> <div class="font-bold text-rpa-navy text-sm">Implementare</div></div> <div class="text-rpa-accent text-2xl hidden md:block">→</div> <div class="text-rpa-accent text-2xl md:hidden">↓</div> <div class="bg-rpa-gray rounded-xl px-6 py-4"><div class="text-2xl mb-1">🛡️</div> <div class="font-bold text-rpa-navy text-sm">Suport &amp; Mentenanță</div></div></div></div></section> <section class="py-24 bg-rpa-gray"><div class="max-w-6xl mx-auto px-6"><div class="grid md:grid-cols-2 gap-16 items-center"><div><div class="text-5xl mb-6">🔬</div> <h2 class="text-3xl font-bold text-rpa-navy mb-6">Cercetare &amp; Design</h2> <p class="text-gray-600 mb-6 leading-relaxed">Fiecare proiect de succes începe cu o analiză temeinică și un design bine gândit. Echipa noastră de ingineri lucrează îndeaproape cu dumneavoastră pentru a înțelege procesele, a identifica oportunitățile de automatizare și a dezvolta soluția optimă.</p> <ul class="space-y-3"><!--[-->`);
  const each_array = ensure_array_like(researchItems);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$renderer.push(`<li class="flex items-start gap-3"><span class="text-rpa-accent font-bold mt-0.5">✓</span> <span class="text-gray-600">${escape_html(item)}</span></li>`);
  }
  $$renderer.push(`<!--]--></ul></div> <div class="bg-white rounded-2xl p-8 shadow-sm"><h3 class="font-bold text-rpa-navy mb-4">Etapele Procesului</h3> <div class="space-y-4"><!--[-->`);
  const each_array_1 = ensure_array_like(researchSteps);
  for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
    let step = each_array_1[i];
    $$renderer.push(`<div class="flex gap-4 items-start"><div class="w-8 h-8 rounded-full bg-rpa-accent text-white flex items-center justify-center text-sm font-bold shrink-0">${escape_html(i + 1)}</div> <div><div class="font-semibold text-rpa-navy">${escape_html(step.title)}</div> <div class="text-sm text-gray-600">${escape_html(step.desc)}</div></div></div>`);
  }
  $$renderer.push(`<!--]--></div></div></div></div></section> <section class="py-24 bg-white"><div class="max-w-6xl mx-auto px-6"><div class="grid md:grid-cols-2 gap-16 items-center"><div class="order-2 md:order-1 bg-rpa-gray rounded-2xl p-8"><h3 class="font-bold text-rpa-navy mb-4">Ce Include</h3> <div class="grid grid-cols-2 gap-4"><!--[-->`);
  const each_array_2 = ensure_array_like(implFeatures);
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let feat = each_array_2[$$index_2];
    $$renderer.push(`<div class="bg-white rounded-xl p-4"><div class="text-2xl mb-2">${escape_html(feat.icon)}</div> <div class="text-sm font-semibold text-rpa-navy">${escape_html(feat.title)}</div></div>`);
  }
  $$renderer.push(`<!--]--></div></div> <div class="order-1 md:order-2"><div class="text-5xl mb-6">⚙️</div> <h2 class="text-3xl font-bold text-rpa-navy mb-6">Implementare</h2> <p class="text-gray-600 mb-6 leading-relaxed">Transformăm designul în realitate cu precizie și profesionalism. Echipa noastră gestionează întregul proces de implementare, de la achiziția componentelor la instalare, configurare și punerea în funcțiune.</p> <ul class="space-y-3"><!--[-->`);
  const each_array_3 = ensure_array_like(implItems);
  for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
    let item = each_array_3[$$index_3];
    $$renderer.push(`<li class="flex items-start gap-3"><span class="text-rpa-accent font-bold mt-0.5">✓</span> <span class="text-gray-600">${escape_html(item)}</span></li>`);
  }
  $$renderer.push(`<!--]--></ul></div></div></div></section> <section class="py-24 bg-rpa-gray"><div class="max-w-6xl mx-auto px-6"><div class="grid md:grid-cols-2 gap-16 items-center"><div><div class="text-5xl mb-6">🛡️</div> <h2 class="text-3xl font-bold text-rpa-navy mb-6">Suport &amp; Mentenanță</h2> <p class="text-gray-600 mb-6 leading-relaxed">Investiția în automatizare nu se oprește la punerea în funcțiune. Oferim pachete complete de suport și mentenanță pentru a asigura funcționarea optimă a sistemelor pe termen lung.</p> <ul class="space-y-3"><!--[-->`);
  const each_array_4 = ensure_array_like(supportItems);
  for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
    let item = each_array_4[$$index_4];
    $$renderer.push(`<li class="flex items-start gap-3"><span class="text-rpa-accent font-bold mt-0.5">✓</span> <span class="text-gray-600">${escape_html(item)}</span></li>`);
  }
  $$renderer.push(`<!--]--></ul></div> <div class="space-y-4"><!--[-->`);
  const each_array_5 = ensure_array_like(supportTiers);
  for (let $$index_5 = 0, $$length = each_array_5.length; $$index_5 < $$length; $$index_5++) {
    let tier = each_array_5[$$index_5];
    $$renderer.push(`<div class="bg-white rounded-2xl p-6 shadow-sm"><div class="flex items-center gap-3 mb-2"><div class="text-2xl">${escape_html(tier.icon)}</div> <h3 class="font-bold text-rpa-navy">${escape_html(tier.title)}</h3></div> <p class="text-sm text-gray-600">${escape_html(tier.desc)}</p></div>`);
  }
  $$renderer.push(`<!--]--></div></div></div></section> <section class="py-24 bg-rpa-navy text-white text-center"><div class="max-w-3xl mx-auto px-6"><h2 class="text-3xl font-bold mb-6">Aveți un Proiect în Minte?</h2> <p class="text-gray-300 mb-8">Contactați-ne pentru o consultanță gratuită și o ofertă personalizată.</p> <a href="/contact" class="inline-block bg-rpa-accent hover:bg-rpa-blue-light text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200">Solicită o Ofertă</a></div></section>`);
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DhsxoC1s.js.map
