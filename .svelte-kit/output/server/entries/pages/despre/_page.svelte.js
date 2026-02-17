import { a4 as head, e as ensure_array_like, a6 as attr_style, g as escape_html, f as stringify } from "../../../chunks/index.js";
import { h as html } from "../../../chunks/html.js";
function _page($$renderer) {
  const values = [
    {
      icon: '<svg class="w-7 h-7 text-rpa-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
      title: "Precizie",
      desc: "Soluții de înaltă precizie, adaptate nevoilor fiecărui client."
    },
    {
      icon: '<svg class="w-7 h-7 text-rpa-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
      title: "Inovație",
      desc: "Tehnologii de ultimă generație, mereu la curent cu tendințele industriei."
    },
    {
      icon: '<svg class="w-7 h-7 text-rpa-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
      title: "Parteneriat",
      desc: "Colaborare strânsă cu clienții pentru rezultate optime pe termen lung."
    }
  ];
  const capabilities = [
    {
      icon: '<svg class="w-7 h-7 text-rpa-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>',
      title: "Integrare Robotică",
      description: "Proiectăm și implementăm celule robotizate complete, de la roboți colaborativi la sisteme industriale de mare viteză, integrând perfect hardware-ul cu software-ul de comandă."
    },
    {
      icon: '<svg class="w-7 h-7 text-rpa-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
      title: "Viziune Artificială",
      description: "Dezvoltăm sisteme de viziune pentru inspecție vizuală, control calitate, ghidare robotică și citire coduri. Folosim camere 2D și 3D de la SICK și alți producători de top."
    },
    {
      icon: '<svg class="w-7 h-7 text-rpa-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>',
      title: "Automatizare Procese",
      description: "Automatizăm procesele de producție complexe, de la linii de asamblare la sisteme de sortare și paletizare, reducând costurile și crescând productivitatea."
    },
    {
      icon: '<svg class="w-7 h-7 text-rpa-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>',
      title: "Sisteme SCADA & MES",
      description: "Implementăm sisteme de monitorizare și control al producției, oferind vizibilitate completă asupra performanței și eficienței operaționale."
    }
  ];
  const sickFeatures = [
    {
      icon: '<svg class="w-6 h-6 text-rpa-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12 7 2"/><path d="m7 12 5-10"/><path d="m12 12 5-10"/><path d="m17 12 5-10"/><path d="M4.5 7h15"/><path d="M12 16v6"/></svg>',
      title: "Senzori Inteligenți",
      desc: "Gamă completă de senzori SICK pentru orice aplicație industrială."
    },
    {
      icon: '<svg class="w-6 h-6 text-rpa-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
      title: "Viziune Artificială",
      desc: "Camere și sisteme de viziune pentru inspecție și control calitate."
    },
    {
      icon: '<svg class="w-6 h-6 text-rpa-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>',
      title: "Siguranță Industrială",
      desc: "Soluții certificate de siguranță pentru protecția operatorilor."
    }
  ];
  head("ms8aw2", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Despre Noi — R.P.A. | Automatizare Industrială</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Aflați mai multe despre R.P.A. — compania românească specializată în automatizare industrială, viziune artificială și integrare robotică."/>`);
  });
  $$renderer.push(`<section class="relative py-32 bg-rpa-navy text-white overflow-hidden grain grid-pattern"><div class="absolute inset-0 bg-gradient-to-br from-rpa-navy via-rpa-blue-dark/40 to-rpa-navy"></div> <div class="absolute bottom-10 right-20 w-80 h-80 border border-rpa-accent/5 rounded-full"></div> <div class="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center"><div class="accent-line mx-auto mb-6 animate-fade-in-up"></div> <h1 class="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up delay-100">Despre Noi</h1> <p class="text-xl text-gray-300/90 max-w-2xl mx-auto animate-fade-in-up delay-200">Inovație și excelență în automatizarea industrială din România.</p></div></section> <section class="py-28 bg-white"><div class="max-w-7xl mx-auto px-6 lg:px-8"><div class="grid md:grid-cols-2 gap-16 items-center"><div class="reveal"><div class="accent-line mb-6"></div> <h2 class="font-heading text-3xl md:text-4xl font-bold text-rpa-navy mb-6">Cine Suntem</h2> <p class="text-gray-500 mb-5 leading-relaxed">R.P.A. (Robotic Process Automation) este o companie românească specializată în dezvoltarea și integrarea soluțiilor de automatizare industrială. Cu o echipă de ingineri experimentați, oferim servicii complete — de la faza de cercetare și design până la implementare și suport tehnic continuu.</p> <p class="text-gray-500 mb-5 leading-relaxed">Ne concentrăm pe viziunea artificială, integrarea robotică și automatizarea proceselor complexe, aducând tehnologie de ultimă generație în fabricile și liniile de producție din România și din Europa.</p> <p class="text-gray-500 leading-relaxed">Fiecare proiect pe care îl dezvoltăm este personalizat la cerințele specifice ale clientului, asigurând o integrare perfectă cu procesele existente și un randament maxim al investiției.</p></div> <div class="reveal"><div class="bg-rpa-gray rounded-2xl p-10 border border-gray-100"><div class="flex items-center gap-3 mb-10"><div class="w-10 h-10 rounded-lg bg-rpa-accent/10 border border-rpa-accent/30 flex items-center justify-center"><svg class="w-5 h-5 text-rpa-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg></div> <div><span class="font-heading text-xl font-bold text-rpa-navy">R.P.A.</span> <span class="block text-[10px] text-rpa-accent tracking-[0.2em] uppercase -mt-0.5">Robotic Process Automation</span></div></div> <div class="grid grid-cols-2 gap-8"><div class="relative pl-5 border-l-2 border-rpa-accent/30"><div class="font-heading text-4xl font-bold text-rpa-navy">100+</div> <div class="text-sm text-gray-500 mt-1">Proiecte Finalizate</div></div> <div class="relative pl-5 border-l-2 border-rpa-accent/30"><div class="font-heading text-4xl font-bold text-rpa-navy">4+</div> <div class="text-sm text-gray-500 mt-1">Industrii Deservite</div></div> <div class="relative pl-5 border-l-2 border-rpa-accent/30"><div class="font-heading text-4xl font-bold text-rpa-navy">24/7</div> <div class="text-sm text-gray-500 mt-1">Suport Tehnic</div></div> <div class="relative pl-5 border-l-2 border-rpa-accent/30"><div class="font-heading text-4xl font-bold text-rpa-navy">RO</div> <div class="text-sm text-gray-500 mt-1">Capital Românesc</div></div></div></div></div></div></div></section> <section class="py-28 bg-rpa-gray"><div class="max-w-5xl mx-auto px-6 lg:px-8"><div class="text-center mb-16 reveal"><div class="accent-line mx-auto mb-6"></div> <h2 class="font-heading text-3xl md:text-4xl font-bold text-rpa-navy mb-6">Misiunea Noastră</h2> <p class="text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto">Să aducem inovația tehnologică în industria românească, oferind soluții de automatizare accesibile, fiabile și performante, care transformă procesele de producție și cresc competitivitatea clienților noștri pe piața globală.</p></div> <div class="grid md:grid-cols-3 gap-8"><!--[-->`);
  const each_array = ensure_array_like(values);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let val = each_array[i];
    $$renderer.push(`<div class="reveal bg-white rounded-2xl p-8 border border-gray-100 hover-lift"${attr_style(`transition-delay: ${stringify(i * 100)}ms`)}><div class="w-14 h-14 rounded-xl bg-rpa-navy/5 flex items-center justify-center mb-6">${html(val.icon)}</div> <h3 class="font-heading font-bold text-rpa-navy mb-3 text-lg">${escape_html(val.title)}</h3> <p class="text-sm text-gray-500 leading-relaxed">${escape_html(val.desc)}</p></div>`);
  }
  $$renderer.push(`<!--]--></div></div></section> <section class="py-28 bg-white"><div class="max-w-7xl mx-auto px-6 lg:px-8"><div class="max-w-2xl mb-16 reveal"><div class="accent-line mb-6"></div> <h2 class="font-heading text-3xl md:text-4xl font-bold text-rpa-navy">Ce Facem</h2></div> <div class="space-y-6"><!--[-->`);
  const each_array_1 = ensure_array_like(capabilities);
  for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
    let cap = each_array_1[i];
    $$renderer.push(`<div class="reveal flex gap-6 items-start bg-rpa-gray rounded-2xl p-8 border border-gray-100 hover-lift"${attr_style(`transition-delay: ${stringify(i * 80)}ms`)}><div class="w-14 h-14 rounded-xl bg-white flex items-center justify-center shrink-0 border border-gray-100">${html(cap.icon)}</div> <div><h3 class="font-heading text-xl font-bold text-rpa-navy mb-2">${escape_html(cap.title)}</h3> <p class="text-gray-500 leading-relaxed">${escape_html(cap.description)}</p></div></div>`);
  }
  $$renderer.push(`<!--]--></div></div></section> <section class="relative py-28 bg-rpa-navy text-white overflow-hidden grain grid-pattern"><div class="absolute inset-0 bg-gradient-to-br from-rpa-navy via-rpa-blue-dark/30 to-rpa-navy"></div> <div class="absolute top-10 left-10 w-64 h-64 border border-rpa-accent/5 rounded-full"></div> <div class="relative z-10 max-w-5xl mx-auto px-6 lg:px-8"><div class="text-center mb-16 reveal"><div class="accent-line mx-auto mb-6"></div> <h2 class="font-heading text-3xl md:text-4xl font-bold mb-6">Partener SICK</h2> <p class="text-lg text-gray-300/90 leading-relaxed max-w-2xl mx-auto">Suntem partener autorizat SICK — lider mondial în soluții de senzori inteligenți pentru automatizare industrială. Această colaborare ne permite să oferim clienților noștri acces la cele mai avansate tehnologii de senzori, viziune artificială și siguranță industrială.</p></div> <div class="grid sm:grid-cols-3 gap-6"><!--[-->`);
  const each_array_2 = ensure_array_like(sickFeatures);
  for (let i = 0, $$length = each_array_2.length; i < $$length; i++) {
    let feat = each_array_2[i];
    $$renderer.push(`<div class="reveal border border-white/10 rounded-2xl p-8 bg-white/[0.02] backdrop-blur-sm hover-lift"${attr_style(`transition-delay: ${stringify(i * 100)}ms`)}><div class="w-12 h-12 rounded-xl bg-rpa-accent/10 flex items-center justify-center mb-5">${html(feat.icon)}</div> <h3 class="font-heading font-semibold mb-3 text-lg">${escape_html(feat.title)}</h3> <p class="text-sm text-gray-400 leading-relaxed">${escape_html(feat.desc)}</p></div>`);
  }
  $$renderer.push(`<!--]--></div></div></section> <section class="py-28 bg-rpa-gray"><div class="max-w-3xl mx-auto px-6 lg:px-8 text-center reveal"><h2 class="font-heading text-3xl md:text-4xl font-bold text-rpa-navy mb-6">Hai Să Colaborăm</h2> <p class="text-gray-500 mb-10 text-lg">Contactați-ne pentru a discuta despre următorul dumneavoastră proiect de automatizare.</p> <a href="/contact" class="inline-flex items-center gap-2 bg-rpa-accent hover:bg-rpa-accent-light text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200">Contactează-ne <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a></div></section>`);
}
export {
  _page as default
};
