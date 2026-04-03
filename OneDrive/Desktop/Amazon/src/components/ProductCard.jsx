import './productCard.css'
import { Rating } from './Rating.jsx'

function formatMoney(amount) {
  return new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}

export function ProductCard({ product, onAddToCart }) {
  const price = formatMoney(product.price)

  return (
    <article className="card">
      <div className="card__imgWrap">
        <img className="card__img" src={product.imageUrl} alt={product.title} />
        {product.isPrime ? <span className="badge">Prime</span> : null}
      </div>

      <div className="card__body">
        <p className="card__brand">{product.brand}</p>
        <h3 className="card__title" title={product.title}>
          {product.title}
        </h3>

        <div className="card__rating">
          <Rating value={product.rating} />
          <span className="card__ratingCount">({product.ratingCount.toLocaleString()})</span>
        </div>

        <p className="card__price">{price}</p>
        <p className="card__meta">{product.category}</p>

        <button className="card__btn" type="button" onClick={onAddToCart}>
          Add to Cart
        </button>
      </div>
    </article>
  )
}

