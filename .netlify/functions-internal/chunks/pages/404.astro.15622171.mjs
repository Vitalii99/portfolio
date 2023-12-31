/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, m as maybeRenderHead, f as renderComponent, $ as $$Image } from '../../renderers.mjs';
import 'html-escaper';
/* empty css                         */import '@astrojs/internal-helpers/path';

const $$Astro$4 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" class="bg-theme-light text-black-light dark:text-grey-light astro-SCKKX6R4">
  <head>
    <meta charset="UTF-8">
    <meta name="description" content="Astro description">
    <meta name="viewport" content="width=device-width">
    <link rel="icon" href="/icon.svg" type="image/svg+xml">
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <meta name="generator"${addAttribute(Astro2.generator, "content")}>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">
    <title>${title}</title>
  ${renderHead()}</head>
  <body class="min-h-screen m-0 p-0 astro-SCKKX6R4">
    ${renderSlot($$result, $$slots["default"])}
  </body></html>`;
}, "D:/coder/ASTRO_PORTFOLIO/my-portfolio/src/layouts/Layout.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro();
const $$Theme = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Theme;
  return renderTemplate(_a || (_a = __template(["", '<button type="button" id="themeToggle" class="hidden sm:flex astro-LX4EAE6Q">\n  <svg width="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="astro-LX4EAE6Q">\n    <path class="sun astro-LX4EAE6Q" fill-rule="evenodd" d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm12-7a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1 0-1.6h2.4a.8.8 0 0 1 .8.8zM4 12a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1 0-1.6h2.5a.8.8 0 0 1 .8.8zm16.5-8.5a.8.8 0 0 1 0 1l-1.8 1.8a.8.8 0 0 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM6.3 17.7a.8.8 0 0 1 0 1l-1.7 1.8a.8.8 0 1 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM12 0a.8.8 0 0 1 .8.8v2.5a.8.8 0 0 1-1.6 0V.8A.8.8 0 0 1 12 0zm0 20a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-1.6 0v-2.4a.8.8 0 0 1 .8-.8zM3.5 3.5a.8.8 0 0 1 1 0l1.8 1.8a.8.8 0 1 1-1 1L3.5 4.6a.8.8 0 0 1 0-1zm14.2 14.2a.8.8 0 0 1 1 0l1.8 1.7a.8.8 0 0 1-1 1l-1.8-1.7a.8.8 0 0 1 0-1z"></path>\n    <path class="star astro-LX4EAE6Q" fill-rule="evenodd" d="M6 12.0002L7.875 7.87515L12 6.00015L7.875 4.12515L6 0.000152588L4.125 4.12515L0 6.00015L4.125 7.87515L6 12.0002Z" fill="none"></path>\n    <path class="moon astro-LX4EAE6Q" fill-rule="evenodd" d="M16.5 6A10.5 10.5 0 0 1 4.7 16.4 8.5 8.5 0 1 0 16.4 4.7l.1 1.3zm-1.7-2a9 9 0 0 1 .2 2 9 9 0 0 1-11 8.8 9.4 9.4 0 0 1-.8-.3c-.4 0-.8.3-.7.7a10 10 0 0 0 .3.8 10 10 0 0 0 9.2 6 10 10 0 0 0 4-19.2 9.7 9.7 0 0 0-.9-.3c-.3-.1-.7.3-.6.7a9 9 0 0 1 .3.8z"></path>\n    <circle class="ellipse astro-LX4EAE6Q" cx="1.44636" cy="1.44657" r="1.28571" fill="none"></circle>\n  </svg>\n</button>\n\n\n\n<script>\nconst header = document.querySelector("#header");\nconst theme = (() => {\n  if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {\n    return localStorage.getItem("theme");\n  }\n  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {\n    return "dark";\n  }\n  return "light";\n})();\n\nif (theme === "light") {\n  document.documentElement.classList.remove("dark");\n  header.classList.remove("bg-theme-dark");\n  header.classList.add("bg-theme-light");\n} else {\n  document.documentElement.classList.add("dark");\n  header.classList.remove("bg-theme-light");\n  header.classList.add("bg-theme-dark");\n}\n\nwindow.localStorage.setItem("theme", theme);\n\nconst handleToggleClick = () => {\n  const element = document.documentElement;\n  element.classList.toggle("dark");\n\n  const isDark = element.classList.contains("dark");\n  localStorage.setItem("theme", isDark ? "dark" : "light");\n\n  if (isDark === true) {\n    header.classList.remove("bg-theme-light");\n    header.classList.add("bg-theme-dark");\n  } else {\n    header.classList.remove("bg-theme-dark");\n    header.classList.add("bg-theme-light");\n  }\n  };\n\n  const themeToggle = document.querySelector("#themeToggle");\n  themeToggle.addEventListener("click", handleToggleClick);\n<\/script>'])), maybeRenderHead());
}, "D:/coder/ASTRO_PORTFOLIO/my-portfolio/src/components/theme.astro", void 0);

const transparentLayout = {"src":"/_astro/transparent-layout.ecaa27ac.png","width":300,"height":300,"format":"png"};

const $$Astro$2 = createAstro();
const $$HeaderPage404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HeaderPage404;
  return renderTemplate`${maybeRenderHead()}<header id="header" class="w-full flex shadow-md">
  <section class="mx-auto w-full xl:w-container flex justify-between py-3 px-4 xl:px-0">
    <div class="h-8 flex items-center">
      <h1 class="font-bold text-black-dark dark:text-pumpkin hover:pb-0.5"><a href="/">WEB.DEVELOPER</a></h1>
    </div>
    <div class="hidden">
      ${renderComponent($$result, "ThemeIcon", $$Theme, {})}
    </div>
  </section>
</header>`;
}, "D:/coder/ASTRO_PORTFOLIO/my-portfolio/src/components/header-page-404.astro", void 0);

const $$Astro$1 = createAstro();
const $$FooterPage404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FooterPage404;
  return renderTemplate`${maybeRenderHead()}<footer class="w-full astro-5EA4OMAG">
  <hr class="astro-5EA4OMAG">
  <div class="flex items-center py-2.5 astro-5EA4OMAG">
    <div class="flex gap-x-9 py-0.5 astro-5EA4OMAG">
      <div class="flex gap-x-4 items-center astro-5EA4OMAG">
        <a href="#" class="astro-5EA4OMAG">
          <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="astro-5EA4OMAG">
            <path class="social-icons astro-5EA4OMAG" d="M0.322572 10.652H2.51483V19.6774C2.51483 19.8556 2.65922 20 2.8374 20H6.55446C6.73265 20 6.87704 19.8556 6.87704 19.6774V10.6945H9.39722C9.56109 10.6945 9.69896 10.5715 9.71767 10.4088L10.1004 7.08606C10.1109 6.99465 10.082 6.9031 10.0208 6.83452C9.95959 6.76587 9.87198 6.72658 9.78005 6.72658H6.87716V4.64374C6.87716 4.01587 7.21522 3.69748 7.88204 3.69748C7.97707 3.69748 9.78005 3.69748 9.78005 3.69748C9.95824 3.69748 10.1026 3.55303 10.1026 3.3749V0.324968C10.1026 0.146774 9.95824 0.0023871 9.78005 0.0023871H7.16432C7.14587 0.00148387 7.1049 0 7.04451 0C6.59066 0 5.01309 0.0890967 3.76693 1.23555C2.38619 2.506 2.57812 4.02716 2.62399 4.2909V6.72652H0.322572C0.144383 6.72652 0 6.8709 0 7.0491V10.3294C0 10.5075 0.144383 10.652 0.322572 10.652Z" fill="none"></path>
          </svg>
        </a>
        <a href="#" class="astro-5EA4OMAG">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="astro-5EA4OMAG">
            <g clip-path="url(#clip0_316_467)" class="astro-5EA4OMAG">
              <path class="social-icons astro-5EA4OMAG" d="M20.031 10C20.031 12.7162 20.0193 13.0568 19.9723 14.1213C19.9253 15.1859 19.7531 15.91 19.5065 16.5479C18.986 17.8904 17.9253 18.955 16.5789 19.4755C15.9449 19.7221 15.2169 19.8943 14.1523 19.9413C13.0838 19.9883 12.7472 20 10.031 20C7.31475 20 6.97425 19.9883 5.90967 19.9413C4.84509 19.8943 4.12102 19.7221 3.48305 19.4755C2.81769 19.225 2.21495 18.8297 1.71397 18.3249C1.20517 17.8239 0.809863 17.225 0.559374 16.5519C0.312799 15.9178 0.140587 15.1859 0.0936205 14.1252C0.0466538 13.0568 0.0349121 12.7202 0.0349121 10.0039C0.0349121 7.28767 0.0466538 6.94716 0.0975344 5.87867C0.144501 4.81409 0.316712 4.09002 0.563288 3.45205C0.813777 2.78669 1.20908 2.18004 1.71789 1.68297C2.21495 1.16634 2.81769 0.778865 3.48697 0.524462C4.12102 0.277886 4.849 0.105675 5.91358 0.0587084C6.98207 0.0117417 7.32258 0 10.0388 0C12.7551 0 13.0956 0.0117417 14.1641 0.0626223C15.2287 0.109589 15.9527 0.2818 16.5907 0.528376C17.256 0.778865 17.8588 1.17417 18.3598 1.67906C18.8725 2.18004 19.2639 2.78278 19.5144 3.45205C19.7609 4.08611 19.9332 4.81409 19.9801 5.87867C20.0271 6.94716 20.031 7.28767 20.031 10Z" fill="none"></path>
              <path class="instagram-circle astro-5EA4OMAG" d="M10.0374 4.86511C7.19981 4.86511 4.89844 7.16648 4.89844 10.0041C4.89844 12.8416 7.20372 15.1391 10.0374 15.1391C12.875 15.1391 15.1763 12.8377 15.1763 10.0001C15.1763 7.16257 12.875 4.86511 10.0374 4.86511ZM10.0374 13.3348C8.19785 13.3348 6.70274 11.8436 6.70274 10.0001C6.70274 8.1567 8.19394 6.6655 10.0374 6.6655C11.8769 6.6655 13.372 8.1567 13.372 10.0001C13.372 11.8436 11.8808 13.3348 10.0374 13.3348Z" fill="none"></path>
              <path class="instagram-ellipse astro-5EA4OMAG" d="M16.5789 4.66141C16.5789 5.32286 16.0427 5.85906 15.3812 5.85906C14.7198 5.85906 14.1836 5.32286 14.1836 4.66141C14.1836 3.99997 14.7198 3.46377 15.3812 3.46377C16.0388 3.45985 16.5789 3.99997 16.5789 4.66141Z" fill="none"></path>
            </g>
            <defs class="astro-5EA4OMAG">
              <clipPath id="clip0_316_467" class="astro-5EA4OMAG">
                <rect width="20" height="20" fill="#e9e9e9" class="astro-5EA4OMAG"></rect>
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>
    </div>
  </div>
</footer>`;
}, "D:/coder/ASTRO_PORTFOLIO/my-portfolio/src/components/footer-page-404.astro", void 0);

const notFoundGif = {"src":"/_astro/not-found.d393ff58.gif","width":150,"height":150,"format":"gif"};

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const transparentLayoutAlt = "";
  const notFoundGifAlt = "404";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 Not Found" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "HeaderPage404", $$HeaderPage404, {})}
  ${maybeRenderHead()}<main class="w-full xl:w-container mx-auto mt-10 px-4 xl:px-0">
    <h1 class="mb-5 text-3xl font-medium text-black-dark dark:text-grey-light">Oops!</h1>
    <p class="mb-10 text-2xl font-light">
      We can't seem to find the page you're looking for. Go to&nbsp;
      <a href="/" class="font-normal text-blue-link dark:text-pantone">Home</a>.
    </p>
    <div class="mb-10 flex justify-center sm:justify-start">
      <figure class="relative flex justify-center items-center bg-grey-light rounded-full">
        ${renderComponent($$result2, "Image", $$Image, { "src": transparentLayout, "width": transparentLayout.width, "height": transparentLayout.height, "alt": transparentLayoutAlt, "class": "object-contain" })}
        ${renderComponent($$result2, "Image", $$Image, { "src": notFoundGif, "width": notFoundGif.width, "height": notFoundGif.height, "alt": notFoundGifAlt, "class": "absolute object-contain" })}
      </figure>
    </div>
    ${renderComponent($$result2, "FooterPage404", $$FooterPage404, {})}
  </main>
` })}`;
}, "D:/coder/ASTRO_PORTFOLIO/my-portfolio/src/pages/404.astro", void 0);

const $$file = "D:/coder/ASTRO_PORTFOLIO/my-portfolio/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Theme as $, _404 as _, $$Layout as a, transparentLayout as t };
