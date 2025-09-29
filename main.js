document.getElementById("menu").addEventListener("click", function () {
    document.getElementById("nav-links").classList.toggle("show");
});
// .........................................................................
// const c = document.getElementById('ribbons'), ctx = c.getContext('2d');
// function s() { c.width = innerWidth; c.height = innerHeight; } s(); addEventListener('resize', s);
// let t = 0;
// function draw() {
//     ctx.clearRect(0, 0, c.width, c.height);
//     for (let i = 0; i < 5; i++) {
//         ctx.beginPath();
//         for (let x = 0; x < c.width; x += 8) {
//             let y = c.height / 2 + Math.sin(x * 0.006 + t + i) * (60 + i * 18) + Math.cos(t * 0.5 + i) * 20;
//             ctx.lineTo(x, y + i * 30 - 60);
//         }
//         ctx.strokeStyle = `rgba(${20 + i * 30},${120 + i * 20},${200 - i * 10},0.9)`;
//         ctx.lineWidth = 2 + i * 0.6;
//         ctx.shadowBlur = 20; ctx.shadowColor = 'rgba(80,160,255,0.5)';
//         ctx.stroke(); ctx.shadowBlur = 0;
//     }
//     t += 0.01;
//     requestAnimationFrame(draw);
// }
// draw();
// ............................................................................................
const p = document.getElementById('pf'), q = p.getContext('2d');
function sz() { p.width = innerWidth; p.height = innerHeight; } sz(); addEventListener('resize', sz);
class P {
    constructor() { this.x = Math.random() * p.width; this.y = Math.random() * p.height; this.vx = (Math.random() - 0.5) * 0.6; this.vy = (Math.random() - 0.5) * 0.6; this.s = 1 + Math.random() * 1.5; }
    update() { this.x += this.vx; this.y += this.vy; if (this.x < 0 || this.x > p.width) this.vx *= -1; if (this.y < 0 || this.y > p.height) this.vy *= -1; }
    draw() { q.beginPath(); q.arc(this.x, this.y, this.s, 0, Math.PI * 2); q.fillStyle = 'rgba(100,210,255,0.95)'; q.shadowBlur = 12; q.shadowColor = 'rgba(100,210,255,0.8)'; q.fill(); q.shadowBlur = 0; }
}
let arr = []; for (let i = 0; i < 110; i++) arr.push(new P());
function connect() {
    for (let i = 0; i < arr.length; i++) for (let j = i + 1; j < arr.length; j++) {
        let dx = arr[i].x - arr[j].x, dy = arr[i].y - arr[j].y, d = Math.hypot(dx, dy);
        if (d < 140) {
            q.beginPath(); q.moveTo(arr[i].x, arr[i].y); q.lineTo(arr[j].x, arr[j].y);
            q.strokeStyle = `rgba(100,210,255,${1 - d / 140})`; q.lineWidth = 0.7; q.stroke();
        }
    }
}
function animP() { q.clearRect(0, 0, p.width, p.height); arr.forEach(x => { x.update(); x.draw(); }); connect(); requestAnimationFrame(animP); }
animP();
// ............................................................................................................
const canvasNet = document.getElementById('networkCanvas'),
      ctxNet = canvasNet.getContext('2d');

function resizeNet() { 
  canvasNet.width = innerWidth; 
  canvasNet.height = innerHeight; 
}
resizeNet(); 
addEventListener('resize', resizeNet);

class Node {
  constructor() {
    this.x = Math.random() * canvasNet.width;
    this.y = Math.random() * canvasNet.height;
    this.vx = (Math.random() - 0.5) * 0.6;
    this.vy = (Math.random() - 0.5) * 0.6;
    this.r = 1 + Math.random() * 1.5;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > canvasNet.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvasNet.height) this.vy *= -1;
  }
  draw() {
    ctxNet.beginPath();
    ctxNet.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctxNet.fillStyle = 'rgba(120,220,255,0.95)';
    ctxNet.shadowBlur = 12; 
    ctxNet.shadowColor = 'rgba(120,220,255,0.8)';
    ctxNet.fill();
    ctxNet.shadowBlur = 0;
  }
}

let nodes = [];
for (let i = 0; i < 120; i++) nodes.push(new Node());

function connectNodes() {
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      let dx = nodes[i].x - nodes[j].x,
          dy = nodes[i].y - nodes[j].y,
          dist = Math.hypot(dx, dy);

      if (dist < 150) {
        ctxNet.beginPath();
        ctxNet.moveTo(nodes[i].x, nodes[i].y);
        ctxNet.lineTo(nodes[j].x, nodes[j].y);

        // تدرج لون مع المسافة
        ctxNet.strokeStyle = `rgba(120,220,255,${1 - dist / 150})`;
        ctxNet.lineWidth = 0.7;
        ctxNet.stroke();
      }
    }
  }
}

function animateNet() {
  ctxNet.clearRect(0, 0, canvasNet.width, canvasNet.height);
  nodes.forEach(n => { n.update(); n.draw(); });
  connectNodes();
  requestAnimationFrame(animateNet);
}
animateNet();
// ..................................................................................
const canvasNet3 = document.getElementById('networkCanvas3'),
      ctxNet3 = canvasNet3.getContext('2d');

function resizeNet3() { 
  canvasNet3.width = innerWidth; 
  canvasNet3.height = innerHeight; 
}
resizeNet3(); 
addEventListener('resize', resizeNet3);

class Node3 {
  constructor() {
    this.x = Math.random() * canvasNet3.width;
    this.y = Math.random() * canvasNet3.height;
    this.vx = (Math.random() - 0.5) * 0.6;
    this.vy = (Math.random() - 0.5) * 0.6;
    this.r = 1 + Math.random() * 1.5;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > canvasNet3.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvasNet3.height) this.vy *= -1;
  }
  draw() {
    ctxNet3.beginPath();
    ctxNet3.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctxNet3.fillStyle = 'rgba(160,230,255,0.95)';
    ctxNet3.shadowBlur = 10; 
    ctxNet3.shadowColor = 'rgba(160,230,255,0.8)';
    ctxNet3.fill();
    ctxNet3.shadowBlur = 0;
  }
}

let nodes3 = [];
for (let i = 0; i < 100; i++) nodes3.push(new Node3());

function connectNodes3() {
  for (let i = 0; i < nodes3.length; i++) {
    for (let j = i + 1; j < nodes3.length; j++) {
      let dx = nodes3[i].x - nodes3[j].x,
          dy = nodes3[i].y - nodes3[j].y,
          dist = Math.hypot(dx, dy);

      if (dist < 130) {
        ctxNet3.beginPath();
        ctxNet3.moveTo(nodes3[i].x, nodes3[i].y);
        ctxNet3.lineTo(nodes3[j].x, nodes3[j].y);
        ctxNet3.strokeStyle = `rgba(160,230,255,${1 - dist / 130})`;
        ctxNet3.lineWidth = 0.7;
        ctxNet3.stroke();
      }
    }
  }
}

function animateNet3() {
  ctxNet3.clearRect(0, 0, canvasNet3.width, canvasNet3.height);
  nodes3.forEach(n => { n.update(); n.draw(); });
  connectNodes3();
  requestAnimationFrame(animateNet3);
}
animateNet3();
//.......................................................................................
const canvas4 = document.getElementById('particleCanvas4'),
      ctx4 = canvas4.getContext('2d');

function resizeCanvas4() { 
  canvas4.width = innerWidth; 
  canvas4.height = innerHeight; 
}
resizeCanvas4(); 
addEventListener('resize', resizeCanvas4);

class Dot4 {
  constructor() {
    this.x = Math.random() * canvas4.width;
    this.y = Math.random() * canvas4.height;
    this.vx = (Math.random() - 0.5) * 0.7;
    this.vy = (Math.random() - 0.5) * 0.7;
    this.radius = 1 + Math.random() * 1.5;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > canvas4.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas4.height) this.vy *= -1;
  }
  draw() {
    ctx4.beginPath();
    ctx4.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx4.fillStyle = 'rgba(200,240,255,0.95)';
    ctx4.shadowBlur = 10; 
    ctx4.shadowColor = 'rgba(200,240,255,0.8)';
    ctx4.fill();
    ctx4.shadowBlur = 0;
  }
}

let dots4 = [];
for (let i = 0; i < 90; i++) dots4.push(new Dot4());

function linkDots4() {
  for (let i = 0; i < dots4.length; i++) {
    for (let j = i + 1; j < dots4.length; j++) {
      let dx = dots4[i].x - dots4[j].x,
          dy = dots4[i].y - dots4[j].y,
          dist = Math.hypot(dx, dy);

      if (dist < 120) {
        ctx4.beginPath();
        ctx4.moveTo(dots4[i].x, dots4[i].y);
        ctx4.lineTo(dots4[j].x, dots4[j].y);
        ctx4.strokeStyle = `rgba(200,240,255,${1 - dist / 120})`;
        ctx4.lineWidth = 0.6;
        ctx4.stroke();
      }
    }
  }
}

function animate4() {
  ctx4.clearRect(0, 0, canvas4.width, canvas4.height);
  dots4.forEach(d => { d.update(); d.draw(); });
  linkDots4();
  requestAnimationFrame(animate4);
}
animate4();