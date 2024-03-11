import { gsap } from 'gsap';
import { Application } from '@splinetool/runtime';
const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);


app.load('https://prod.spline.design/HQyOua88qBDkGune/scene.splinecode').then(() => {
    const sphere = app.findObjectByName('Sphere');
    gsap.set(sphere.scale, { x: 2, y: 2, z: 2 });
    canvas.style.filter = 'blur(100px)';
    gsap.to(canvas, {
        autoAlpha: 1,
        duration: 4,
        delay: 5,
    })
})

