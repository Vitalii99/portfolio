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
const _page1  = () => import('./chunks/index@_@astro.837f045d.mjs');
const _page2  = () => import('./chunks/resume@_@astro.8c7317b1.mjs');
const _page3  = () => import('./chunks/404@_@astro.4daa032f.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/resume.astro", _page2],["src/pages/404.astro", _page3]]);
const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/image-endpoint.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.f871ebc9.js"}],"styles":[{"type":"external","src":"/_astro/404.eceb2853.css"},{"type":"external","src":"/_astro/index.2ec49881.css"},{"type":"external","src":"/_astro/index.87b50ee1.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.4e9851f3.js"}],"styles":[{"type":"external","src":"/_astro/404.eceb2853.css"},{"type":"external","src":"/_astro/index.2ec49881.css"}],"routeData":{"route":"/resume","type":"page","pattern":"^\\/resume\\/?$","segments":[[{"content":"resume","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/resume.astro","pathname":"/resume","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/404.eceb2853.css"},{"type":"external","src":"/_astro/404.764abeac.css"}],"routeData":{"route":"/404","type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":false,"markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"componentMetadata":[["D:/coder/ASTRO_PORTFOLIO/my-portfolio/src/pages/404.astro",{"propagation":"none","containsHead":true}],["D:/coder/ASTRO_PORTFOLIO/my-portfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}],["D:/coder/ASTRO_PORTFOLIO/my-portfolio/src/pages/resume.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,n)=>{let s=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),s();break}});for(let e of n.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/resume.astro":"chunks/pages/resume.astro.3488973a.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index@_@astro.837f045d.mjs","\u0000@astro-page:src/pages/resume@_@astro":"chunks/resume@_@astro.8c7317b1.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404@_@astro.4daa032f.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.f871ebc9.js","/astro/hoisted.js?q=1":"_astro/hoisted.4e9851f3.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/transparent-layout.ecaa27ac.png","/_astro/not-found.d393ff58.gif","/_astro/html.34826e5b.svg","/_astro/tailwind-css.f8cec545.svg","/_astro/next-js.861fd1c0.svg","/_astro/java-script.0656ff65.svg","/_astro/css.36b7d94b.svg","/_astro/git-hub.45262793.svg","/_astro/git-lab.d057a46d.svg","/_astro/astro.f48e0276.svg","/_astro/visual-studio-code.503d580c.svg","/_astro/react-js.5825b649.svg","/_astro/404.764abeac.css","/_astro/404.eceb2853.css","/_astro/index.2ec49881.css","/_astro/index.87b50ee1.css","/icon.svg","/_astro/hoisted.4e9851f3.js","/_astro/hoisted.f871ebc9.js"]}), {
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
