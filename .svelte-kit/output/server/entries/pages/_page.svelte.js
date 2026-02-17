import { s as sanitize_props, a as spread_props, b as slot, a4 as head, e as ensure_array_like, g as escape_html } from "../../chunks/index.js";
import { I as InfinityLogo } from "../../chunks/InfinityLogo.js";
import { F as Flask_conical, C as Cog, S as Shield_check } from "../../chunks/shield-check.js";
import { I as Icon } from "../../chunks/Icon.js";
function Car($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"
      }
    ],
    ["circle", { "cx": "7", "cy": "17", "r": "2" }],
    ["path", { "d": "M9 17h6" }],
    ["circle", { "cx": "17", "cy": "17", "r": "2" }]
  ];
  Icon($$renderer, spread_props([
    { name: "car" },
    $$sanitized_props,
    {
      /**
       * @component @name Car
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTkgMTdoMmMuNiAwIDEtLjQgMS0xdi0zYzAtLjktLjctMS43LTEuNS0xLjlDMTguNyAxMC42IDE2IDEwIDE2IDEwcy0xLjMtMS40LTIuMi0yLjNjLS41LS40LTEuMS0uNy0xLjgtLjdINWMtLjYgMC0xLjEuNC0xLjQuOWwtMS40IDIuOUEzLjcgMy43IDAgMCAwIDIgMTJ2NGMwIC42LjQgMSAxIDFoMiIgLz4KICA8Y2lyY2xlIGN4PSI3IiBjeT0iMTciIHI9IjIiIC8+CiAgPHBhdGggZD0iTTkgMTdoNiIgLz4KICA8Y2lyY2xlIGN4PSIxNyIgY3k9IjE3IiByPSIyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/car
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Cpu($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M12 20v2" }],
    ["path", { "d": "M12 2v2" }],
    ["path", { "d": "M17 20v2" }],
    ["path", { "d": "M17 2v2" }],
    ["path", { "d": "M2 12h2" }],
    ["path", { "d": "M2 17h2" }],
    ["path", { "d": "M2 7h2" }],
    ["path", { "d": "M20 12h2" }],
    ["path", { "d": "M20 17h2" }],
    ["path", { "d": "M20 7h2" }],
    ["path", { "d": "M7 20v2" }],
    ["path", { "d": "M7 2v2" }],
    [
      "rect",
      { "x": "4", "y": "4", "width": "16", "height": "16", "rx": "2" }
    ],
    [
      "rect",
      { "x": "8", "y": "8", "width": "8", "height": "8", "rx": "1" }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "cpu" },
    $$sanitized_props,
    {
      /**
       * @component @name Cpu
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMjB2MiIgLz4KICA8cGF0aCBkPSJNMTIgMnYyIiAvPgogIDxwYXRoIGQ9Ik0xNyAyMHYyIiAvPgogIDxwYXRoIGQ9Ik0xNyAydjIiIC8+CiAgPHBhdGggZD0iTTIgMTJoMiIgLz4KICA8cGF0aCBkPSJNMiAxN2gyIiAvPgogIDxwYXRoIGQ9Ik0yIDdoMiIgLz4KICA8cGF0aCBkPSJNMjAgMTJoMiIgLz4KICA8cGF0aCBkPSJNMjAgMTdoMiIgLz4KICA8cGF0aCBkPSJNMjAgN2gyIiAvPgogIDxwYXRoIGQ9Ik03IDIwdjIiIC8+CiAgPHBhdGggZD0iTTcgMnYyIiAvPgogIDxyZWN0IHg9IjQiIHk9IjQiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgcng9IjIiIC8+CiAgPHJlY3QgeD0iOCIgeT0iOCIgd2lkdGg9IjgiIGhlaWdodD0iOCIgcng9IjEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/cpu
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Package($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"
      }
    ],
    ["path", { "d": "M12 22V12" }],
    ["polyline", { "points": "3.29 7 12 12 20.71 7" }],
    ["path", { "d": "m7.5 4.27 9 5.15" }]
  ];
  Icon($$renderer, spread_props([
    { name: "package" },
    $$sanitized_props,
    {
      /**
       * @component @name Package
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTEgMjEuNzNhMiAyIDAgMCAwIDIgMGw3LTRBMiAyIDAgMCAwIDIxIDE2VjhhMiAyIDAgMCAwLTEtMS43M2wtNy00YTIgMiAwIDAgMC0yIDBsLTcgNEEyIDIgMCAwIDAgMyA4djhhMiAyIDAgMCAwIDEgMS43M3oiIC8+CiAgPHBhdGggZD0iTTEyIDIyVjEyIiAvPgogIDxwb2x5bGluZSBwb2ludHM9IjMuMjkgNyAxMiAxMiAyMC43MSA3IiAvPgogIDxwYXRoIGQ9Im03LjUgNC4yNyA5IDUuMTUiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/package
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Utensils_crossed($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"
      }
    ],
    [
      "path",
      {
        "d": "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"
      }
    ],
    ["path", { "d": "m2.1 21.8 6.4-6.3" }],
    ["path", { "d": "m19 5-7 7" }]
  ];
  Icon($$renderer, spread_props([
    { name: "utensils-crossed" },
    $$sanitized_props,
    {
      /**
       * @component @name UtensilsCrossed
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTYgMi0yLjMgMi4zYTMgMyAwIDAgMCAwIDQuMmwxLjggMS44YTMgMyAwIDAgMCA0LjIgMEwyMiA4IiAvPgogIDxwYXRoIGQ9Ik0xNSAxNSAzLjMgMy4zYTQuMiA0LjIgMCAwIDAgMCA2bDcuMyA3LjNjLjcuNyAyIC43IDIuOCAwTDE1IDE1Wm0wIDAgNyA3IiAvPgogIDxwYXRoIGQ9Im0yLjEgMjEuOCA2LjQtNi4zIiAvPgogIDxwYXRoIGQ9Im0xOSA1LTcgNyIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/utensils-crossed
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function _page($$renderer) {
  const services = [
    {
      icon: Flask_conical,
      title: "Cercetare & Design",
      description: "Design ingineresc personalizat, planificare, prototipare și testare pentru validarea conceptelor."
    },
    {
      icon: Cog,
      title: "Implementare",
      description: "Instalare, configurare, comisionare și integrare completă cu documentație profesională."
    },
    {
      icon: Shield_check,
      title: "Suport & Mentenanță",
      description: "Suport tehnic 24/7, mentenanță predictivă, training și optimizare continuă."
    }
  ];
  const industries = [
    { icon: Car, name: "Automotive" },
    { icon: Utensils_crossed, name: "Food & Beverage" },
    { icon: Package, name: "Logistică" },
    { icon: Cpu, name: "Electronică" }
  ];
  head("1uha8ag", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>R.P.A. — Robotic Process Automation | Automatizare Industrială România</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Soluții de automatizare industrială, viziune artificială și integrare robotică. R.P.A. oferă servicii complete de la cercetare la implementare și suport."/> <meta property="og:title" content="R.P.A. — Automatizare Industrială România"/> <meta property="og:description" content="Soluții de automatizare industrială, viziune artificială și integrare robotică."/> <meta property="og:type" content="website"/>`);
  });
  $$renderer.push(`<section class="relative min-h-screen flex items-center justify-center bg-rpa-navy text-white"><div class="absolute inset-0 bg-gradient-to-br from-rpa-navy via-rpa-blue-dark to-rpa-navy opacity-90"></div> <div class="relative z-10 text-center max-w-4xl mx-auto px-6"><div class="mb-8 flex flex-col items-center">`);
  InfinityLogo($$renderer, { size: 80 });
  $$renderer.push(`<!----> <div class="text-6xl font-extrabold tracking-tighter mt-4">R.P.A.</div> <div class="text-rpa-accent text-lg mt-2 tracking-[0.25em] uppercase font-medium">Robotic Process Automation</div></div> <h1 class="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Soluții Industriale<br/> <span class="text-rpa-accent">de Ultimă Generație</span></h1> <p class="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Dezvoltarea și integrarea soluțiilor industriale la cererea clientului.
			De la viziune artificială la automatizare completă.</p> <a href="/contact" class="inline-block bg-rpa-accent hover:bg-rpa-accent-dark text-white font-semibold px-8 py-4 rounded-lg btn-hover text-lg">Contactează-ne</a></div></section> <section class="py-24 bg-white"><div class="max-w-6xl mx-auto px-6"><h2 class="text-3xl font-bold text-center text-rpa-navy mb-4">Serviciile Noastre</h2> <p class="text-center text-gray-600 mb-16 max-w-2xl mx-auto">Oferim soluții complete, de la faza de cercetare până la suport continuu.</p> <div class="grid md:grid-cols-3 gap-8"><!--[-->`);
  const each_array = ensure_array_like(services);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let service = each_array[$$index];
    $$renderer.push(`<div class="bg-rpa-gray rounded-2xl p-8 card-hover"><div class="w-12 h-12 bg-rpa-accent/10 rounded-xl flex items-center justify-center mb-4">`);
    service.icon($$renderer, { class: "w-6 h-6 text-rpa-accent" });
    $$renderer.push(`<!----></div> <h3 class="text-xl font-bold text-rpa-navy mb-3">${escape_html(service.title)}</h3> <p class="text-gray-600">${escape_html(service.description)}</p></div>`);
  }
  $$renderer.push(`<!--]--></div></div></section> <section class="py-24 bg-rpa-gray"><div class="max-w-6xl mx-auto px-6"><h2 class="text-3xl font-bold text-center text-rpa-navy mb-4">Industrii</h2> <p class="text-center text-gray-600 mb-16 max-w-2xl mx-auto">Soluții adaptate pentru diverse sectoare industriale.</p> <div class="grid md:grid-cols-4 gap-6"><!--[-->`);
  const each_array_1 = ensure_array_like(industries);
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let industry = each_array_1[$$index_1];
    $$renderer.push(`<div class="bg-white rounded-xl p-6 text-center card-hover"><div class="w-12 h-12 bg-rpa-accent/10 rounded-xl flex items-center justify-center mb-3 mx-auto">`);
    industry.icon($$renderer, { class: "w-6 h-6 text-rpa-accent" });
    $$renderer.push(`<!----></div> <h3 class="font-semibold text-rpa-navy">${escape_html(industry.name)}</h3></div>`);
  }
  $$renderer.push(`<!--]--></div></div></section> <section class="py-24 bg-rpa-navy text-white text-center"><div class="max-w-3xl mx-auto px-6"><h2 class="text-3xl font-bold mb-6">Gata să Începem?</h2> <p class="text-xl text-gray-300 mb-10">Contactați-ne pentru a discuta despre proiectul dumneavoastră.</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"><a href="/contact" class="bg-rpa-accent hover:bg-rpa-accent-dark text-white font-semibold px-8 py-4 rounded-lg btn-hover">Completează Formularul</a> <a href="tel:+40751271751" class="border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200">+40 751 271 751</a></div></div></section>`);
}
export {
  _page as default
};
