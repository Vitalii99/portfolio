export { o as onRequest, renderers } from '../renderers.mjs';
import 'html-escaper';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'mime/lite.js';

const page = () => import('./pages/404.astro.8e4729e8.mjs').then(n => n._);

export { page };
