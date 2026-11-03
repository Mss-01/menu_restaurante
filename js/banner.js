// Animaciones del banner de apertura: confeti y frases que rotan.
(function () {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Confeti
  const box = document.getElementById("confetti");
  if (box && !reduced) {
    const colors = ["#F2BE3E", "#FFFFFF", "#E8604C", "#7fc4a4", "#F7D77A"];
    const count = window.innerWidth < 600 ? 16 : 34;
    for (let i = 0; i < count; i++) {
      const p = document.createElement("span");
      p.className = "confetti";
      p.style.left = Math.random() * 100 + "%";
      p.style.setProperty("--s", 5 + Math.random() * 6 + "px");
      p.style.setProperty("--c", colors[i % colors.length]);
      p.style.setProperty("--d", 6 + Math.random() * 6 + "s");
      p.style.setProperty("--delay", -Math.random() * 10 + "s");
      p.style.setProperty("--x", (Math.random() * 60 - 30).toFixed(0) + "px");
      box.append(p);
    }
  }

  // Frases que rotan (edita esta lista a gusto)
  const text = document.getElementById("promo-text");
  const phrases = [
    "¡Buen sabor a un precio especial!",
    "Busca la insignia «Apertura» en tus platos favoritos",
    "Sabor casero, con mucho amor"
  ];
  if (text && !reduced) {
    let i = 0;
    setInterval(() => {
      text.classList.add("is-out");
      setTimeout(() => {
        i = (i + 1) % phrases.length;
        text.textContent = phrases[i];
        text.classList.remove("is-out");
      }, 450);
    }, 4500);
  }
})();
