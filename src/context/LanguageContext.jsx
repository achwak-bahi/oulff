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
    hero_stats_products:'Créations uniques', hero_stats_orders:'Commandes livrées', hero_stats_years:'Ans de passion',
    products_title:'Nos Créations', products_subtitle:'Des douceurs artisanales préparées avec les meilleurs ingrédients',
    products_cta:'Commander', products_badge_new:'Nouveau', products_badge_popular:'Populaire', products_badge_limited:'Édition Limitée',
    p1_name:'Mini-Cakes Vanille Rose', p1_desc:'Moelleux à la vanille Bourbon avec glaçage rose poudré et pétales comestibles',
    p2_name:'Assortiment Macarons', p2_desc:'Sélection de macarons : framboise, pistache, caramel beurre salé',
    p3_name:'Financiers aux Amandes', p3_desc:'Financiers dorés aux amandes de qualité supérieure, fondants et parfumés',
    p4_name:'Makrout au Miel', p4_desc:'Pâtisserie algérienne fourrée aux dattes et trempée dans le miel pur',
    p5_name:'Cake Marbré Chocolat', p5_desc:'Mini-cake marbré vanille-chocolat avec ganache onctueuse',
    p6_name:'Ghribia aux Noix', p6_desc:'Sablés orientaux fondants aux noix, recette traditionnelle de Relizane',
    about_badge:'Notre Histoire',
    about_title:'La passion au cœur de chaque', about_title_accent:'création',
    about_desc1:'Oulf (أُلف) — tendresse et familiarité — est née d\'une passion pour la haute pâtisserie artisanale. Basée à Relizane, nous créons des douceurs qui allient savoir-faire traditionnel et élégance moderne.',
    about_desc2:'Chaque mini-cake, chaque macaron est préparé à la main, avec des ingrédients soigneusement sélectionnés pour vous offrir une expérience gustative inoubliable.',
    about_stat1:'Recettes Artisanales', about_stat2:'Clients Fidèles', about_stat3:'Préparation Maison',
    delivery_title:'Livraison & Commande', delivery_subtitle:'Simple, rapide et personnalisé',
    delivery_step1_title:'Choisissez vos douceurs', delivery_step1_desc:'Parcourez notre catalogue et sélectionnez vos créations préférées',
    delivery_step2_title:'Contactez-nous sur WhatsApp', delivery_step2_desc:'Envoyez votre commande via WhatsApp au 0668 54 53 71',
    delivery_step3_title:'Livraison à domicile', delivery_step3_desc:'Livraison disponible depuis Relizane. Frais : 400 DA',
    delivery_location:'Relizane, Algérie', delivery_fee:'400 DA', delivery_fee_label:'Frais de livraison',
    delivery_whatsapp:'Commander sur WhatsApp',
    footer_tagline:'L\'art des douceurs artisanales', footer_location:'Relizane, Algérie',
    footer_phone:'0668 54 53 71', footer_links_title:'Navigation', footer_social_title:'Suivez-nous',
    footer_rights:'© 2025 Oulf. Tous droits réservés.', footer_made:'Fait avec ♥ à Relizane',
    wa_message:'Bonjour Oulf ! Je souhaite commander : ',
    wa_message_general:'Bonjour Oulf ! Je souhaite passer une commande.',
  },
  ar: {
    nav_home:'الرئيسية', nav_products:'المنتجات', nav_about:'من نحن',
    nav_contact:'اتصل بنا', nav_order:'اطلب الآن',
    hero_badge:'حلواني أُلف · غليزان',
    hero_title:'فن', hero_title_accent:'الحلويات', hero_title_end:'الجزائرية',
    hero_subtitle:'ميني كيك ومكرون وحلويات شرقية مصنوعة بكل حب. كل قطعة دعوة للمتعة.',
    hero_cta_primary:'اطلب عبر واتساب', hero_cta_secondary:'اكتشف إبداعاتنا',
    hero_stats_products:'وصفة مميزة', hero_stats_orders:'طلب تم تسليمه', hero_stats_years:'سنوات من الشغف',
    products_title:'إبداعاتنا', products_subtitle:'حلويات مصنوعة يدوياً بأجود المكونات',
    products_cta:'اطلب الآن', products_badge_new:'جديد', products_badge_popular:'الأكثر طلباً', products_badge_limited:'إصدار محدود',
    p1_name:'ميني كيك فانيليا وردي', p1_desc:'كيك فانيليا بوربون ناعم مع غلاف وردي وبتلات صالحة للأكل',
    p2_name:'تشكيلة المكرون', p2_desc:'مجموعة مختارة: توت أحمر، فستق، كراميل مملح',
    p3_name:'فينانسيي باللوز', p3_desc:'فينانسيي ذهبي باللوز عالي الجودة، طري وعطري',
    p4_name:'مقروط بالعسل', p4_desc:'حلوى جزائرية تقليدية محشوة بالتمر ومنقوعة في العسل الطبيعي',
    p5_name:'كيك رخامي شوكولاتة', p5_desc:'ميني كيك رخامي فانيليا-شوكولاتة مع غاناش كريمي',
    p6_name:'غريبية بالجوز', p6_desc:'بسكويت شرقي بالجوز، وصفة تقليدية من غليزان',
    about_badge:'قصتنا',
    about_title:'الشغف في قلب كل', about_title_accent:'إبداع',
    about_desc1:'أُلف — كلمة عربية تعني المحبة والألفة — وُلدت من شغف بالحلويات الراقية. نحن في غليزان نصنع حلويات تجمع بين الموروث التقليدي والأناقة العصرية.',
    about_desc2:'كل ميني كيك، كل مكرون، كل حلوى شرقية تُصنع يدوياً بمكونات مختارة بعناية لتقديم تجربة لا تُنسى.',
    about_stat1:'وصفة يدوية', about_stat2:'زبون وفي', about_stat3:'تحضير منزلي',
    delivery_title:'التوصيل والطلب', delivery_subtitle:'سهل، سريع وشخصي',
    delivery_step1_title:'اختر حلوياتك', delivery_step1_desc:'تصفح كتالوجنا واختر إبداعاتك المفضلة',
    delivery_step2_title:'تواصل عبر واتساب', delivery_step2_desc:'أرسل طلبك مباشرة عبر واتساب على 0668 54 53 71',
    delivery_step3_title:'توصيل لباب البيت', delivery_step3_desc:'التوصيل متاح من غليزان. رسوم التوصيل: 400 دج',
    delivery_location:'غليزان، الجزائر', delivery_fee:'400 دج', delivery_fee_label:'رسوم التوصيل',
    delivery_whatsapp:'اطلب عبر واتساب',
    footer_tagline:'فن الحلويات الجزائرية', footer_location:'غليزان، الجزائر',
    footer_phone:'0668 54 53 71', footer_links_title:'التنقل', footer_social_title:'تابعونا',
    footer_rights:'© 2025 أُلف. جميع الحقوق محفوظة.', footer_made:'صُنع بـ ♥ في غليزان',
    wa_message:'مرحباً أُلف! أريد الطلب: ',
    wa_message_general:'مرحباً أُلف! أريد تقديم طلب.',
  }
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('fr');
  const t = (key) => translations[lang][key] || translations['fr'][key] || key;
  const toggleLang = () => setLang(prev => prev === 'fr' ? 'ar' : 'fr');
  const isRTL = lang === 'ar';
  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang, isRTL }}>
      <div dir={isRTL ? 'rtl' : 'ltr'} lang={lang}>{children}</div>
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
