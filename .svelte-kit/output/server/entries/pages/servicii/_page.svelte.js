import { s as sanitize_props, a as spread_props, b as slot, a4 as head, e as ensure_array_like, g as escape_html } from "../../../chunks/index.js";
import { F as Flask_conical, C as Cog, S as Shield_check } from "../../../chunks/shield-check.js";
import { I as Icon } from "../../../chunks/Icon.js";
function Book_open($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M12 7v14" }],
    [
      "path",
      {
        "d": "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "book-open" },
    $$sanitized_props,
    {
      /**
       * @component @name BookOpen
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgN3YxNCIgLz4KICA8cGF0aCBkPSJNMyAxOGExIDEgMCAwIDEtMS0xVjRhMSAxIDAgMCAxIDEtMWg1YTQgNCAwIDAgMSA0IDQgNCA0IDAgMCAxIDQtNGg1YTEgMSAwIDAgMSAxIDF2MTNhMSAxIDAgMCAxLTEgMWgtNmEzIDMgMCAwIDAtMyAzIDMgMyAwIDAgMC0zLTN6IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/book-open
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
function Clipboard_check($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "rect",
      {
        "width": "8",
        "height": "4",
        "x": "8",
        "y": "2",
        "rx": "1",
        "ry": "1"
      }
    ],
    [
      "path",
      {
        "d": "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
      }
    ],
    ["path", { "d": "m9 14 2 2 4-4" }]
  ];
  Icon($$renderer, spread_props([
    { name: "clipboard-check" },
    $$sanitized_props,
    {
      /**
       * @component @name ClipboardCheck
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI0IiB4PSI4IiB5PSIyIiByeD0iMSIgcnk9IjEiIC8+CiAgPHBhdGggZD0iTTE2IDRoMmEyIDIgMCAwIDEgMiAydjE0YTIgMiAwIDAgMS0yIDJINmEyIDIgMCAwIDEtMi0yVjZhMiAyIDAgMCAxIDItMmgyIiAvPgogIDxwYXRoIGQ9Im05IDE0IDIgMiA0LTQiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/clipboard-check
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
function Graduation_cap($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"
      }
    ],
    ["path", { "d": "M22 10v6" }],
    ["path", { "d": "M6 12.5V16a6 3 0 0 0 12 0v-3.5" }]
  ];
  Icon($$renderer, spread_props([
    { name: "graduation-cap" },
    $$sanitized_props,
    {
      /**
       * @component @name GraduationCap
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjEuNDIgMTAuOTIyYTEgMSAwIDAgMC0uMDE5LTEuODM4TDEyLjgzIDUuMThhMiAyIDAgMCAwLTEuNjYgMEwyLjYgOS4wOGExIDEgMCAwIDAgMCAxLjgzMmw4LjU3IDMuOTA4YTIgMiAwIDAgMCAxLjY2IDB6IiAvPgogIDxwYXRoIGQ9Ik0yMiAxMHY2IiAvPgogIDxwYXRoIGQ9Ik02IDEyLjVWMTZhNiAzIDAgMCAwIDEyIDB2LTMuNSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/graduation-cap
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
function Monitor_cog($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M12 17v4" }],
    ["path", { "d": "m14.305 7.53.923-.382" }],
    ["path", { "d": "m15.228 4.852-.923-.383" }],
    ["path", { "d": "m16.852 3.228-.383-.924" }],
    ["path", { "d": "m16.852 8.772-.383.923" }],
    ["path", { "d": "m19.148 3.228.383-.924" }],
    ["path", { "d": "m19.53 9.696-.382-.924" }],
    ["path", { "d": "m20.772 4.852.924-.383" }],
    ["path", { "d": "m20.772 7.148.924.383" }],
    [
      "path",
      {
        "d": "M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"
      }
    ],
    ["path", { "d": "M8 21h8" }],
    ["circle", { "cx": "18", "cy": "6", "r": "3" }]
  ];
  Icon($$renderer, spread_props([
    { name: "monitor-cog" },
    $$sanitized_props,
    {
      /**
       * @component @name MonitorCog
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMTd2NCIgLz4KICA8cGF0aCBkPSJtMTQuMzA1IDcuNTMuOTIzLS4zODIiIC8+CiAgPHBhdGggZD0ibTE1LjIyOCA0Ljg1Mi0uOTIzLS4zODMiIC8+CiAgPHBhdGggZD0ibTE2Ljg1MiAzLjIyOC0uMzgzLS45MjQiIC8+CiAgPHBhdGggZD0ibTE2Ljg1MiA4Ljc3Mi0uMzgzLjkyMyIgLz4KICA8cGF0aCBkPSJtMTkuMTQ4IDMuMjI4LjM4My0uOTI0IiAvPgogIDxwYXRoIGQ9Im0xOS41MyA5LjY5Ni0uMzgyLS45MjQiIC8+CiAgPHBhdGggZD0ibTIwLjc3MiA0Ljg1Mi45MjQtLjM4MyIgLz4KICA8cGF0aCBkPSJtMjAuNzcyIDcuMTQ4LjkyNC4zODMiIC8+CiAgPHBhdGggZD0iTTIyIDEzdjJhMiAyIDAgMCAxLTIgMkg0YTIgMiAwIDAgMS0yLTJWNWEyIDIgMCAwIDEgMi0yaDciIC8+CiAgPHBhdGggZD0iTTggMjFoOCIgLz4KICA8Y2lyY2xlIGN4PSIxOCIgY3k9IjYiIHI9IjMiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/monitor-cog
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
function Phone_call($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M13 2a9 9 0 0 1 9 9" }],
    ["path", { "d": "M13 6a5 5 0 0 1 5 5" }],
    [
      "path",
      {
        "d": "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "phone-call" },
    $$sanitized_props,
    {
      /**
       * @component @name PhoneCall
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTMgMmE5IDkgMCAwIDEgOSA5IiAvPgogIDxwYXRoIGQ9Ik0xMyA2YTUgNSAwIDAgMSA1IDUiIC8+CiAgPHBhdGggZD0iTTEzLjgzMiAxNi41NjhhMSAxIDAgMCAwIDEuMjEzLS4zMDNsLjM1NS0uNDY1QTIgMiAwIDAgMSAxNyAxNWgzYTIgMiAwIDAgMSAyIDJ2M2EyIDIgMCAwIDEtMiAyQTE4IDE4IDAgMCAxIDIgNGEyIDIgMCAwIDEgMi0yaDNhMiAyIDAgMCAxIDIgMnYzYTIgMiAwIDAgMS0uOCAxLjZsLS40NjguMzUxYTEgMSAwIDAgMC0uMjkyIDEuMjMzIDE0IDE0IDAgMCAwIDYuMzkyIDYuMzg0IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/phone-call
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
function Plug($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M12 22v-5" }],
    ["path", { "d": "M15 8V2" }],
    [
      "path",
      {
        "d": "M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z"
      }
    ],
    ["path", { "d": "M9 8V2" }]
  ];
  Icon($$renderer, spread_props([
    { name: "plug" },
    $$sanitized_props,
    {
      /**
       * @component @name Plug
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMjJ2LTUiIC8+CiAgPHBhdGggZD0iTTE1IDhWMiIgLz4KICA8cGF0aCBkPSJNMTcgOGExIDEgMCAwIDEgMSAxdjRhNCA0IDAgMCAxLTQgNGgtNGE0IDQgMCAwIDEtNC00VjlhMSAxIDAgMCAxIDEtMXoiIC8+CiAgPHBhdGggZD0iTTkgOFYyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/plug
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
function Rocket($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" }],
    [
      "path",
      {
        "d": "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"
      }
    ],
    [
      "path",
      {
        "d": "M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"
      }
    ],
    [
      "path",
      { "d": "M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05" }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "rocket" },
    $$sanitized_props,
    {
      /**
       * @component @name Rocket
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMTV2NXMzLjAzLS41NSA0LTJjMS4wOC0xLjYyIDAtNSAwLTUiIC8+CiAgPHBhdGggZD0iTTQuNSAxNi41Yy0xLjUgMS4yNi0yIDUtMiA1czMuNzQtLjUgNS0yYy43MS0uODQuNy0yLjEzLS4wOS0yLjkxYTIuMTggMi4xOCAwIDAgMC0yLjkxLS4wOSIgLz4KICA8cGF0aCBkPSJNOSAxMmEyMiAyMiAwIDAgMSAyLTMuOTVBMTIuODggMTIuODggMCAwIDEgMjIgMmMwIDIuNzItLjc4IDcuNS02IDExYTIyLjQgMjIuNCAwIDAgMS00IDJ6IiAvPgogIDxwYXRoIGQ9Ik05IDEySDRzLjU1LTMuMDMgMi00YzEuNjItMS4wOCA1IC4wNSA1IC4wNSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/rocket
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
function Settings($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"
      }
    ],
    ["circle", { "cx": "12", "cy": "12", "r": "3" }]
  ];
  Icon($$renderer, spread_props([
    { name: "settings" },
    $$sanitized_props,
    {
      /**
       * @component @name Settings
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNOS42NzEgNC4xMzZhMi4zNCAyLjM0IDAgMCAxIDQuNjU5IDAgMi4zNCAyLjM0IDAgMCAwIDMuMzE5IDEuOTE1IDIuMzQgMi4zNCAwIDAgMSAyLjMzIDQuMDMzIDIuMzQgMi4zNCAwIDAgMCAwIDMuODMxIDIuMzQgMi4zNCAwIDAgMS0yLjMzIDQuMDMzIDIuMzQgMi4zNCAwIDAgMC0zLjMxOSAxLjkxNSAyLjM0IDIuMzQgMCAwIDEtNC42NTkgMCAyLjM0IDIuMzQgMCAwIDAtMy4zMi0xLjkxNSAyLjM0IDIuMzQgMCAwIDEtMi4zMy00LjAzMyAyLjM0IDIuMzQgMCAwIDAgMC0zLjgzMUEyLjM0IDIuMzQgMCAwIDEgNi4zNSA2LjA1MWEyLjM0IDIuMzQgMCAwIDAgMy4zMTktMS45MTUiIC8+CiAgPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMyIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/settings
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
function Wrench($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "wrench" },
    $$sanitized_props,
    {
      /**
       * @component @name Wrench
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTQuNyA2LjNhMSAxIDAgMCAwIDAgMS40bDEuNiAxLjZhMSAxIDAgMCAwIDEuNCAwbDMuMTA2LTMuMTA1Yy4zMi0uMzIyLjg2My0uMjIuOTgzLjIxOGE2IDYgMCAwIDEtOC4yNTkgNy4wNTdsLTcuOTEgNy45MWExIDEgMCAwIDEtMi45OTktM2w3LjkxLTcuOTFhNiA2IDAgMCAxIDcuMDU3LTguMjU5Yy40MzguMTIuNTQuNjYyLjIxOS45ODR6IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/wrench
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
    { icon: Wrench, title: "Instalare" },
    { icon: Monitor_cog, title: "Programare" },
    { icon: Plug, title: "Integrare" },
    { icon: Clipboard_check, title: "Teste FAT/SAT" },
    { icon: Book_open, title: "Documentație" },
    { icon: Graduation_cap, title: "Training" }
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
      icon: Phone_call,
      title: "Suport Remote",
      desc: "Asistență telefonică și acces remote pentru diagnosticare rapidă și rezolvare probleme."
    },
    {
      icon: Settings,
      title: "Mentenanță Preventivă",
      desc: "Inspecții programate, calibrare și înlocuire componente uzate pentru funcționare optimă."
    },
    {
      icon: Rocket,
      title: "Optimizare Continuă",
      desc: "Analiză performanță, actualizări software și îmbunătățiri pentru productivitate maximă."
    }
  ];
  head("1bcn4cv", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Servicii — R.P.A. | Cercetare, Implementare, Suport</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Servicii complete de automatizare industrială: cercetare și design, implementare profesională, suport tehnic și mentenanță."/> <meta property="og:title" content="Servicii — R.P.A."/> <meta property="og:description" content="Servicii complete de automatizare industrială: cercetare, implementare, suport."/> <meta property="og:type" content="website"/>`);
  });
  $$renderer.push(`<section class="py-24 bg-gradient-to-br from-rpa-navy via-rpa-blue-dark to-rpa-navy text-white"><div class="max-w-4xl mx-auto px-6 text-center"><h1 class="text-4xl md:text-5xl font-extrabold mb-6">Serviciile Noastre</h1> <p class="text-xl text-gray-300 max-w-2xl mx-auto">De la concept la realitate — și dincolo de ea. Oferim servicii complete pe întreg ciclul de viață al proiectului.</p></div></section> <section class="py-16 bg-white"><div class="max-w-4xl mx-auto px-6"><div class="flex flex-col md:flex-row items-center justify-center gap-4 text-center"><div class="bg-rpa-gray rounded-xl px-6 py-4"><div class="w-10 h-10 bg-rpa-accent/10 rounded-lg flex items-center justify-center mb-2 mx-auto">`);
  Flask_conical($$renderer, { class: "w-5 h-5 text-rpa-accent" });
  $$renderer.push(`<!----></div> <div class="font-bold text-rpa-navy text-sm">Cercetare &amp; Design</div></div> <div class="text-rpa-accent text-2xl hidden md:block">→</div> <div class="text-rpa-accent text-2xl md:hidden">↓</div> <div class="bg-rpa-gray rounded-xl px-6 py-4"><div class="w-10 h-10 bg-rpa-accent/10 rounded-lg flex items-center justify-center mb-2 mx-auto">`);
  Cog($$renderer, { class: "w-5 h-5 text-rpa-accent" });
  $$renderer.push(`<!----></div> <div class="font-bold text-rpa-navy text-sm">Implementare</div></div> <div class="text-rpa-accent text-2xl hidden md:block">→</div> <div class="text-rpa-accent text-2xl md:hidden">↓</div> <div class="bg-rpa-gray rounded-xl px-6 py-4"><div class="w-10 h-10 bg-rpa-accent/10 rounded-lg flex items-center justify-center mb-2 mx-auto">`);
  Shield_check($$renderer, { class: "w-5 h-5 text-rpa-accent" });
  $$renderer.push(`<!----></div> <div class="font-bold text-rpa-navy text-sm">Suport &amp; Mentenanță</div></div></div></div></section> <section class="py-24 bg-rpa-gray"><div class="max-w-6xl mx-auto px-6"><div class="grid md:grid-cols-2 gap-16 items-center"><div><div class="w-14 h-14 bg-rpa-accent/10 rounded-2xl flex items-center justify-center mb-6">`);
  Flask_conical($$renderer, { class: "w-7 h-7 text-rpa-accent" });
  $$renderer.push(`<!----></div> <h2 class="text-3xl font-bold text-rpa-navy mb-6">Cercetare &amp; Design</h2> <p class="text-gray-600 mb-6 leading-relaxed">Fiecare proiect de succes începe cu o analiză temeinică și un design bine gândit. Echipa noastră de ingineri lucrează îndeaproape cu dumneavoastră pentru a înțelege procesele, a identifica oportunitățile de automatizare și a dezvolta soluția optimă.</p> <ul class="space-y-3"><!--[-->`);
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
    $$renderer.push(`<div class="bg-white rounded-xl p-4 card-hover"><div class="w-8 h-8 bg-rpa-accent/10 rounded-lg flex items-center justify-center mb-2">`);
    feat.icon($$renderer, { class: "w-4 h-4 text-rpa-accent" });
    $$renderer.push(`<!----></div> <div class="text-sm font-semibold text-rpa-navy">${escape_html(feat.title)}</div></div>`);
  }
  $$renderer.push(`<!--]--></div></div> <div class="order-1 md:order-2"><div class="w-14 h-14 bg-rpa-accent/10 rounded-2xl flex items-center justify-center mb-6">`);
  Cog($$renderer, { class: "w-7 h-7 text-rpa-accent" });
  $$renderer.push(`<!----></div> <h2 class="text-3xl font-bold text-rpa-navy mb-6">Implementare</h2> <p class="text-gray-600 mb-6 leading-relaxed">Transformăm designul în realitate cu precizie și profesionalism. Echipa noastră gestionează întregul proces de implementare, de la achiziția componentelor la instalare, configurare și punerea în funcțiune.</p> <ul class="space-y-3"><!--[-->`);
  const each_array_3 = ensure_array_like(implItems);
  for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
    let item = each_array_3[$$index_3];
    $$renderer.push(`<li class="flex items-start gap-3"><span class="text-rpa-accent font-bold mt-0.5">✓</span> <span class="text-gray-600">${escape_html(item)}</span></li>`);
  }
  $$renderer.push(`<!--]--></ul></div></div></div></section> <section class="py-24 bg-rpa-gray"><div class="max-w-6xl mx-auto px-6"><div class="grid md:grid-cols-2 gap-16 items-center"><div><div class="w-14 h-14 bg-rpa-accent/10 rounded-2xl flex items-center justify-center mb-6">`);
  Shield_check($$renderer, { class: "w-7 h-7 text-rpa-accent" });
  $$renderer.push(`<!----></div> <h2 class="text-3xl font-bold text-rpa-navy mb-6">Suport &amp; Mentenanță</h2> <p class="text-gray-600 mb-6 leading-relaxed">Investiția în automatizare nu se oprește la punerea în funcțiune. Oferim pachete complete de suport și mentenanță pentru a asigura funcționarea optimă a sistemelor pe termen lung.</p> <ul class="space-y-3"><!--[-->`);
  const each_array_4 = ensure_array_like(supportItems);
  for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
    let item = each_array_4[$$index_4];
    $$renderer.push(`<li class="flex items-start gap-3"><span class="text-rpa-accent font-bold mt-0.5">✓</span> <span class="text-gray-600">${escape_html(item)}</span></li>`);
  }
  $$renderer.push(`<!--]--></ul></div> <div class="space-y-4"><!--[-->`);
  const each_array_5 = ensure_array_like(supportTiers);
  for (let $$index_5 = 0, $$length = each_array_5.length; $$index_5 < $$length; $$index_5++) {
    let tier = each_array_5[$$index_5];
    $$renderer.push(`<div class="bg-white rounded-2xl p-6 shadow-sm card-hover"><div class="flex items-center gap-3 mb-2"><div class="w-10 h-10 bg-rpa-accent/10 rounded-lg flex items-center justify-center">`);
    tier.icon($$renderer, { class: "w-5 h-5 text-rpa-accent" });
    $$renderer.push(`<!----></div> <h3 class="font-bold text-rpa-navy">${escape_html(tier.title)}</h3></div> <p class="text-sm text-gray-600">${escape_html(tier.desc)}</p></div>`);
  }
  $$renderer.push(`<!--]--></div></div></div></section> <section class="py-24 bg-rpa-navy text-white text-center"><div class="max-w-3xl mx-auto px-6"><h2 class="text-3xl font-bold mb-6">Aveți un Proiect în Minte?</h2> <p class="text-gray-300 mb-8">Contactați-ne pentru o consultanță gratuită și o ofertă personalizată.</p> <a href="/contact" class="inline-block bg-rpa-accent hover:bg-rpa-accent-dark text-white font-semibold px-8 py-4 rounded-lg btn-hover">Solicită o Ofertă</a></div></section>`);
}
export {
  _page as default
};
