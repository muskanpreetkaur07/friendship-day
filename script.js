gsap.registerPlugin(ScrollTrigger);
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
addEventListener("load", () => setTimeout(() => $("#loader").classList.add("is-hidden"), 650));
const bar = $("#progressBar"); addEventListener("scroll", () => { let m = document.documentElement.scrollHeight - innerHeight; bar.style.width = (scrollY / m * 100) + "%" }, { passive: true });
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target) } }), { threshold: .12 });
$$(".reveal").forEach(e => io.observe(e));
const phone = $(".phone"); if (phone) { new IntersectionObserver(es => { if (es[0].isIntersecting) { phone.classList.add("active") } }, { threshold: .4 }).observe(phone) }
gsap.fromTo(".hero h1", { y: 35, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: .65, ease: "power3.out" });
gsap.fromTo(".character-stage", { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 1, ease: "back.out(1.2)" });
gsap.utils.toArray(".cloud").forEach((c, i) => gsap.to(c, { x: i % 2 ? 100 : -70, scrollTrigger: { trigger: c.parentElement, start: "top bottom", end: "bottom top", scrub: 1 } }));
const hug = $(".hug-scene"); if (hug) new IntersectionObserver(es => { if (es[0].isIntersecting) { setTimeout(() => hug.classList.add("hug"), 600) } }, { threshold: .5 }).observe(hug);
const bgMusic = $("#bgMusic");
$("#musicToggle").onclick = () => {
  if (!bgMusic) return;
  if (bgMusic.paused) {
    bgMusic.play();
    $("#musicToggle").textContent = "🔊";
  } else {
    bgMusic.pause();
    $("#musicToggle").textContent = "♫";
  }
};
$("#secretButton").onclick = () => { $("#secretMessage").classList.toggle("open"); if ($("#secretMessage").classList.contains("open")) { for (let i = 0; i < 28; i++) { let p = document.createElement("span"); p.textContent = ["♥", "✦", "✧", "🌸", "✨"][Math.floor(Math.random() * 5)]; p.style.cssText = `position:fixed;left:50%;top:65%;z-index:180;pointer-events:none;font-size:${12 + Math.random() * 20}px`; document.body.appendChild(p); gsap.to(p, { x: (Math.random() - .5) * 650, y: (Math.random() - .6) * 500, opacity: 0, duration: 1.4, ease: "power2.out", onComplete: () => p.remove() }) } } };
$$('a[href^="#"]').forEach(a => a.onclick = e => { let t = $(a.getAttribute("href")); if (t) { e.preventDefault(); t.scrollIntoView({ behavior: "smooth" }) } });
if (!matchMedia("(pointer:coarse)").matches) { addEventListener("pointermove", e => { if (Math.random() > .8) { let s = document.createElement("span"); s.textContent = "✦"; s.style.cssText = `position:fixed;left:${e.clientX}px;top:${e.clientY}px;z-index:150;pointer-events:none;color:#e97498`; document.body.appendChild(s); gsap.to(s, { y: -20, opacity: 0, duration: .6, onComplete: () => s.remove() }) } }) }
