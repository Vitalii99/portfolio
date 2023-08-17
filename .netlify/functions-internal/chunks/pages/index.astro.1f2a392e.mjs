/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent, b as addAttribute, $ as $$Image } from '../../renderers.mjs';
import 'html-escaper';
import { $ as $$Theme, t as transparentLayout, a as $$Layout } from './404.astro.59641bc2.mjs';
/* empty css                           *//* empty css                           */import '@astrojs/internal-helpers/path';

const $$Astro$8 = createAstro();
const $$HamburgerButtonMobile = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$HamburgerButtonMobile;
  return renderTemplate`${maybeRenderHead()}<button type="button" id="hamburger-button-mobile" class="relative flex justify-end w-6 h-6 cursor-pointer text-3xl sm:hidden astro-3FDZAQOL">
  <div class="absolute top-3 h-0.5 w-6 rounded bg-black-dark dark:bg-pantone transition-all duration-500 before:absolute before:h-0.5 before:w-6 before:-translate-x-3 before:-translate-y-2 before:rounded before:bg-black-dark dark:before:bg-pantone before:transition-all before:duration-500 before:content-[''] after:absolute after:h-0.5 after:w-6 after:-translate-x-3 after:translate-y-2 after:rounded after:bg-black-dark dark:after:bg-pantone after:transition-all after:duration-500 after:content-[''] astro-3FDZAQOL">
  </div>
</button>`;
}, "D:/coder/ASTRO_PORTFOLIO/my-portfolio/src/components/hamburger-button-mobile.astro", void 0);

const $$Astro$7 = createAstro();
const $$HamburgerMenuMobile = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$HamburgerMenuMobile;
  return renderTemplate`${maybeRenderHead()}<section id="list-menu-mobile" class="absolute hidden w-full origin-top animate-open-menu flex-col justify-center bg-theme-light dark:bg-theme-dark text-5xl text-pantone">
  <nav class="flex min-h-screen flex-col items-center py-8" aria-label="mobile">
    <a href="#hero" class="w-full py-8 text-center hover:scale-75 delay-150 transition-all">About</a>
    <hr class="w-1/2 mx-auto">
    <a href="#experience" class="w-full py-8 text-center hover:scale-75 delay-150 transition-all">
      Experience
    </a>
    <hr class="w-1/2 mx-auto">
    <a href="#projects" class="w-full py-8 text-center hover:scale-75 delay-150 transition-all">
      Projects
    </a>
    <hr class="w-1/2 mx-auto">
    <a href="#contact" class="w-full py-8 text-center hover:scale-75 delay-150 transition-all">
      Contact
    </a>
  </nav>
</section>`;
}, "D:/coder/ASTRO_PORTFOLIO/my-portfolio/src/components/hamburger-menu-mobile.astro", void 0);

const $$Astro$6 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header id="header" class="w-full fixed top-0 z-30 transition-all shadow-md">
  <section class="mx-auto w-full xl:w-container flex justify-between py-3 px-4 xl:px-0">
    <div class="h-8 flex items-center">
      <h1 class="font-bold text-black-dark dark:text-pumpkin hover:pb-0.5">
        <a href="/">WEB.DEVELOPER</a>
      </h1>
    </div>
    <div class="w-37 h-8 flex items-center justify-end sm:justify-between">
      ${renderComponent($$result, "HamburgerButtonMobile", $$HamburgerButtonMobile, {})}
      <div id="resume-btn" class="hidden sm:flex items-center px-4 sm:px-0">
        <a href="resume">
          <span class="text-base font-light text-black-dark bg-grey-light hover:bg-grey-hover transition-colors delay-150 rounded-3xl px-4 py-1">Resume</span>
        </a>
      </div>
      <div id="home-btn" class="hidden sm:hidden items-center px-4 sm:px-0">
        <a href="/" class="hover:pb-0.5">
          <span class="text-base font-light text-black-dark dark:text-grey-light px-4 py-1">Home</span>
        </a>
      </div>
      ${renderComponent($$result, "ThemeIcon", $$Theme, {})}
    </div>
  </section>
  ${renderComponent($$result, "HamburgerMenuMobile", $$HamburgerMenuMobile, {})}
</header>`;
}, "D:/coder/ASTRO_PORTFOLIO/my-portfolio/src/components/header.astro", void 0);

const $$Astro$5 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="w-full astro-K2F5ZB5C">
  <hr class="astro-K2F5ZB5C">
  <div class="flex items-center py-2.5 astro-K2F5ZB5C">
    <div class="flex gap-x-9 astro-K2F5ZB5C">
      <div class="flex gap-x-4 items-center astro-K2F5ZB5C">
        <a href="#" class="astro-K2F5ZB5C">
          <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="astro-K2F5ZB5C">
            <path class="social-icons astro-K2F5ZB5C" d="M0.322572 10.652H2.51483V19.6774C2.51483 19.8556 2.65922 20 2.8374 20H6.55446C6.73265 20 6.87704 19.8556 6.87704 19.6774V10.6945H9.39722C9.56109 10.6945 9.69896 10.5715 9.71767 10.4088L10.1004 7.08606C10.1109 6.99465 10.082 6.9031 10.0208 6.83452C9.95959 6.76587 9.87198 6.72658 9.78005 6.72658H6.87716V4.64374C6.87716 4.01587 7.21522 3.69748 7.88204 3.69748C7.97707 3.69748 9.78005 3.69748 9.78005 3.69748C9.95824 3.69748 10.1026 3.55303 10.1026 3.3749V0.324968C10.1026 0.146774 9.95824 0.0023871 9.78005 0.0023871H7.16432C7.14587 0.00148387 7.1049 0 7.04451 0C6.59066 0 5.01309 0.0890967 3.76693 1.23555C2.38619 2.506 2.57812 4.02716 2.62399 4.2909V6.72652H0.322572C0.144383 6.72652 0 6.8709 0 7.0491V10.3294C0 10.5075 0.144383 10.652 0.322572 10.652Z" fill="none"></path>
          </svg>
        </a>
        <a href="#" class="astro-K2F5ZB5C">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="astro-K2F5ZB5C">
            <g clip-path="url(#clip0_316_467)" class="astro-K2F5ZB5C">
              <path class="social-icons astro-K2F5ZB5C" d="M20.031 10C20.031 12.7162 20.0193 13.0568 19.9723 14.1213C19.9253 15.1859 19.7531 15.91 19.5065 16.5479C18.986 17.8904 17.9253 18.955 16.5789 19.4755C15.9449 19.7221 15.2169 19.8943 14.1523 19.9413C13.0838 19.9883 12.7472 20 10.031 20C7.31475 20 6.97425 19.9883 5.90967 19.9413C4.84509 19.8943 4.12102 19.7221 3.48305 19.4755C2.81769 19.225 2.21495 18.8297 1.71397 18.3249C1.20517 17.8239 0.809863 17.225 0.559374 16.5519C0.312799 15.9178 0.140587 15.1859 0.0936205 14.1252C0.0466538 13.0568 0.0349121 12.7202 0.0349121 10.0039C0.0349121 7.28767 0.0466538 6.94716 0.0975344 5.87867C0.144501 4.81409 0.316712 4.09002 0.563288 3.45205C0.813777 2.78669 1.20908 2.18004 1.71789 1.68297C2.21495 1.16634 2.81769 0.778865 3.48697 0.524462C4.12102 0.277886 4.849 0.105675 5.91358 0.0587084C6.98207 0.0117417 7.32258 0 10.0388 0C12.7551 0 13.0956 0.0117417 14.1641 0.0626223C15.2287 0.109589 15.9527 0.2818 16.5907 0.528376C17.256 0.778865 17.8588 1.17417 18.3598 1.67906C18.8725 2.18004 19.2639 2.78278 19.5144 3.45205C19.7609 4.08611 19.9332 4.81409 19.9801 5.87867C20.0271 6.94716 20.031 7.28767 20.031 10Z" fill="none"></path>
              <path class="instagram-circle astro-K2F5ZB5C" d="M10.0374 4.86511C7.19981 4.86511 4.89844 7.16648 4.89844 10.0041C4.89844 12.8416 7.20372 15.1391 10.0374 15.1391C12.875 15.1391 15.1763 12.8377 15.1763 10.0001C15.1763 7.16257 12.875 4.86511 10.0374 4.86511ZM10.0374 13.3348C8.19785 13.3348 6.70274 11.8436 6.70274 10.0001C6.70274 8.1567 8.19394 6.6655 10.0374 6.6655C11.8769 6.6655 13.372 8.1567 13.372 10.0001C13.372 11.8436 11.8808 13.3348 10.0374 13.3348Z" fill="none"></path>
              <path class="instagram-ellipse astro-K2F5ZB5C" d="M16.5789 4.66141C16.5789 5.32286 16.0427 5.85906 15.3812 5.85906C14.7198 5.85906 14.1836 5.32286 14.1836 4.66141C14.1836 3.99997 14.7198 3.46377 15.3812 3.46377C16.0388 3.45985 16.5789 3.99997 16.5789 4.66141Z" fill="none"></path>
            </g>
            <defs class="astro-K2F5ZB5C">
              <clipPath id="clip0_316_467" class="astro-K2F5ZB5C">
                <rect width="20" height="20" fill="#e9e9e9" class="astro-K2F5ZB5C"></rect>
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>
      <p id="home-link" class="hidden astro-K2F5ZB5C">
        <a href="/" class="text-base font-normal text-black-dark dark:text-grey-light astro-K2F5ZB5C">Home</a>
      </p>
      <p id="resume-link" class="flex astro-K2F5ZB5C">
        <a href="/resume" class="text-base font-normal text-black-dark dark:text-grey-light astro-K2F5ZB5C">Resume</a>
      </p>
    </div>
  </div>
</footer>`;
}, "D:/coder/ASTRO_PORTFOLIO/my-portfolio/src/components/footer.astro", void 0);

const $$Astro$4 = createAstro();
const $$ResumeButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ResumeButton;
  return renderTemplate`${maybeRenderHead()}<button id="resume-btn-mobile" type="button" class="w-48 h-14 flex sm:hidden justify-center items-center bg-gradient-45 from-pantone from-10% via-blue-light via-50% to-blue-dark to-90% hover:bg-gradient-45 hover:from-pumpkin hover:from-10% hover:via-orange-light hover:via-50% hover:to-orange-dark hover:to-90% rounded-full border-none text-base font-medium uppercase text-pantone hover:text-black-light hover:font-normal">Resume
</button>`;
}, "D:/coder/ASTRO_PORTFOLIO/my-portfolio/src/components/resume-button.astro", void 0);

const $$Astro$3 = createAstro();
const $$ResumeLoading = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ResumeLoading;
  return renderTemplate`${maybeRenderHead()}<div id="resume-loading-mobile" class="w-48 h-14 hidden justify-center items-center bg-gradient-45 from-pantone from-10% via-blue-light via-50% to-blue-dark to-90% rounded-full border-none astro-JNG46DDL">
  <ul class="h-9 flex flex-row gap-x-2 justify-center items-center astro-JNG46DDL">
    <li class="w-2 h-2 el-flashing-left bg-pantone rounded-full opacity-50 astro-JNG46DDL"></li>
    <li class="w-2 h-2 el-flashing-middle bg-pantone rounded-full astro-JNG46DDL"></li>
    <li class="w-2 h-2 el-flashing-right bg-pantone rounded-full opacity-75 astro-JNG46DDL"></li>
  </ul>
</div>`;
}, "D:/coder/ASTRO_PORTFOLIO/my-portfolio/src/components/resume-loading.astro", void 0);

const $$Astro$2 = createAstro();
const $$ContactUs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ContactUs;
  return renderTemplate`${maybeRenderHead()}<div class="flex gap-x-7 astro-OPD733WN">
  <a href="#" class="astro-OPD733WN">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="astro-OPD733WN">
      <path class="social-icons astro-OPD733WN" fill-rule="evenodd" clip-rule="evenodd" d="M0.907443 23.2589L5.44754 22.068L5.88557 22.3279C7.72732 23.4209 9.83852 23.9992 11.991 24H11.9959C18.6075 24 23.9887 18.6187 23.9914 12.0043C23.9926 8.79906 22.7461 5.78527 20.4813 3.51785C18.2165 1.25042 15.2046 0.00111089 12.0006 0C5.38389 0 0.00262546 5.38078 0 11.9946C-0.000929371 14.2612 0.633266 16.4686 1.83405 18.3785L2.11926 18.8324L0.907443 23.2589ZM18.773 15.1124C19.0245 15.234 19.1943 15.3161 19.2668 15.4371C19.357 15.5875 19.357 16.3095 19.0566 17.152C18.756 17.9943 17.3153 18.7632 16.6224 18.8666C16.0012 18.9595 15.2149 18.9983 14.3511 18.7237C13.8273 18.5576 13.1557 18.3357 12.2953 17.9641C8.91458 16.5043 6.62992 13.2277 6.19813 12.6084C6.16788 12.5651 6.14672 12.5347 6.13492 12.519L6.13201 12.5151C5.94117 12.2604 4.66243 10.5543 4.66243 8.78851C4.66243 7.12742 5.47839 6.25676 5.85397 5.85599C5.8797 5.82854 5.90337 5.80328 5.92456 5.78013C6.2551 5.4191 6.64581 5.32884 6.8862 5.32884C7.12658 5.32884 7.36725 5.33107 7.57736 5.34162C7.60328 5.34292 7.63025 5.34276 7.65813 5.3426C7.86827 5.34137 8.13027 5.33983 8.38872 5.96065C8.48815 6.19956 8.63363 6.55375 8.78708 6.92731C9.09739 7.68277 9.44024 8.51748 9.50056 8.63826C9.59074 8.81878 9.65082 9.02929 9.53063 9.27007C9.51258 9.30617 9.4959 9.34024 9.47995 9.37279C9.38967 9.55711 9.32326 9.69269 9.17002 9.87161C9.10977 9.94196 9.0475 10.0178 8.98523 10.0936C8.86116 10.2447 8.73711 10.3958 8.62909 10.5034C8.44856 10.6832 8.26062 10.8783 8.47098 11.2394C8.68134 11.6004 9.40507 12.7813 10.4771 13.7375C11.6295 14.7654 12.6311 15.1998 13.1388 15.4201C13.2379 15.4631 13.3182 15.4979 13.3771 15.5274C13.7376 15.708 13.948 15.6777 14.1584 15.4371C14.3687 15.1965 15.0598 14.3841 15.3002 14.0231C15.5406 13.6622 15.7811 13.7224 16.1115 13.8426C16.4422 13.9631 18.2151 14.8354 18.5757 15.0159C18.6461 15.0511 18.7119 15.083 18.773 15.1124Z" fill="none"></path>
    </svg>
  </a>
  <a href="#" class="astro-OPD733WN">
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="astro-OPD733WN">
      <path class="social-icons astro-OPD733WN" d="M12.9912 0C6.36309 0 0.991211 4.97344 0.991211 11.1094C0.991211 14.6062 2.73496 17.7234 5.46309 19.7625V24L9.55059 21.7594C10.6428 22.0594 11.7959 22.2234 12.9912 22.2234C19.6193 22.2234 24.9912 17.25 24.9912 11.1141C24.9912 4.97344 19.6193 0 12.9912 0ZM14.1818 14.9625L11.1256 11.7047L5.16777 14.9625L11.7256 8.00156L14.8568 11.2594L20.7443 8.00156L14.1818 14.9625Z" fill="none"></path>
    </svg>
  </a>
  <a href="#" class="astro-OPD733WN">
    <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="astro-OPD733WN">
      <path class="social-icons astro-OPD733WN" d="M19.132 2.13718C16.5794 -0.338741 6.68789 -1.1329 3.08683 2.32404C1.67376 3.81893 1.0356 5.92113 0.898853 9.28464V9.56493C0.85327 12.2744 0.762104 17.1328 4.81898 18.9547C5.18365 19.1416 5.41156 19.5153 5.41156 19.889V23.1124C5.41156 23.7197 5.68506 23.9066 5.86739 23.9533C5.95856 24 6.00414 24 6.09531 24C6.32322 24 6.55114 23.8599 6.68789 23.673C7.28046 23.0657 8.73912 21.2438 9.51403 20.2628C9.69636 20.0292 10.0154 19.889 10.3345 19.889C13.2062 19.9825 15.531 19.4219 16.0324 19.2817C16.078 19.2817 16.1691 19.235 16.2603 19.1883C17.3543 18.908 20.6363 18.0671 21.1833 13.0686C21.1833 13.0219 21.1833 12.9752 21.1833 12.9284C21.5479 9.89194 21.6847 4.42623 19.132 2.13718ZM14.3002 16.946C13.343 16.6657 10.9727 15.3576 9.46845 14.0963C6.32322 11.4335 5.3204 7.92989 4.7734 6.80872C4.72782 6.66857 4.72782 6.52843 4.72782 6.38828C4.72782 5.45397 5.5939 4.65981 6.36881 4.19266C6.82463 3.95908 7.23488 4.00579 7.50838 4.37952C7.78188 4.75324 8.28329 5.2204 9.0582 6.66857C9.3317 7.22916 9.14936 7.78974 8.87587 8.02332L8.28329 8.49048C8.00979 8.72405 8.05537 9.19121 8.05537 9.19121C8.05537 9.19121 8.92145 12.6014 12.0667 13.4423C12.0667 13.4423 12.5225 13.489 12.7504 13.162L13.2062 12.5547C13.4342 12.2744 13.9812 12.0408 14.4826 12.3679C15.2119 12.7883 16.078 13.4423 16.5794 14.0963C16.7617 14.2832 16.8985 14.5168 16.8985 14.7503C16.8985 14.9372 16.8529 15.0774 16.7617 15.2642C16.3059 16.1051 15.531 16.9927 14.7105 16.9927C14.5737 16.9927 14.437 16.9927 14.3002 16.946ZM17.3543 10.2657C17.3999 10.6861 16.7617 10.6861 16.7617 10.2657C16.7161 6.1547 14.1635 3.95908 11.0183 3.91236C10.608 3.91236 10.608 3.25835 11.0183 3.25835C12.796 3.25835 14.3458 3.91236 15.4854 5.12696C16.625 6.29485 17.3543 8.07004 17.3543 10.2657ZM11.5653 5.59412C11.155 5.5474 11.2006 4.89339 11.6108 4.9401C14.3458 5.17368 15.8045 7.18244 15.7589 9.61165C15.7589 10.0788 15.1663 10.0321 15.1663 9.61165C15.2119 7.46274 13.9356 5.78098 11.5653 5.59412ZM14.1635 9.05106C14.2091 9.51822 13.5709 9.51822 13.5709 9.09778C13.5253 7.97661 13.0239 7.41602 12.0211 7.36931C11.6108 7.32259 11.6564 6.66857 12.0211 6.71529C13.343 6.80872 14.1179 7.60288 14.1635 9.05106Z" fill="none"></path>
    </svg>
  </a>
  <a href="#" class="astro-OPD733WN">
    <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="astro-OPD733WN">
      <path class="social-icons astro-OPD733WN" d="M1.46628 11.5079L7.66379 13.8785L10.0626 21.7848C10.2161 22.2912 10.8203 22.4784 11.2213 22.1423L14.6759 19.2561C15.038 18.9537 15.5538 18.9386 15.9323 19.2202L22.1631 23.8563C22.5921 24.1759 23.1999 23.935 23.3075 23.4037L27.8719 0.902248C27.9894 0.321911 27.433 -0.162224 26.8938 0.0514974L1.45902 10.1073C0.831345 10.3554 0.836814 11.2662 1.46628 11.5079ZM9.67602 12.6166L21.7883 4.97122C22.0059 4.83422 22.2299 5.13588 22.043 5.31358L12.0469 14.8364C11.6955 15.1716 11.4689 15.6202 11.4047 16.1071L11.0642 18.6932C11.0191 19.0385 10.5458 19.0728 10.4528 18.7386L9.1432 14.0227C8.9932 13.4848 9.21178 12.9102 9.67602 12.6166Z" fill="none"></path>
    </svg>
  </a>
</div>`;
}, "D:/coder/ASTRO_PORTFOLIO/my-portfolio/src/components/contact-us.astro", void 0);

const mySelfTransparent = {"src":"/_astro/my-self-transparent.f149b60e.png","width":3305,"height":3305,"format":"png"};

const html = {"src":"/_astro/html.34826e5b.svg","width":128,"height":128,"format":"svg"};

const css = {"src":"/_astro/css.36b7d94b.svg","width":128,"height":128,"format":"svg"};

const javaScript = {"src":"/_astro/java-script.0656ff65.svg","width":128,"height":128,"format":"svg"};

const tailwindCss = {"src":"/_astro/tailwind-css.f8cec545.svg","width":128,"height":128,"format":"svg"};

const reactJs = {"src":"/_astro/react-js.5825b649.svg","width":128,"height":128,"format":"svg"};

const astro = {"src":"/_astro/astro.74a7d16d.svg","width":128,"height":128,"format":"svg"};

const visualStudioCode = {"src":"/_astro/visual-studio-code.503d580c.svg","width":128,"height":128,"format":"svg"};

const gitLab = {"src":"/_astro/git-lab.d057a46d.svg","width":128,"height":128,"format":"svg"};

const $$Astro$1 = createAstro();
const $$Experience = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Experience;
  const htmlAlt = "HTML5";
  const cssAlt = "CSS3";
  const javaScriptAlt = "JavaScript";
  const tailwindCssAlt = "Tailwind CSS";
  const reactJsAlt = "React";
  const astroAlt = "Astro";
  const visualStudioCodeAlt = "Visual Studio Code";
  const gitLabAlt = "GitLab";
  return renderTemplate`${maybeRenderHead()}<figure class="w-full flex flex-col xl:flex-row-reverse justify-center items-center gap-x-5 sm:gap-y-2.5 hover:scale-75 delay-150 transition-all astro-C352DBMD">
  <figcaption class="astro-C352DBMD">HTML5</figcaption>
  <img${addAttribute(html.src, "src")}${addAttribute(72, "width")}${addAttribute(72, "height")} loading="lazy" decoding="async"${addAttribute(htmlAlt, "alt")} class="p-2 astro-C352DBMD">
</figure>
<figure class="w-full flex flex-col xl:flex-row-reverse justify-center items-center gap-x-5 sm:gap-y-2.5 hover:scale-75 delay-150 transition-all astro-C352DBMD">
  <figcaption class="astro-C352DBMD">CSS3</figcaption>
  <img${addAttribute(css.src, "src")}${addAttribute(72, "width")}${addAttribute(72, "height")} loading="lazy" decoding="async"${addAttribute(cssAlt, "alt")} class="p-2 astro-C352DBMD">
</figure>
<figure class="w-full flex flex-col xl:flex-row-reverse justify-center items-center gap-x-5 sm:gap-y-2.5 hover:scale-75 delay-150 transition-all astro-C352DBMD">
  <figcaption class="astro-C352DBMD">JavaScript</figcaption>
  <img${addAttribute(javaScript.src, "src")}${addAttribute(72, "width")}${addAttribute(72, "height")} loading="lazy" decoding="async"${addAttribute(javaScriptAlt, "alt")} class="p-2 astro-C352DBMD">
</figure>
<figure class="w-full flex flex-col xl:flex-row-reverse justify-center items-center gap-x-5 sm:gap-y-2.5 hover:scale-75 delay-150 transition-all astro-C352DBMD">
  <figcaption class="astro-C352DBMD">Tailwind&nbsp;CSS</figcaption>
  <img${addAttribute(tailwindCss.src, "src")}${addAttribute(72, "width")}${addAttribute(72, "height")} loading="lazy" decoding="async"${addAttribute(tailwindCssAlt, "alt")} class="p-2 astro-C352DBMD">
</figure>
<figure class="w-full flex flex-col xl:flex-row-reverse justify-center items-center gap-x-5 sm:gap-y-2.5 hover:scale-75 delay-150 transition-all astro-C352DBMD">
  <figcaption class="astro-C352DBMD">React</figcaption>
  <img${addAttribute(reactJs.src, "src")}${addAttribute(72, "width")}${addAttribute(72, "height")} loading="lazy" decoding="async"${addAttribute(reactJsAlt, "alt")} class="p-2 astro-C352DBMD">
</figure>
<figure class="w-full flex flex-col xl:flex-row-reverse justify-center items-center gap-x-5 sm:gap-y-2.5 hover:scale-75 delay-150 transition-all astro-C352DBMD">
  <figcaption class="astro-C352DBMD">Next.js</figcaption>
  <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" style="padding: 8px;" viewBox="0 0 128 128" class="astro-C352DBMD"><g fill="none" class="astro-C352DBMD"><path class="next-js astro-C352DBMD" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"></path></g></svg>
</figure>
<figure class="w-full flex flex-col xl:flex-row-reverse justify-center items-center gap-x-5 sm:gap-y-2.5 hover:scale-75 delay-150 transition-all astro-C352DBMD">
  <figcaption class="astro-C352DBMD">Astro</figcaption>
  <img${addAttribute(astro.src, "src")}${addAttribute(72, "width")}${addAttribute(72, "height")} loading="lazy" decoding="async"${addAttribute(astroAlt, "alt")} class="p-2 astro-C352DBMD">
</figure>
<figure class="w-full flex flex-col xl:flex-row-reverse justify-center items-center gap-x-5 sm:gap-y-2.5 hover:scale-75 delay-150 transition-all astro-C352DBMD">
  <figcaption class="astro-C352DBMD">VS&nbsp;Code</figcaption>
  <img${addAttribute(visualStudioCode.src, "src")}${addAttribute(72, "width")}${addAttribute(72, "height")} loading="lazy" decoding="async"${addAttribute(visualStudioCodeAlt, "alt")} class="p-2 astro-C352DBMD">
</figure>
<figure class="w-full flex flex-col xl:flex-row-reverse justify-center items-center gap-x-5 sm:gap-y-2.5 hover:scale-75 delay-150 transition-all astro-C352DBMD">
  <figcaption class="astro-C352DBMD">GitHub</figcaption>
  <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" style="padding: 8px;" viewBox="0 0 128 128" class="astro-C352DBMD"><g fill="none" class="astro-C352DBMD"><path class="github astro-C352DBMD" fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0" class="astro-C352DBMD"></path></g></svg>
</figure>
<figure class="w-full flex flex-col xl:flex-row-reverse justify-center items-center gap-x-5 sm:gap-y-2.5 hover:scale-75 delay-150 transition-all astro-C352DBMD">
  <figcaption class="astro-C352DBMD">GitLab</figcaption>
  <img${addAttribute(gitLab.src, "src")}${addAttribute(72, "width")}${addAttribute(72, "height")} loading="lazy" decoding="async"${addAttribute(gitLabAlt, "alt")} class="p-2 astro-C352DBMD">
</figure>`;
}, "D:/coder/ASTRO_PORTFOLIO/my-portfolio/src/components/experience.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const transparentLayoutAlt = "";
  const mySelfTransparentAlt = "My Photo";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Vitalii Pavlivskyi Portfolio" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Header", $$Header, {})}
  ${maybeRenderHead()}<main class="w-full xl:w-container mx-auto mt-14 px-4 xl:px-0">
    <section id="hero" class="w-full mb-24 flex flex-col items-center scroll-mt-24">
      <h2 class="mt-14 mb-6 text-5xl font-medium text-pantone text-center">
        Vitalii Pavlivskyi
      </h2>
      <h3 class="mb-8 text-2xl text-center">Front End Developer</h3>
      <div class="w-full mb-8 sm:mb-0 flex justify-center">
        ${renderComponent($$result2, "ResumeButton", $$ResumeButton, {})}
        ${renderComponent($$result2, "ResumeLoading", $$ResumeLoading, {})}
      </div>
      <p class="mb-8 text-lg text-center">
        Freelancer providing services for programming.<br>
        Contact me down below and let's get started.
      </p>
      <div class="mb-16 w-full flex flex-col items-center">
        ${renderComponent($$result2, "ContactUs", $$ContactUs, {})}
      </div>
      <div class="w-full flex justify-center">
        <figure class="relative flex justify-center items-center bg-gradient-to-b from-pantone from-20% to-black-dark to-90% rounded-full shadow-md overflow-hidden">
          ${renderComponent($$result2, "Image", $$Image, { "src": transparentLayout, "width": transparentLayout.width, "height": transparentLayout.height, "alt": transparentLayoutAlt, "class": "object-contain" })}
          ${renderComponent($$result2, "Image", $$Image, { "src": mySelfTransparent, "width": mySelfTransparent.width, "alt": mySelfTransparentAlt, "quality": "max", "class": "absolute" })}
        </figure>
      </div>
    </section>
    <hr class="w-1/2 mb-24 mx-auto">
    <section id="experience" class="w-full mb-24 flex flex-col scroll-mt-16">
      <h3 class="mb-16 text-2xl text-start">Experience</h3>
      <div class="w-full grid grid-cols-2 sm:grid-cols-5 gap-8">
        ${renderComponent($$result2, "Experience", $$Experience, {})}
      </div>
    </section>
    <hr class="w-1/2 mb-24 mx-auto">
    <section id="projects" class="w-full mb-24 flex flex-col">
      <h3 class="mb-8 text-2xl text-start">Projects</h3>
      <p class="mb-8 text-lg text-start">
        Check out some of my recent work.
      </p>
      <div class="w-full grid grid-cols-2 sm:grid-cols-5 gap-8">
      </div>
    </section>
    <hr class="w-1/2 mb-24 mx-auto">
    <section id="contact" class="w-full mb-24 flex flex-col">
      <h3 class="mb-16 text-2xl text-start">Contact</h3>
      <div class="w-full grid grid-cols-2 sm:grid-cols-5 gap-8">
      </div>
    </section>
    ${renderComponent($$result2, "Footer", $$Footer, {})}
  </main>
` })}`;
}, "D:/coder/ASTRO_PORTFOLIO/my-portfolio/src/pages/index.astro", void 0);

const $$file = "D:/coder/ASTRO_PORTFOLIO/my-portfolio/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Header as $, $$Footer as a, index as i };
