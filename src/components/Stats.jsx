import { STATS } from "../data/content.js";
import { useCountUp } from "../hooks/useCountUp.js";
import { useInView } from "../hooks/useInView.js";

function StatItem({ item, active }) {
  const counted = useCountUp(typeof item.value === "number" ? item.value : 0, active);
  const display = item.numeric === false ? item.value : `${counted}${item.suffix}`;

  return (
    <div className="stat">
      <p className="stat__value">{display}</p>
      <p className="stat__label">{item.label}</p>
    </div>
  );
}

export function Stats() {
  const [ref, visible] = useInView();

  return (
    <section className="stats" aria-label="Company highlights" ref={ref}>
      <div className="wrap stats__row">
        {STATS.map((item) => (
          <StatItem key={item.label} item={item} active={visible} />
        ))}
      </div>
    </section>
  );
}
