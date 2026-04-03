import './footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__cols">
          <div>
            <h3 className="footer__title">About this demo</h3>
            <p className="footer__text">
              Built for a WEB101 practical using React (Vite). This is a UI recreation exercise
              with sample data.
            </p>
          </div>
          <div>
            <h3 className="footer__title">Component highlights</h3>
            <ul className="footer__list">
              <li>Reusable <code>ProductCard</code> driven by data</li>
              <li>Responsive grid for desktop/tablet/mobile</li>
              <li>Header search filters products instantly</li>
            </ul>
          </div>
          <div>
            <h3 className="footer__title">Notes</h3>
            <p className="footer__text">
              Images are placeholders. No real purchases; “Cart” is a demo counter.
            </p>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Demo Storefront</span>
          <span className="footer__sep" aria-hidden="true">
            •
          </span>
          <span>React + Vite</span>
        </div>
      </div>
    </footer>
  )
}

