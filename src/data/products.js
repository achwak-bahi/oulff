export const WHATSAPP = '213668545371';

export const buildWA = (msg) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export const products = [
  { id:1, nameKey:'p1_name', descKey:'p1_desc', price:350, badge:'popular',
    img:'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=500&q=80' },
  { id:2, nameKey:'p2_name', descKey:'p2_desc', price:500, badge:'new',
    img:'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=500&q=80' },
  { id:3, nameKey:'p3_name', descKey:'p3_desc', price:280, badge:null,
    img:'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=500&q=80' },
  { id:4, nameKey:'p4_name', descKey:'p4_desc', price:320, badge:'popular',
    img:'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&q=80' },
  { id:5, nameKey:'p5_name', descKey:'p5_desc', price:380, badge:'new',
    img:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80' },
  { id:6, nameKey:'p6_name', descKey:'p6_desc', price:260, badge:'limited',
    img:'https://images.unsplash.com/photo-1549312166-b03e74fd4bf7?w=500&q=80' },
];
