import './header.css'
import { SearchBar } from './SearchBar.jsx'

export function Header({ query, onQueryChange, cartCount }) {
  return (
    <header className="header">
      <div className="container header__inner">
        <div className="brand" aria-label="Demo Amazon brand">
          <div className="brand__logo" aria-hidden="true">
            
          </div>
          <div className="brand__text">
            <div className="brand__name">amazon</div>
            <div className="brand__sub">demo storefront</div>
          </div>
        </div>

        <SearchBar value={query} onChange={onQueryChange} />

        <nav className="nav" aria-label="Header actions">
          <button className="nav__btn" type="button">
            <span className="nav__label">Hello, sign in</span>
            <span className="nav__value">Account</span>
          </button>

          <button className="nav__btn" type="button">
            <span className="nav__label">Returns</span>
            <span className="nav__value">& Orders</span>
          </button>

          <button className="cart" type="button" aria-label={`Cart, ${cartCount} items`}>
            <span className="cart__count" aria-hidden="true">
              {cartCount}
            </span>
            <svg
              className="cart__icon"
              viewBox="0 0 24 24"
              role="presentation"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2Zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2ZM7.17 14h9.66c.75 0 1.4-.41 1.74-1.03L21 7H6.21L5.27 5H2v2h2l3.6 7.59-1.35 2.44C5.52 18.37 6.48 20 8 20h12v-2H8l1.17-2Z"
              />
            </svg>
            <span className="cart__text">Cart</span>
          </button>
        </nav>
      </div>

      <div className="subnav">
        <div className="container subnav__inner">
          <button className="subnav__pill" type="button">
            All
          </button>
          <button className="subnav__pill" type="button">
            Today's Deals
          </button>
          <button className="subnav__pill" type="button">
            Electronics
          </button>
          <button className="subnav__pill" type="button">
            Home
          </button>
          <button className="subnav__pill" type="button">
            Fashion
          </button>
        </div>
      </div>
    </header>
  )
}

