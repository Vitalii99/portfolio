export { o as onRequest, renderers } from '../renderers.mjs';
import 'html-escaper';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'mime/lite.js';

const page = () => import('./prerender.0c811d82.mjs').then(n => n.r);

export { page };
