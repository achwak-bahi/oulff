import { useLang } from '../context/LanguageContext';
import { products, buildWA } from '../data/products';
import './ProductsSection.css';

function ProductCard({ product }) {
  const { t } = useLang();
  const badgeKey = product.badge ? ('badge_' + product.badge) : null;
  return (
    <article className="product-card">
      <div className="product-card__img-wrap">
        <img
          src={product.img}
          alt={t(product.nameKey)}
          width="400" height="260"
          loading="lazy" decoding="async"
        />
        {badgeKey && (
          <span className="product-card__badge">{t(badgeKey)}</span>
        )}
      </div>
      <div className="product-card__body">
        <h3 className="product-card__name">{t(product.nameKey)}</h3>
        <p className="product-card__desc">{t(product.descKey)}</p>
        <div className="product-card__footer">
          <span className="product-card__price">
            {product.price} <span>DA</span>
          </span>
        </div>
      </div>
    </article>
  );
}

export default function ProductsSection() {
  const { t } = useLang();
  return (
    <section id="products" className="products-section">
      <div className="products-section__container">
        <div className="products-section__header">
          <span className="section-label">{t('products_title')}</span>
          <p className="products-section__subtitle">{t('products_subtitle')}</p>
        </div>
        <div className="products-section__grid">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
