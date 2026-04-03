import './searchbar.css'

export function SearchBar({ value, onChange }) {
  return (
    <form
      className="search"
      role="search"
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      <label className="sr-only" htmlFor="q">
        Search products
      </label>
      <span className="search__category" aria-hidden="true">
        All
      </span>
      <input
        id="q"
        className="search__input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search products, brands, categories…"
        autoComplete="off"
      />
      <button className="search__btn" type="submit" aria-label="Search">
        <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true">
          <path
            fill="currentColor"
            d="M10 2a8 8 0 1 1 5.293 14.01l4.348 4.349-1.414 1.414-4.348-4.348A8 8 0 0 1 10 2Zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z"
          />
        </svg>
      </button>
    </form>
  )
}

