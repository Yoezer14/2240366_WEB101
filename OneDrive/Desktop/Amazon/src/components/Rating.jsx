import './rating.css'

function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n))
}

export function Rating({ value }) {
  const v = clamp(value ?? 0, 0, 5)
  const percent = (v / 5) * 100

  return (
    <span className="rating" aria-label={`Rating ${v.toFixed(1)} out of 5`}>
      <span className="rating__stars rating__stars--base" aria-hidden="true">
        ★★★★★
      </span>
      <span
        className="rating__stars rating__stars--fill"
        aria-hidden="true"
        style={{ width: `${percent}%` }}
      >
        ★★★★★
      </span>
    </span>
  )
}

