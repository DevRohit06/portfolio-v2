import createGlobe from "cobe";

let phi = 0;
let canvas = document.getElementById("cobe");

let width = window.innerWidth;
window.document.addEventListener("DOMContentLoaded", () => {
  const globe = createGlobe(canvas, {
    devicePixelRatio: 2,
    width: 1000,
    height: 1000,
    phi: 0,
    theta: 0,
    dark: 1,
    diffuse: 1.2,
    scale: (width < 768) ? 0.7 : 1.0,
    mapSamples: 16000,
    mapBrightness: 6,
    baseColor: [0.3, 0.3, 0.3],
    markerColor: [0.5, 0.5, 0.5],
    glowColor: [0.5, 0.5, 0.5],
    offset: [0, 0],
    markers: [{ location: [20.5937, 78.9629], size: 0.1 }],
    onRender: (state) => {
      if (width < 768) {
        state.phi = 0;
        return;
      }
      state.phi = phi;
      phi += 0.001;
    },
  });
});
