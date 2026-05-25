import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
  fr: {
    nav_home:'Accueil', nav_products:'Produits', nav_about:'À propos',
    nav_contact:'Contact', nav_order:'Commander',
    hero_badge:'Pâtisserie Artisanale · Relizane',
    hero_title:'L\'art des', hero_title_accent:'douceurs', hero_title_end:'artisanales',
    hero_subtitle:'Tartelettes, cupcakes et en-cas salés préparés avec amour à Relizane. Chaque bouchée est une invitation au plaisir.',
    hero_cta_primary:'Commander via WhatsApp', hero_cta_secondary:'Découvrir nos créations',
    hero_stat1_val:'30+', hero_stat1_label:'Créations uniques',
    hero_stat2_val:'500+', hero_stat2_label:'Commandes livrées',
    hero_stat3_val:'3', hero_stat3_label:'Ans de passion',
    products_title:'Nos Créations', products_subtitle:'Tartelettes, cupcakes et en-cas salés — préparés à la main avec les meilleurs ingrédients',
    products_cta:'Commander', badge_popular:'Populaire', badge_new:'Nouveau', badge_limited:'Édition Limitée',
    p1_name:'Tartelette', p1_desc:"Pâte sablée croustillante garnie d'une crème onctueuse, faite avec amour",
    p2_name:'Cupcake', p2_desc:"Moelleux irrésistible surmonté d'un topping crémeux et décoré à la main",
    p3_name:'Brownies', p3_desc:"Intense en chocolat, fondant au cœur avec une croûte légèrement croustillante",
    p4_name:'Makrout au Miel', p4_desc:'Pâtisserie algérienne fourrée aux dattes et trempée dans le miel pur',
    p5_name:'Cake Marbré Chocolat', p5_desc:'Mini-cake marbré vanille-chocolat avec ganache onctueuse',
    p6_name:'Ghribia aux Noix', p6_desc:'Sablés orientaux fondants aux noix, recette traditionnelle de Relizane',
    about_badge:'Notre Histoire',
    about_title:'Le goût du fait maison, au cœur de chaque', about_title_accent:'création',
    about_p1:'Oulf (أُلف) — tendresse et familiarité — est née d\'une passion pour la pâtisserie artisanale. Depuis Relizane, nous préparons des tartelettes généreuses, des cupcakes élégants et des en-cas salés gourmands, alliant savoir-faire traditionnel et touches modernes.',
    about_p2:'Chaque tartelette, chaque cupcake, chaque bouchée salée est confectionné à la main avec des ingrédients soigneusement choisis — parce que vous méritez le meilleur, à chaque commande.',
    about_s1_val:'30+', about_s1_label:'Recettes artisanales',
    about_s2_val:'500+', about_s2_label:'Clients satisfaits',
    about_s3_val:'100%', about_s3_label:'Fait maison',
    delivery_title:'Livraison & Commande', delivery_subtitle:'Simple, rapide et personnalisé',
    step1_title:'Choisissez', step1_desc:'Parcourez notre catalogue et sélectionnez vos douceurs préférées',
    step2_title:'Commandez', step2_desc:'Envoyez votre commande via WhatsApp au 0668 54 53 71',
    step3_title:'Livraison', step3_desc:'Livraison depuis Relizane — Frais : 400 DA',
    delivery_cta:'Commander sur WhatsApp', delivery_fee:'400 DA', delivery_fee_label:'Frais de livraison',
    delivery_location:'Relizane, Algérie',
    footer_tagline:'Tartelettes, cupcakes & en-cas salés · Relizane', footer_location:'Relizane, Algérie',
    footer_rights:'© 2025 Oulf. Tous droits réservés.',
    wa_general:'Bonjour Oulf ! Je souhaite passer une commande.',
    wa_product:'Bonjour Oulf ! Je souhaite commander : ',
    'products.title': 'Nos Créations',
    'products.subtitle': 'Tartelettes, cupcakes et en-cas salés — préparés à la main',
    'products.error': 'Impossible de charger les produits. Vérifiez que le serveur est démarré.',
  },
  ar: {
    nav_home:'الرئيسية', nav_products:'المنتجات', nav_about:'من نحن',
    nav_contact:'اتصل بنا', nav_order:'اطلب الآن',
    hero_badge:'حلواني أُلف · غليزان',
    hero_title:'فن', hero_title_accent:'الحلويات', hero_title_end:'الأرجينية',
    hero_subtitle:'تارتليت، كابكيك ومقبلات مالحة مصنوعة بكل حب في غليزان. كل قطعة دعوة للمتعة.',
    hero_cta_primary:'اطلب عبر واتساب', hero_cta_secondary:'اكتشف إبداعاتنا',
    hero_stat1_val:'30+', hero_stat1_label:'وصفة مميزة',
    hero_stat2_val:'500+', hero_stat2_label:'طلب تم تسليمه',
    hero_stat3_val:'3', hero_stat3_label:'سنوات من الشغف',
    products_title:'إبداعاتنا', products_subtitle:'تارتليت، كابكيك ومقبلات مالحة — مصنوعة يدوياً بأجود المكونات',
    products_cta:'اطلب الآن', badge_popular:'الأكثر طلباً', badge_new:'جديد', badge_limited:'إصدار محدود',
    p1_name:'تارتليت', p1_desc:'عجينة مقرمشة مع كريمة ناعمة، محضّرة بحب',
    p2_name:'كاب كيك', p2_desc:'إسفنجي لا يقاوم مع توبينغ كريمي ومزيّن يدوياً',
    p3_name:'براونيز', p3_desc:'كثيف بالشوكولاتة، طري من الداخل مع قشرة مقرمشة',
    p4_name:'مقروط بالعسل', p4_desc:'حلوى جزائرية تقليدية محشوة بالتمر ومنقوعة في العسل الطبيعي',
    p5_name:'كيك رخامي شوكولاتة', p5_desc:'ميني كيك رخامي فانيليا-شوكولاتة مع غاناش كريمي',
    p6_name:'غريبية بالجوز', p6_desc:'بسكويت شرقي بالجوز، وصفة تقليدية من غليزان',
    about_badge:'قصتنا',
    about_title:'طعم البيت في قلب كل', about_title_accent:'إبداع',
    about_p1:'أُلف — كلمة تعني الحب والألفة — وُلدت من شغف حقيقي بالحلويات المصنوعة يدوياً. من غليزان، نُحضّر تارتليت شهية، كابكيك أنيق ومقبلات مالحة لذيذة، تجمع بين الأصالة والأناقة العصرية.',
    about_p2:'كل تارتليت، كل كابكيك، كل قطعة مالحة تُصنع بأيدينا باستخدام مكونات مختارة بعناية — لأنكم تستحقون الأفضل في كل طلب.',
    about_s1_val:'30+', about_s1_label:'وصفة يدوية',
    about_s2_val:'500+', about_s2_label:'زبون وفي',
    about_s3_val:'100%', about_s3_label:'تحضير منزلي',
    delivery_title:'التوصيل والطلب', delivery_subtitle:'سهل، سريع وشخصي',
    step1_title:'اختر', step1_desc:'تصفح كتالوجنا واختر ما يعجبك',
    step2_title:'اطلب', step2_desc:'أرسل طلبك عبر واتساب على 0668 54 53 71',
    step3_title:'توصيل', step3_desc:'التوصيل من غليزان — رسوم التوصيل: 400 دج',
    delivery_cta:'اطلب عبر واتساب', delivery_fee:'400 دج', delivery_fee_label:'رسوم التوصيل',
    delivery_location:'غليزان، الجزائر',
    footer_tagline:'تارتليت · كابكيك · مقبلات مالحة · غليزان', footer_location:'غليزان، الجزائر',
    footer_rights:'© 2025 أُلف. جميع الحقوق محفوظة.',
    wa_general:'مرحباً أُلف ! أريد تقديم طلب.',
    wa_product:'مرحباً أُلف ! أريد الطلب: ',
    'products.title': 'إبداعاتنا',
    'products.subtitle': 'تارتليت، كابكيك ومقبلات مالحة — مصنوعة يدوياً',
    'products.error': 'تعذّر تحميل المنتجات. تأكد من تشغيل الخادم.',
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
export const useLanguage = () => useContext(LanguageContext);
