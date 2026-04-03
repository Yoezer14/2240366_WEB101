import './App.css'
import { useMemo, useState } from 'react'
import { Header } from './components/Header.jsx'
import { ProductGrid } from './components/ProductGrid.jsx'
import { products as initialProducts } from './data/products.js'
import { Footer } from './components/Footer.jsx'

function App() {
  const [query, setQuery] = useState('')
  const [cartCount, setCartCount] = useState(0)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return initialProducts
    return initialProducts.filter((p) => {
      return (
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q)
      )
    })
  }, [query])

  return (
    <div className="app">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Header
        query={query}
        onQueryChange={setQuery}
        cartCount={cartCount}
      />

      <main id="main" className="main">
        <section className="hero">
          <div className="container hero__inner">
            <div className="hero__copy">
              <p className="hero__eyebrow">Desktop / Tablet / Mobile responsive</p>
              <h1 className="hero__title">Amazon-style Storefront (React)</h1>
              <p className="hero__subtitle">
                Search products, browse categories, and add items to a demo cart.
              </p>
            </div>
            <div className="hero__badge" aria-hidden="true">
              <div className="hero__badgeTop">DEMO</div>
              <div className="hero__badgeBottom">WEB101</div>
            </div>
          </div>
        </section>

        <section className="container section">
          <div className="section__header">
            <h2 className="section__title">Featured products</h2>
            <p className="section__meta">
              Showing <strong>{filtered.length}</strong> of{' '}
              <strong>{initialProducts.length}</strong>
            </p>
          </div>

          <ProductGrid
            products={filtered}
            onAddToCart={() => setCartCount((c) => c + 1)}
          />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
