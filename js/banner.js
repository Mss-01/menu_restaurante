// Animaciones del banner Rooftop: estrellas que titilan.
// (Las luces y la silueta de la ciudad son solo CSS.)
(function () {
  // Estrellas (con movimiento reducido quedan quietas: lo controla el CSS)
  const box = document.getElementById("stars");
  if (box) {
    const colors = ["#FFFFFF", "#FFF3C4", "#F7D77A", "#FFFFFF"];
    const count = window.innerWidth < 600 ? 14 : 30;
    for (let i = 0; i < count; i++) {
      const s = document.createElement("span");
      s.className = "star";
      s.style.left = Math.random() * 100 + "%";
      s.style.top = 22 + Math.random() * 40 + "%";
      s.style.setProperty("--s", 2 + Math.random() * 3 + "px");
      s.style.setProperty("--c", colors[i % colors.length]);
      s.style.setProperty("--d", 2.5 + Math.random() * 3.5 + "s");
      s.style.setProperty("--delay", -Math.random() * 6 + "s");
      box.append(s);
    }
  }
})();
