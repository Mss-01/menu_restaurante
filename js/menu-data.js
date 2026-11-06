// Datos del menú. GENERADO desde menu.xlsx — edita el Excel, no este archivo.
// "image" es el nombre del archivo (sin extensión) dentro de images/web/<carpeta>/.
const MENU = [
  {
    id: "entradas",
    title: "Entradas",
    folder: "Entradas",
    fit: "cover",
    items: [
      { name: "Tequeños", image: "tequenos", price: 300, promo: 250, description: "Abre tu apetito con 4 irresistibles palitos de queso blanco envueltos en una masa suave y fritos hasta alcanzar un dorado perfecto y súper crujiente. Servidos calientitos y acompañados de nuestra salsa  rosada de la casa. ¡Ideales para compartir!" },
      { name: "Copa de Aceitunas Marinadas", image: "copa_aceitunas", price: 200, description: "Una selección clásica y elegante de aceitunas, delicadamente aliñadas con hierbas aromáticas y un toque de aceite de oliva. Un aperitivo fresco, ligero y lleno de sabor para ir abriendo el paladar." },
      { name: "Copa de Maní Tostado", image: "copa_manies", price: 200, description: "El acompañante infalible. Delicioso maní tostado y ligeramente saladito servido en copa. El bocado crujiente perfecto para disfrutar y picar mientras esperas tu plato principal o acompañas tu bebida favorita." },
      { name: "Bocaditos de Chicharrón de Jabalí", image: "chicharron_jabali", price: 150, description: "Una tentadora porción individual de nuestro jugoso chicharrón de monte. Trozos carnosos de jabalí fritos hasta lograr una piel irresistiblemente crujiente, acompañados de yuquita y una rodaja de limón fresco. ¡Puro sabor rústico en cada bocado!" }
    ]
  },
  {
    id: "platos",
    title: "Platos",
    folder: "Platos",
    fit: "cover",
    items: [
      { name: "Mofongo Tradicional", image: "mofongo_clasico", price: 450, promo: 350, description: "Nuestro delicioso mofongo de plátano verde, frito y majado al momento con ajo y crujiente chicharrón de cerdo. Suave, jugoso y lleno de sabor criollo, acompañado de su wasakaka para disfrutar hasta el último bocado." },
      { name: "Mofongo de Pollo a la Crema", image: "mofongo_pollo_crema", price: 500, promo: 400, description: "Nuestro mofongo de plátano verde, frito y majado al momento, acompañado de tiernos trozos de pollo bañados en una deliciosa salsa cremosa, suave y llena de sabor. Una combinación irresistible que une lo mejor de nuestra cocina criolla con un toque de cremosidad.\n\n¡Una experiencia para los amantes del buen comer!" },
      { name: "Mofongo Mixto", image: "mofongo_mixto", price: 670, promo: 550, description: "¡Para los que no se conforman con una sola carne! Nuestro delicioso mofongo de plátano verde, frito y majado al momento, acompañado de una irresistible combinación de longaniza, cerdo y chorizo. Tres sabores intensos que se unen para crear una experiencia cargada de sabor, textura y tradición.\n\n¡Un mofongo para los verdaderos amantes de la carne!" },
      { name: "Mofongo Doña Niña", image: "mofongo_dona_nina", price: 700, promo: 650, description: "¡El sabor de la casa en su máxima expresión!\n\nNuestro delicioso mofongo de plátano verde, frito y majado al momento, coronado con una irresistible combinación de pollo a la crema, jugosas carnitas de cerdo, chorizo y longaniza. Una explosión de sabores criollos, donde la suavidad de nuestra salsa cremosa se une al intenso sabor de las carnes para crear una experiencia única." },
      { name: "Alifongo", image: "alifongo", price: 800, promo: 700, description: "Nuestro clásico mofongo casero servido junto a deliciosas y tiernas alitas de pollo. Dale tu toque personal eligiendo la salsa perfecta para tus alitas: BBQ, Tamarindo, Mango o Honey Mustard." },
      { name: "Alitas a la BBQ", image: "alitas_bbq", price: 550, promo: 500, description: "6 de nuestras irresistibles alitas de pollo, acompañadas a tu elección de papas fritas doraditas o tostones crujientes. Dales tu toque especial eligiendo tu salsa favorita: BBQ, Tamarindo, Mango o Honey Mustard." },
      { name: "Pechuga a la plancha", image: "pechuga_plancha", price: 450, promo: 400, description: "Nuestra clásica pechuga de pollo a la plancha, suave y bien sazonada. Acompañada a tu elección de papas fritas o tostones recién hechos, y servida junto a nuestra deliciosa salsa especial de la casa. La opción perfecta para comer rico y balanceado." },
      { name: "Pollo crocante", image: "pollo_crocante", price: 300, promo: 250, description: "Piezas de pollo empanizadas y doradas, crujientes por fuera y jugosas por dentro, acompañado con papas o tostones con la salsa especial de la casa. Puedes pedir un chin mas: 3 X 250$, 4 X 350$, 6 X 550$" },
      { name: "Hamburguesa de res", image: "hamburguesa_res", price: 400, promo: 350, description: "Carne de res a la parrilla con vegetales frescos y queso, en pan artesanal. Acompañada de papas fritas." },
      { name: "Hamburguesa de pollo", image: "hamburguesa_pollo", price: 400, promo: 350, description: "Pechuga de pollo crujiente con lechuga, tomate y salsa de la casa. Acompañada de papas fritas." },
      { name: "Hamburguesa Onion Bacon", image: "hamburguesa_onion_bacon", price: 500, promo: 450, description: "Una explosión de texturas en cada bocado. Jugosa carne de res a la parrilla coronada con abundante tocino ahumado súper crujiente y queso cheddar fundido. Todo servido en un suave pan artesanal tostado con el toque especial de nuestra salsa de la casa. Acompañada de papas fritas." },
      { name: "Hamburguesa Doña Niña", image: "hamburguesa_dona_nina", price: 600, promo: 550, description: "Para los que no quieren elegir y lo quieren todo. Nuestro gran especial combina lo mejor de ambos mundos: sabroso pollo crocante y jugosa res a la parrilla, abrazadas por queso derretido, cebolla caramelizada y pan artesanal. Una experiencia única con nuestro toque especial. Acompañada de papas fritas." }
    ]
  },
  {
    id: "bebidas",
    title: "Bebidas",
    folder: "Bebidas",
    fit: "cover",
    items: [
      { name: "Refresco Coca-Cola", image: "coca_cola", price: 80, description: "El clásico inconfundible. Disfruta de una Coca-Cola bien fría y burbujeante, el acompañante perfecto para realzar el sabor de cualquiera de nuestros platos. ¡Refrescante hasta el último sorbo!" },
      { name: "Jugo Mott's (Manzana)", image: "jugo_mott", price: 190, promo: 170, description: "El clásico jugo 100% de manzana que a todos les encanta. Naturalmente dulce, suave y refrescante; la opción ideal para los más pequeños o para disfrutar de un sabor frutal en cualquier momento." },
      { name: "Red Bull", image: "redbull", price: 200, promo: 175, description: "La bebida energizante por excelencia. Servida bien fría para recargar tus energías y darle un impulso extra a tu tarde o noche." },
      { name: "Sprite", image: "sprite", price: 80, description: "Burbujeante, ligera y con ese toque inconfundible a lima-limón. La opción cítrica perfecta para refrescar tu paladar y acompañar cualquier comida." },
      { name: "Jugos Naturales Frescos", image: "jugos_naturales", price: 200, promo: 150, description: "Hechos al instante con lo mejor de nuestra fruta para refrescar tu día. Disponibles en: Piña, Limón, Tamarindo y la deliciosa combinación Piña-Limón." },
      { name: "Agua Perrier", image: "agua_perrier", price: 150, promo: 135, description: "Refrescante agua mineral con gas, de burbuja fina y elegante. La opción perfecta y ligera para limpiar el paladar." },
      { name: "Agua natural", image: "agua_regular", price: 50, description: "Agua pura y cristalina, servida bien fría. La opción clásica y ligera para mantenerte hidratado." },
      { name: "Cerveza Presidente (Normal / Light)", image: "presidente_light_normal", price: 200, promo: 170, description: "La verdadera cerveza dominicana, servida en su punto exacto de frío. Elige entre su inconfundible sabor clásico o su versión más ligera para disfrutar el momento." },
      { name: "Cerveza Modelo Rubia", image: "cerveza_modelo", price: 250, promo: 220, description: "Auténtica cerveza mexicana tipo Pilsner. De cuerpo balanceado, sabor completo y un final limpio y refrescante. Una elección premium, ideal para disfrutar bien fría." },
      { name: "Cerveza Corona", image: "cerveza_corona", price: 250, promo: 220, description: "Refrescante, ligera y de sabor inconfundible. La opción ideal para relajarte, siempre acompañada de su clásico toque de limón." },
      { name: "Stella Artois", image: "stella_artois", price: 250, promo: 235, description: "Clásica cerveza belga de prestigio mundial. Destaca por su sabor perfectamente equilibrado, un final crujiente y suaves notas florales. Elegancia y frescura en cada sorbo." }
    ]
  },
  {
    id: "postres",
    title: "Postres",
    folder: "Postres",
    fit: "cover",
    items: [
      { name: "Flan", image: "flan", price: 180, promo: 150, description: "Flan casero cubierto con caramelo." }
    ]
  }
];
