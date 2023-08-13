/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../../renderers.mjs';
import 'html-escaper';
import { a as $$Layout } from './404.astro.59c690cf.mjs';
import { $ as $$Header, a as $$Footer } from './index.astro.de68ba99.mjs';
import 'path-to-regexp';
import 'cookie';
import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import 'node:fs';
import 'node:http';
import 'node:tls';
import 'mime';
import 'string-width';
import 'mime/lite.js';
/* empty css                         *//* empty css                           *//* empty css                           */
const $$Astro = createAstro();
const $$Resume = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Resume;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Vitalii Pavlivskyi Resume" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Header", $$Header, {})}
  ${maybeRenderHead()}<main class="w-full xl:w-container mx-auto mt-24 px-4 xl:px-0">
    <h1 class="text-3xl font-medium">Vitalii Pavlivskyi</h1>
    <p class="text-pink-500">
      To get started, open the directory <code>src/pages</code> in your project.<br>
      <strong>Code Challenge:</strong> Tweak the "Welcome to Astro" message above.
    </p>
    ${renderComponent($$result2, "Footer", $$Footer, {})}
  </main>
` })}`;
}, "D:/coder/ASTRO_PORTFOLIO/my-portfolio/src/pages/resume.astro", void 0);

const $$file = "D:/coder/ASTRO_PORTFOLIO/my-portfolio/src/pages/resume.astro";
const $$url = "/resume";

export { $$Resume as default, $$file as file, $$url as url };
