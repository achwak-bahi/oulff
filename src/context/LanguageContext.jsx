import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
  fr: {
    nav_home:'Accueil', nav_products:'Produits', nav_about:'À propos',
    nav_contact:'Contact', nav_order:'Commander',
    hero_badge:'Pâtisserie Artisanale · Relizane',
    hero_title:'L\'art des', hero_title_accent:'douceurs', hero_title_end:'artisanales',
    hero_subtitle:'Mini-cakes, macarons et douceurs orientales faits avec amour. Chaque création est une invitation au plaisir.',
    hero_cta_primary:'Commander via WhatsApp', hero_cta_secondary:'Découvrir nos créations',
    hero_stat1_val:'30+', hero_stat1_label:'Créations uniques',
    hero_stat2_val:'500+', hero_stat2_label:'Commandes livrées',
    hero_stat3_val:'3', hero_stat3_label:'Ans de passion',
    products_title:'Nos Créations', products_subtitle:'Des douceurs artisanales préparées avec les meilleurs ingrédients',
    products_cta:'Commander', badge_popular:'Populaire', badge_new:'Nouveau', badge_limited:'Édition Limitée',
    p1_name:'Mini-Cakes Vanille Rose', p1_desc:'Moelleux à la vanille Bourbon avec glaçage rose poudré et pétales comestibles',
    p2_name:'Assortiment Macarons', p2_desc:'Sélection de macarons : framboise, pistache, caramel beurre salé',
    p3_name:'Financiers aux Amandes', p3_desc:'Financiers dorés aux amandes de qualité supérieure, fondants et parfumés',
    p4_name:'Makrout au Miel', p4_desc:'Pâtisserie algérienne fourrée aux dattes et trempée dans le miel pur',
    p5_name:'Cake Marbré Chocolat', p5_desc:'Mini-cake marbré vanille-chocolat avec ganache onctueuse',
    p6_name:'Ghribia aux Noix', p6_desc:'Sablés orientaux fondants aux noix, recette traditionnelle de Relizane',
    about_badge:'Notre Histoire',
    about_title:'La passion au cœur de chaque', about_title_accent:'création',
    about_p1:'Oulf (أُلف) — tendresse et familiarité — est née d\'une passion pour la haute pâtisserie artisanale. Basée à Relizane, nous créons des douceurs qui allient savoir-faire traditionnel et élégance moderne.',
    about_p2:'Chaque mini-cake, chaque macaron est préparé à la main avec des ingrédients soigneusement sélectionnés pour vous offrir une expérience gustative inoubliable.',
    about_s1_val:'30+', about_s1_label:'Recettes artisanales',
    about_s2_val:'500+', about_s2_label:'Clients satisfaits',
    about_s3_val:'100%', about_s3_label:'Fait maison',
    delivery_title:'Livraison & Commande', delivery_subtitle:'Simple, rapide et personnalisé',
    step1_title:'Choisissez', step1_desc:'Parcourez notre catalogue et sélectionnez vos douceurs préférées',
    step2_title:'Commandez', step2_desc:'Envoyez votre commande via WhatsApp au 0668 54 53 71',
    step3_title:'Livraison', step3_desc:'Livraison depuis Relizane — Frais : 400 DA',
    delivery_cta:'Commander sur WhatsApp', delivery_fee:'400 DA', delivery_fee_label:'Frais de livraison',
    delivery_location:'Relizane, Algérie',
    footer_tagline:'L\'art des douceurs artisanales', footer_location:'Relizane, Algérie',
    footer_rights:'© 2025 Oulf. Tous droits réservés.',
    wa_general:'Bonjour Oulf ! Je souhaite passer une commande.',
    wa_product:'Bonjour Oulf ! Je souhaite commander : ',
  },
  ar: {
    nav_home:'الرئيسية', nav_products:'المنتجات', nav_about:'من نحن',
    nav_contact:'اتصل بنا', nav_order:'اطلب الآن',
    hero_badge:'حلواني أُلف · غليزان',
    hero_title:'فن', hero_title_accent:'الحلويات', hero_title_end:'الأرجينية',
    hero_subtitle:'ميني كيك ومكرون وحلويات شرقية مصنوعة بكل حب. كل قطعة دعوة للمتعة.',
    hero_cta_primary:'اطلب عبر واتساب', hero_cta_secondary:'اكتشف إبداعاتنا',
    hero_stat1_val:'30+', hero_stat1_label:'وصفة مميزة',
    hero_stat2_val:'500+', hero_stat2_label:'طلب تم تسليمه',
    hero_stat3_val:'3', hero_stat3_label:'سنوات من الشغف',
    products_title:'إبداعاتنا', products_subtitle:'حلويات مصنوعة يدوياً بأجود المكونات',
    products_cta:'اطلب الآن', badge_popular:'الأكثر طلباً', badge_new:'جديد', badge_limited:'إصدار محدود',
    p1_name:'ميني كيك فانيليا وردي', p1_desc:'كيك فانيليا بوربون ناعم مع غلاف وردي وبتلات صالحة للأكل',
    p2_name:'تشكيلة المكرون', p2_desc:'مجموعة مختارة: توت أحمر، فستق، كراميل مملح',
    p3_name:'فينانسيي باللوز', p3_desc:'فينانسيي ذهبي باللوز عالي الجودة، طري وعطري',
    p4_name:'مقروط بالعسل', p4_desc:'حلوى جزائرية تقليدية محشوة بالتمر ومنقوعة في العسل الطبيعي',
    p5_name:'كيك رخامي شوكولاتة', p5_desc:'ميني كيك رخامي فانيليا-شوكولاتة مع غاناش كريمي',
    p6_name:'غريبية بالجوز', p6_desc:'بسكويت شرقي بالجوز، وصفة تقليدية من غليزان',
    about_badge:'قصتنا',
    about_title:'الشغف في قلب كل', about_title_accent:'إبداع',
    about_p1:'أُلف — كلمة عربية تعني المحبة والألفة — وُلدت من شغف بالحلويات الراقية. نحن في غليزان نصنع حلويات تجمع بين الموروث التقليدي والأناقة العصرية.',
    about_p2:'كل ميني كيك، كل مكرون، كل حلوى شرقية تُصنع يدوياً بمكونات مختارة بعناية لتقديم تجربة لا تُنسى.',
    about_s1_val:'30+', about_s1_label:'وصفة يدوية',
    about_s2_val:'500+', about_s2_label:'زبون وفي',
    about_s3_val:'100%', about_s3_label:'تحضير منزلي',
    delivery_title:'التوصيل والطلب', delivery_subtitle:'سهل، سريع وشخصي',
    step1_title:'اختر', step1_desc:'تصفح كتالوجنا واختر حلوياتك المفضلة',
    step2_title:'اطلب', step2_desc:'أرسل طلبك عبر واتساب على 0668 54 53 71',
    step3_title:'توصيل', step3_desc:'التوصيل من غليزان — رسوم التوصيل: 400 دج',
    delivery_cta:'اطلب عبر واتساب', delivery_fee:'400 دج', delivery_fee_label:'رسوم التوصيل',
    delivery_location:'غليزان، الجزائر',
    footer_tagline:'فن الحلويات الأرجينية', footer_location:'غليزان، الجزائر',
    footer_rights:'© 2025 أُلف. جميع الحقوق محفوظة.',
    wa_general:'مرحباً أُلف ! أريد تقديم طلب.',
    wa_product:'مرحباً أُلف ! أريد الطلب: ',
  }
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('fr');
  const t = (key) => translations[lang][key] ?? translations['fr'][key] ?? key;
  const toggleLang = () => setLang(p => p === 'fr' ? 'ar' : 'fr');
  const isRTL = lang === 'ar';
  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang, isRTL }}>
      <div dir={isRTL ? 'rtl' : 'ltr'} lang={lang}>{children}</div>
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
