const s=document.querySelector("#header");let d=window.pageXOffset;window.onscroll=function(){r()};function r(){let e=window.pageYOffset;d>e?(s.classList.remove("-top-14"),s.classList.add("shadow-md"),s.classList.add("top-0")):e>0&&(s.classList.remove("top-0"),s.classList.remove("shadow-md"),s.classList.add("-top-14")),d=e}const o=document.querySelector("#resume-btn"),t=document.querySelector("#home-btn"),a=document.querySelector("#hamburger-button-mobile"),m=document.querySelector("#nav-links-desktop"),u=location.pathname.split("/").splice(1,1).toString();switch(u){case"resume":o.classList.remove("sm:flex"),o.classList.add("sm:hidden"),t.classList.remove("sm:hidden"),t.classList.remove("hidden"),t.classList.add("sm:flex"),t.classList.add("flex"),a.classList.remove("flex"),a.classList.add("hidden"),m.classList.add("sm:hidden");break;default:o.classList.remove("sm:hidden"),o.classList.add("sm:flex"),t.classList.remove("sm:flex"),t.classList.add("sm:hidden")}const l=document.querySelector("#resume-link"),c=document.querySelector("#home-link"),L=location.pathname.split("/").splice(1,1).toString();switch(L){case"resume":l.classList.remove("flex"),l.classList.add("hidden"),c.classList.remove("hidden"),c.classList.add("flex");break;default:l.classList.remove("hidden"),l.classList.add("flex"),c.classList.remove("flex"),c.classList.add("hidden")}const h=()=>{const e=document.querySelector("#hamburger-button-mobile"),i=document.querySelector("#list-menu-mobile"),n=()=>{i.classList.toggle("hidden"),i.classList.toggle("flex"),e.classList.toggle("toggle-btn")};e.addEventListener("click",n),i.addEventListener("click",n)};document.addEventListener("DOMContentLoaded",h);
