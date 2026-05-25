import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getProducts } from '../api/index.js';
import { products as staticProducts } from '../data/products.js';
import './ProductsSection.css';

const PRODUCT_LABELS = {
  p1_name: { fr: 'Tartelette', ar: 'تارتليت' },
  p2_name: { fr: 'Cupcake', ar: 'كاب كيك' },
  p3_name: { fr: 'Brownies', ar: 'براونيز' },
  p1_desc: { fr: "Pâte sablée croustillante garnie d'une crème onctueuse, faite avec amour", ar: 'عجينة مقرمشة مع كريمة ناعمة، محضّرة بحب' },
  p2_desc: { fr: "Moelleux irrésistible surmonté d'un topping crémeux et décoré à la main", ar: 'إسفنجي لا يقاوم مع توبينغ كريمي ومزيّن يدوياً' },
  p3_desc: { fr: 'Intense en chocolat, fondant au cœur avec une croûte légèrement croustillante', ar: 'كثيف بالشوكولاتة، طري من الداخل مع قشرة مقرمشة' },
};

const STATIC_PRODUCTS = staticProducts.map(p => ({
  id: p.id,
  name_fr: p.nameKey,
  name_ar: p.nameKey,
  description_fr: p.descKey,
  description_ar: p.descKey,
  price: p.price,
  image_url: p.img,
  is_available: true,
  _static: true,
}));

export default function ProductsSection() {
  const { t, lang } = useLanguage();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts()
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setProducts(STATIC_PRODUCTS);
        setLoading(false);
      });
  }, []);

  const getProductName = (product) => {
    if (product._static) return PRODUCT_LABELS[product.name_fr]?.[lang] ?? product.name_fr;
    return lang === 'ar' ? product.name_ar : product.name_fr;
  };

  const getProductDesc = (product) => {
    if (product._static) return PRODUCT_LABELS[product.description_fr]?.[lang] ?? product.description_fr;
    return lang === 'ar' ? product.description_ar : product.description_fr;
  };

  const handleWhatsApp = (product) => {
    const name = getProductName(product);
    const msg = encodeURIComponent(
      `🎂 مرحبا، أريد طلب: ${name}\nالسعر: ${product.price} DA`
    );
    window.open(`https://wa.me/213668545371?text=${msg}`, '_blank');
  };

  return (
    <section className="products-section" id="products">
      <div className="products-container">
        <div className="products-header">
          <h2 className="products-title">{t('products.title')}</h2>
          <p className="products-subtitle">{t('products.subtitle')}</p>
        </div>

        {loading && (
          <div className="products-loading">
            {[1, 2, 3].map(i => (
              <div key={i} className="product-skeleton">
                <div className="skeleton skeleton-img"></div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text short"></div>
                <div className="skeleton skeleton-btn"></div>
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="products-error">
            <span>⚠️</span>
            <p>{t('products.error') || 'Impossible de charger les produits. Vérifiez que le serveur est démarré.'}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="products-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image-wrap">
                  {product.image_url ? (
                    <img
                      src={product.image_url}
                      alt={getProductName(product)}
                      loading="lazy"
                    />
                  ) : (
                    <div className="product-no-image">🎂</div>
                  )}
                  {product.is_available === false && (
                    <span className="product-badge unavailable">
                      {lang === 'ar' ? 'غير متوفر' : 'Indisponible'}
                    </span>
                  )}
                </div>

                <div className="product-info">
                  <h3 className="product-name">{getProductName(product)}</h3>
                  {(product.description_fr || product._static) && (
                    <p className="product-desc">{getProductDesc(product)}</p>
                  )}
                  <div className="product-price">
                    {product.price?.toLocaleString()} <span>DA</span>
                  </div>
                </div>

                <div className="product-actions">
                  <button
                    className="btn-whatsapp"
                    onClick={() => handleWhatsApp(product)}
                    disabled={product.is_available === false}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
