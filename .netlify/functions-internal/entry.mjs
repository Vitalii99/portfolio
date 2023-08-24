import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { g as deserializeManifest, renderers } from './renderers.mjs';
import 'mime';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'path-to-regexp';
import 'string-width';
import 'mime/lite.js';

const _page0  = () => import('./renderers.mjs').then(n => n.i);
const _page1  = () => import('./chunks/index@_@astro.6d8ff92e.mjs');
const _page2  = () => import('./chunks/resume@_@astro.27ce1b0d.mjs');
const _page3  = () => import('./chunks/404@_@astro.1eb5c9a3.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/resume.astro", _page2],["src/pages/404.astro", _page3]]);
const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"resume/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/resume","type":"page","pattern":"^\\/resume\\/?$","segments":[[{"content":"resume","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/resume.astro","pathname":"/resume","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/image-endpoint.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":false,"markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"componentMetadata":[["D:/coder/ASTRO_PORTFOLIO/my-portfolio/src/pages/404.astro",{"propagation":"none","containsHead":true}],["D:/coder/ASTRO_PORTFOLIO/my-portfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}],["D:/coder/ASTRO_PORTFOLIO/my-portfolio/src/pages/resume.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,n)=>{let s=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),s();break}});for(let e of n.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","\u0000empty-middleware":"_empty-middleware.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index@_@astro.6d8ff92e.mjs","\u0000@astro-page:src/pages/resume@_@astro":"chunks/resume@_@astro.27ce1b0d.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404@_@astro.1eb5c9a3.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.0b30aae5.js","/astro/hoisted.js?q=1":"_astro/hoisted.fc0583d2.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/transparent-layout.ecaa27ac.png","/_astro/not-found.d393ff58.gif","/_astro/screen-one-desktop.acb2e4a6.png","/_astro/screen-one-mobile.1c8ee578.png","/_astro/screen-three-desktop.eb9df9a3.png","/_astro/screen-three-mobile.4a4a00bd.png","/_astro/screen-seven-mobile.3a292ea9.png","/_astro/screen-six-mobile.96db17bf.png","/_astro/screen-two-desktop.429e8ab9.png","/_astro/screen-two-mobile.b6cd5d71.png","/_astro/html.34826e5b.svg","/_astro/css.36b7d94b.svg","/_astro/java-script.0656ff65.svg","/_astro/tailwind-css.f8cec545.svg","/_astro/react-js.5825b649.svg","/_astro/astro.74a7d16d.svg","/_astro/visual-studio-code.503d580c.svg","/_astro/git-lab.d057a46d.svg","/_astro/screen-four-mobile.a97cf85a.png","/_astro/screen-five-mobile.6a28cf41.png","/_astro/my-self-transparent.3bc7d99b.png","/_astro/404.764abeac.css","/_astro/404.aa125e24.css","/_astro/index.74a677e0.css","/_astro/index.40f047e5.css","/icon.svg","/_astro/hoisted.0b30aae5.js","/_astro/hoisted.fc0583d2.js","/index.html","/resume/index.html","/404.html"]}), {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
