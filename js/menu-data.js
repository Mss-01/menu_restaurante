// Datos del menú. Para añadir un plato, agrega un objeto a "items" de su sección.
// "image" es el nombre del archivo (sin extensión) dentro de images/web/<carpeta>/.
// Precios y descripciones son de ejemplo, pendientes de reemplazar.
const MENU = [
  {
    id: "platos",
    title: "Platos",
    folder: "Platos",
    fit: "cover",
    items: [
      { name: "Mofongo clásico", image: "mofongo_clasico", price: 450, description: "Plátano verde majado con ajo y chicharrón, servido con caldo de la casa." },
      { name: "Mofongo de pollo con crema", image: "mofongo_pollo_crema", price: 550, description: "Mofongo coronado con trozos de pollo salteado en suave salsa de crema." },
      { name: "Pollo tradicional", image: "pollo_tradicional", price: 420, description: "Pollo guisado criollo con sazón casera, acompañado de arroz y ensalada." },
      { name: "Pollo crispy", image: "pollo_crispy", price: 400, description: "Piezas de pollo empanizadas y doradas, crujientes por fuera y jugosas por dentro." },
      { name: "Hamburguesa de res", image: "hamburguesa_res", price: 380, description: "Carne de res a la parrilla con vegetales frescos y queso, en pan artesanal." },
      { name: "Hamburguesa de pollo", image: "hamburguesa_pollo", price: 350, description: "Pechuga de pollo crujiente con lechuga, tomate y salsa de la casa." },
      { name: "Papas fritas", image: "papas_fritas", price: 150, description: "Papas cortadas en bastones, fritas al momento y bien doradas." }
    ]
  },
  {
    id: "bebidas",
    title: "Bebidas",
    folder: "Bebidas",
    fit: "contain",
    items: [
      { name: "Coca-Cola", image: "coca_cola", price: 80, description: "Refresco bien frío." },
      { name: "Agua Perrier", image: "agua_perrier", price: 150, description: "Agua mineral con gas." },
      { name: "Cerveza Presidente pequeña", image: "cerveza_presidente_pequena", price: 130, description: "La cerveza dominicana, bien helada." },
      { name: "Cerveza Modelo", image: "cerveza_modelo", price: 170, description: "Cerveza lager mexicana, ligera y refrescante." },
      { name: "Cerveza Corona", image: "cerveza_corona", price: 170, description: "Cerveza clara servida bien fría, ideal con limón." },
      { name: "Cuba libre", image: "cuba_libre", price: 300, description: "Ron, refresco de cola y limón sobre hielo." },
      { name: "Piña colada", image: "pina_colada", price: 350, description: "Ron, crema de coco y piña, batidos con hielo." },
      { name: "Chivas a la roca", image: "chivas_a_la_roca", price: 450, description: "Whisky Chivas Regal 12 años servido con hielo." }
    ]
  },
  {
    id: "postres",
    title: "Postres",
    folder: "Postres",
    fit: "cover",
    items: [
      { name: "Flan", image: "flan", price: 180, description: "Flan casero cubierto con caramelo." },
      { name: "Tres leches", image: "tres_leches", price: 200, description: "Bizcocho húmedo bañado en tres leches con crema por encima." },
      { name: "Gelatina", image: "gelatina", price: 100, description: "Gelatina de sabores, fresca y ligera." }
    ]
  }
];
