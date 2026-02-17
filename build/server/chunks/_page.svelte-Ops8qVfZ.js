import { a7 as head, c as ensure_array_like, f as escape_html } from './index-EKD4Y-Jo.js';

function _page($$renderer) {
  const capabilities = [
    {
      icon: "🤖",
      title: "Integrare Robotică",
      description: "Proiectăm și implementăm celule robotizate complete, de la roboți colaborativi la sisteme industriale de mare viteză, integrând perfect hardware-ul cu software-ul de comandă."
    },
    {
      icon: "👁️",
      title: "Viziune Artificială",
      description: "Dezvoltăm sisteme de viziune pentru inspecție vizuală, control calitate, ghidare robotică și citire coduri. Folosim camere 2D și 3D de la SICK și alți producători de top."
    },
    {
      icon: "⚙️",
      title: "Automatizare Procese",
      description: "Automatizăm procesele de producție complexe, de la linii de asamblare la sisteme de sortare și paletizare, reducând costurile și crescând productivitatea."
    },
    {
      icon: "📊",
      title: "Sisteme SCADA & MES",
      description: "Implementăm sisteme de monitorizare și control al producției, oferind vizibilitate completă asupra performanței și eficienței operaționale."
    }
  ];
  head("ms8aw2", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Despre Noi — R.P.A. | Automatizare Industrială</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Aflați mai multe despre R.P.A. — compania românească specializată în automatizare industrială, viziune artificială și integrare robotică."/>`);
  });
  $$renderer.push(`<section class="py-24 bg-gradient-to-br from-rpa-navy via-rpa-blue-dark to-rpa-navy text-white"><div class="max-w-4xl mx-auto px-6 text-center"><h1 class="text-4xl md:text-5xl font-bold mb-6">Despre Noi</h1> <p class="text-xl text-gray-300 max-w-2xl mx-auto">Inovație și excelență în automatizarea industrială din România.</p></div></section> <section class="py-24 bg-white"><div class="max-w-6xl mx-auto px-6"><div class="grid md:grid-cols-2 gap-16 items-center"><div><h2 class="text-3xl font-bold text-rpa-navy mb-6">Cine Suntem</h2> <p class="text-gray-600 mb-4 leading-relaxed">R.P.A. (Robotic Process Automation) este o companie românească specializată în dezvoltarea și integrarea soluțiilor de automatizare industrială. Cu o echipă de ingineri experimentați, oferim servicii complete — de la faza de cercetare și design până la implementare și suport tehnic continuu.</p> <p class="text-gray-600 mb-4 leading-relaxed">Ne concentrăm pe viziunea artificială, integrarea robotică și automatizarea proceselor complexe, aducând tehnologie de ultimă generație în fabricile și liniile de producție din România și din Europa.</p> <p class="text-gray-600 leading-relaxed">Fiecare proiect pe care îl dezvoltăm este personalizat la cerințele specifice ale clientului, asigurând o integrare perfectă cu procesele existente și un randament maxim al investiției.</p></div> <div class="bg-rpa-gray rounded-2xl p-12 text-center"><div class="text-6xl font-bold text-rpa-blue mb-4">R.P.A.</div> <div class="text-rpa-accent tracking-widest uppercase text-sm">Robotic Process Automation</div> <div class="mt-8 grid grid-cols-2 gap-6 text-left"><div><div class="text-3xl font-bold text-rpa-navy">100+</div> <div class="text-sm text-gray-600">Proiecte Finalizate</div></div> <div><div class="text-3xl font-bold text-rpa-navy">4+</div> <div class="text-sm text-gray-600">Industrii Deservite</div></div> <div><div class="text-3xl font-bold text-rpa-navy">24/7</div> <div class="text-sm text-gray-600">Suport Tehnic</div></div> <div><div class="text-3xl font-bold text-rpa-navy">RO</div> <div class="text-sm text-gray-600">Capital Românesc</div></div></div></div></div></div></section> <section class="py-24 bg-rpa-gray"><div class="max-w-4xl mx-auto px-6 text-center"><h2 class="text-3xl font-bold text-rpa-navy mb-6">Misiunea Noastră</h2> <p class="text-xl text-gray-600 leading-relaxed mb-12">Să aducem inovația tehnologică în industria românească, oferind soluții de automatizare accesibile, fiabile și performante, care transformă procesele de producție și cresc competitivitatea clienților noștri pe piața globală.</p> <div class="grid md:grid-cols-3 gap-8"><div class="bg-white rounded-2xl p-8"><div class="text-4xl mb-4">🎯</div> <h3 class="font-bold text-rpa-navy mb-2">Precizie</h3> <p class="text-sm text-gray-600">Soluții de înaltă precizie, adaptate nevoilor fiecărui client.</p></div> <div class="bg-white rounded-2xl p-8"><div class="text-4xl mb-4">💡</div> <h3 class="font-bold text-rpa-navy mb-2">Inovație</h3> <p class="text-sm text-gray-600">Tehnologii de ultimă generație, mereu la curent cu tendințele industriei.</p></div> <div class="bg-white rounded-2xl p-8"><div class="text-4xl mb-4">🤝</div> <h3 class="font-bold text-rpa-navy mb-2">Parteneriat</h3> <p class="text-sm text-gray-600">Colaborare strânsă cu clienții pentru rezultate optime pe termen lung.</p></div></div></div></section> <section class="py-24 bg-white"><div class="max-w-6xl mx-auto px-6"><h2 class="text-3xl font-bold text-rpa-navy mb-12 text-center">Ce Facem</h2> <div class="space-y-8"><!--[-->`);
  const each_array = ensure_array_like(capabilities);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let cap = each_array[$$index];
    $$renderer.push(`<div class="flex gap-6 items-start bg-rpa-gray rounded-2xl p-8"><div class="text-4xl shrink-0">${escape_html(cap.icon)}</div> <div><h3 class="text-xl font-bold text-rpa-navy mb-2">${escape_html(cap.title)}</h3> <p class="text-gray-600 leading-relaxed">${escape_html(cap.description)}</p></div></div>`);
  }
  $$renderer.push(`<!--]--></div></div></section> <section class="py-24 bg-rpa-navy text-white"><div class="max-w-4xl mx-auto px-6 text-center"><h2 class="text-3xl font-bold mb-6">Partener SICK</h2> <p class="text-xl text-gray-300 mb-8 leading-relaxed">Suntem partener autorizat SICK — lider mondial în soluții de senzori inteligenți pentru automatizare industrială. Această colaborare ne permite să oferim clienților noștri acces la cele mai avansate tehnologii de senzori, viziune artificială și siguranță industrială.</p> <div class="grid sm:grid-cols-3 gap-6 mt-12"><div class="border border-white/20 rounded-xl p-6"><div class="text-3xl mb-3">📡</div> <h3 class="font-semibold mb-2">Senzori Inteligenți</h3> <p class="text-sm text-gray-400">Gamă completă de senzori SICK pentru orice aplicație industrială.</p></div> <div class="border border-white/20 rounded-xl p-6"><div class="text-3xl mb-3">👁️</div> <h3 class="font-semibold mb-2">Viziune Artificială</h3> <p class="text-sm text-gray-400">Camere și sisteme de viziune pentru inspecție și control calitate.</p></div> <div class="border border-white/20 rounded-xl p-6"><div class="text-3xl mb-3">🛡️</div> <h3 class="font-semibold mb-2">Siguranță Industrială</h3> <p class="text-sm text-gray-400">Soluții certificate de siguranță pentru protecția operatorilor.</p></div></div></div></section> <section class="py-24 bg-rpa-gray text-center"><div class="max-w-3xl mx-auto px-6"><h2 class="text-3xl font-bold text-rpa-navy mb-6">Hai Să Colaborăm</h2> <p class="text-gray-600 mb-8">Contactați-ne pentru a discuta despre următorul dumneavoastră proiect de automatizare.</p> <a href="/contact" class="inline-block bg-rpa-accent hover:bg-rpa-blue-light text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200">Contactează-ne</a></div></section>`);
}

export { _page as default };
//# sourceMappingURL=_page.svelte-Ops8qVfZ.js.map
