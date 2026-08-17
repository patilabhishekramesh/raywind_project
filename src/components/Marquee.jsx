import { MARQUEE_ITEMS } from "../data/content.js";

export function Marquee() {
  const track = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {track.map((item, i) => (
          <span key={`${item}-${i}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}
