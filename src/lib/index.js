import { gsap, ScrollTrigger } from "gsap/all";

import Lenis from "@studio-freight/lenis";
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});
gsap.registerPlugin(ScrollTrigger);
lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

const t1 = new gsap.timeline();

let canvas = document.getElementById("cobe");
document.addEventListener("DOMContentLoaded", () => {
  t1.to(".progress", {
    autoAlpha: 0,
    height: 0,
    delay: 2,
    duration: 1,
  });
  t1.to(".loader", {
    y: "-100%",
    duration: 1,
    delay: 0,
  });
  t1.fromTo(".nav", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5 });
  t1.fromTo(
    ".heroText",
    { autoAlpha: 0, y: "100px", overflow: "hidden" },
    { autoAlpha: 1, y: 0, duration: 0.5, overflow: "hidden" }
  );
  t1.fromTo(
    ".heroDescription",
    { autoAlpha: 0, y: "100px" },
    { autoAlpha: 1, y: 0, duration: 0.5 }
  );

  t1.fromTo(
    canvas,
    { autoAlpha: 0 },
    {
      autoAlpha: 1,
      duration: 0.5,
    }
  );
});

// gsap.fromTo(".about-1", {
//   x: "-1000px",
// }, {
//   autoAlpha: 1,
//   x: 0,
//   duration: 1,
//   overflow: "hidden",
//   scrollTrigger: {
//     trigger: ".about-1",
//     start: "top bottom",
//     end: "center center",
//     scrub: 1,
//     invalidateOnRefresh: true,
//   },
// });

// gsap.fromTo(".about-2",
//   {
//     x: "-1000px",
//   },
//   {
//     autoAlpha: 1,
//     x: 0,
//     duration: 1,
//     scrollTrigger: {
//       trigger: ".about-2",
//       start: "top bottom",
//       end: "center center",
//       scrub: 1,
//       invalidateOnRefresh: true,
//     },
//   });
// gsap.fromTo(".about-3",
//   {
//     x: "1000px",
//   },
//   {
//     autoAlpha: 1,
//     x: 0,
//     duration: 1,
//     scrollTrigger: {
//       trigger: ".about-2",
//       start: "top bottom",
//       end: "center center",
//       scrub: 1,
//       invalidateOnRefresh: true,
//     },
//   });

const projects = gsap.utils.toArray(".projects");
let totalWidth = 0;
projects.forEach((project) => {
  totalWidth += project.offsetWidth;
});

gsap.to(".pin-wrap", {
  xPercent: -10 * (projects.length - 1), // Scroll to the end of the container
  scrollTrigger: {
    start: "top top",
    trigger: ".project-section",
    scrub: true,
    pin: true,
    end: () => `+=${totalWidth}`, // End after scrolling the width of the container
    invalidateOnRefresh: true,
  },
});
