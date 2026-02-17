import { s as sanitize_props, a as spread_props, b as slot, e as ensure_array_like, c as attr, d as attr_class, f as stringify, g as escape_html } from "../../chunks/index.js";
import { p as page } from "../../chunks/index2.js";
import { I as InfinityLogo } from "../../chunks/InfinityLogo.js";
import "clsx";
import { I as Icon } from "../../chunks/Icon.js";
function Mail($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" }],
    [
      "rect",
      { "x": "2", "y": "4", "width": "20", "height": "16", "rx": "2" }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "mail" },
    $$sanitized_props,
    {
      /**
       * @component @name Mail
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMjIgNy04Ljk5MSA1LjcyN2EyIDIgMCAwIDEtMi4wMDkgMEwyIDciIC8+CiAgPHJlY3QgeD0iMiIgeT0iNCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjE2IiByeD0iMiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/mail
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
function Map_pin($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
      }
    ],
    ["circle", { "cx": "12", "cy": "10", "r": "3" }]
  ];
  Icon($$renderer, spread_props([
    { name: "map-pin" },
    $$sanitized_props,
    {
      /**
       * @component @name MapPin
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAgMTBjMCA0Ljk5My01LjUzOSAxMC4xOTMtNy4zOTkgMTEuNzk5YTEgMSAwIDAgMS0xLjIwMiAwQzkuNTM5IDIwLjE5MyA0IDE0Ljk5MyA0IDEwYTggOCAwIDAgMSAxNiAwIiAvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTAiIHI9IjMiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/map-pin
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
function Phone($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "phone" },
    $$sanitized_props,
    {
      /**
       * @component @name Phone
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTMuODMyIDE2LjU2OGExIDEgMCAwIDAgMS4yMTMtLjMwM2wuMzU1LS40NjVBMiAyIDAgMCAxIDE3IDE1aDNhMiAyIDAgMCAxIDIgMnYzYTIgMiAwIDAgMS0yIDJBMTggMTggMCAwIDEgMiA0YTIgMiAwIDAgMSAyLTJoM2EyIDIgMCAwIDEgMiAydjNhMiAyIDAgMCAxLS44IDEuNmwtLjQ2OC4zNTFhMSAxIDAgMCAwLS4yOTIgMS4yMzMgMTQgMTQgMCAwIDAgNi4zOTIgNi4zODQiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/phone
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
function CookieConsent($$renderer) {
  {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]-->`);
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children } = $$props;
    const navLinks = [
      { href: "/", label: "Acasă" },
      { href: "/despre", label: "Despre Noi" },
      { href: "/servicii", label: "Servicii" },
      { href: "/industrii", label: "Industrii" },
      { href: "/contact", label: "Contact" }
    ];
    function isActive(href) {
      if (href === "/") return page.url.pathname === "/";
      return page.url.pathname.startsWith(href);
    }
    $$renderer2.push(`<header class="fixed top-0 left-0 right-0 z-50 bg-rpa-navy/95 backdrop-blur-sm border-b border-white/10"><nav class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"><a href="/" class="flex items-center gap-3">`);
    InfinityLogo($$renderer2, { size: 36 });
    $$renderer2.push(`<!----> <div class="flex flex-col"><span class="text-xl font-bold text-white tracking-tight leading-none">R.P.A.</span> <span class="hidden sm:inline text-[10px] text-rpa-accent tracking-[0.2em] uppercase leading-none mt-0.5">Robotic Process Automation</span></div></a> <div class="hidden md:flex items-center gap-8"><!--[-->`);
    const each_array = ensure_array_like(navLinks);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let link = each_array[$$index];
      $$renderer2.push(`<a${attr("href", link.href)}${attr_class(`text-sm transition-colors duration-200 relative ${stringify(isActive(link.href) ? "text-white font-semibold" : "text-gray-400 hover:text-rpa-accent")}`)}>${escape_html(link.label)} `);
      if (isActive(link.href)) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<span class="absolute -bottom-1 left-0 right-0 h-0.5 bg-rpa-accent rounded-full"></span>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></a>`);
    }
    $$renderer2.push(`<!--]--></div> <button class="md:hidden text-white p-2" aria-label="Meniu">`);
    {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>`);
    }
    $$renderer2.push(`<!--]--></button></nav> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></header> <main class="pt-16">`);
    children($$renderer2);
    $$renderer2.push(`<!----></main> <footer class="bg-rpa-navy text-gray-400 border-t border-white/10"><div class="max-w-6xl mx-auto px-6 py-16"><div class="grid md:grid-cols-4 gap-8"><div class="md:col-span-2"><div class="flex items-center gap-3 mb-4">`);
    InfinityLogo($$renderer2, { size: 32 });
    $$renderer2.push(`<!----> <div><div class="text-xl font-bold text-white leading-none">R.P.A.</div> <div class="text-[10px] text-rpa-accent tracking-[0.2em] uppercase mt-0.5">Robotic Process Automation</div></div></div> <p class="text-sm leading-relaxed">Soluții de automatizare industrială, viziune artificială și integrare robotică.
					Partener autorizat SICK.</p></div> <div><h4 class="text-white font-semibold mb-4">Navigare</h4> <div class="space-y-2 text-sm"><!--[-->`);
    const each_array_2 = ensure_array_like(navLinks);
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let link = each_array_2[$$index_2];
      $$renderer2.push(`<a${attr("href", link.href)} class="block hover:text-rpa-accent transition-colors">${escape_html(link.label)}</a>`);
    }
    $$renderer2.push(`<!--]--> <a href="/gdpr" class="block hover:text-rpa-accent transition-colors">Politica GDPR</a></div></div> <div><h4 class="text-white font-semibold mb-4">Contact</h4> <div class="space-y-3 text-sm"><a href="mailto:office@rpa.ro" class="flex items-center gap-2 hover:text-rpa-accent transition-colors">`);
    Mail($$renderer2, { class: "w-4 h-4 text-rpa-accent" });
    $$renderer2.push(`<!----> office@rpa.ro</a> <a href="tel:+40751271751" class="flex items-center gap-2 hover:text-rpa-accent transition-colors">`);
    Phone($$renderer2, { class: "w-4 h-4 text-rpa-accent" });
    $$renderer2.push(`<!----> +40 751 271 751</a> <p class="flex items-center gap-2">`);
    Map_pin($$renderer2, { class: "w-4 h-4 text-rpa-accent" });
    $$renderer2.push(`<!----> România</p></div></div></div></div> <div class="border-t border-white/10 py-6 text-center text-sm"><div class="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-2"><p>© ${escape_html((/* @__PURE__ */ new Date()).getFullYear())} R.P.A. Toate drepturile rezervate.</p> <a href="/gdpr" class="hover:text-rpa-accent transition-colors">Politica de Confidențialitate</a></div></div></footer> `);
    CookieConsent($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
export {
  _layout as default
};
