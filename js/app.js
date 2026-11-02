const tabsEl = document.getElementById("tabs");
const menuEl = document.getElementById("menu");
const modal = document.getElementById("modal");

const formatPrice = (n) => "RD$ " + n.toLocaleString("es-DO");
const imgPath = (section, item) => `images/web/${section.folder}/${item.image}.webp`;

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function renderCard(section, item) {
  const card = el("button", "card");
  card.type = "button";

  const media = el("div", `card__media card__media--${section.fit}`);
  const img = el("img");
  img.src = imgPath(section, item);
  img.alt = item.name;
  img.loading = "lazy";
  media.append(img);

  const body = el("div", "card__body");
  body.append(el("h3", "card__name", item.name), el("p", "card__desc", item.description));

  card.append(media, body, el("span", "price", formatPrice(item.price)));
  card.addEventListener("click", () => openModal(section, item));
  return card;
}

function renderSections() {
  MENU.forEach((section) => {
    const tab = el("button", "tab", section.title);
    tab.type = "button";
    tab.dataset.target = section.id;
    tab.addEventListener("click", () => showSection(section.id));
    tabsEl.append(tab);

    const sec = el("section", "section");
    sec.id = "sec-" + section.id;
    sec.dataset.id = section.id;
    sec.hidden = true;
    sec.append(el("h2", "section__title", section.title));
    const grid = el("div", "grid");
    section.items.forEach((item) => grid.append(renderCard(section, item)));
    sec.append(grid);
    menuEl.append(sec);
  });
}

function showSection(id, updateHash = true) {
  if (!MENU.some((s) => s.id === id)) id = MENU[0].id;
  document.querySelectorAll(".section").forEach((s) => (s.hidden = s.dataset.id !== id));
  document.querySelectorAll(".tab").forEach((t) => {
    const active = t.dataset.target === id;
    t.classList.toggle("is-active", active);
    t.setAttribute("aria-current", active ? "true" : "false");
  });
  if (updateHash) history.replaceState(null, "", "#" + id);
  const top = document.querySelector(".hero").offsetHeight;
  if (window.scrollY > top) window.scrollTo({ top, behavior: "smooth" });
}

function openModal(section, item) {
  const img = document.getElementById("modal-img");
  img.src = imgPath(section, item);
  img.alt = item.name;
  img.className = `modal__img modal__img--${section.fit}`;
  document.getElementById("modal-name").textContent = item.name;
  document.getElementById("modal-desc").textContent = item.description;
  document.getElementById("modal-price").textContent = formatPrice(item.price);
  modal.showModal();
}

// Cerrar al tocar fuera del recuadro
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.close();
});

renderSections();
showSection(location.hash.slice(1), false);
window.addEventListener("hashchange", () => showSection(location.hash.slice(1), false));
