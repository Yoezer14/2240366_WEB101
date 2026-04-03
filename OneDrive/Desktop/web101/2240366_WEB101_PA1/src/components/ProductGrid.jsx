import './productGrid.css'
import { ProductCard } from './ProductCard.jsx'

export function ProductGrid({ products, onAddToCart }) {
  if (products.length === 0) {
    return (
      <div className="empty">
        <h3 className="empty__title">No results</h3>
        <p className="empty__subtitle">Try a different search term.</p>
      </div>
    )
  }

  return (
    <div className="grid" role="list">
      {products.map((p) => (
        <div key={p.id} role="listitem">
          <ProductCard product={p} onAddToCart={onAddToCart} />
        </div>
      ))}
    </div>
  )
}

