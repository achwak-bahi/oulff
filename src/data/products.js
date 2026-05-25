export const WHATSAPP = '213668545371';

export const buildWA = (msg) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export const products = [
  {
    id: 1,
    nameKey: 'p1_name',
    descKey: 'p1_desc',
    price: 180,
    badge: 'popular',
    img: '/images/tartelettes.jpg'
  },
  {
    id: 2,
    nameKey: 'p2_name',
    descKey: 'p2_desc',
    price: 80,
    badge: 'new',
    img: '/images/Cupcake.png'
  },
  {
    id: 3,
    nameKey: 'p3_name',
    descKey: 'p3_desc',
    price: 90,
    badge: null,
    img: '/images/Brownies.png'
  },
];
