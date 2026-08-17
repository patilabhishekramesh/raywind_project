import { HOME_PACKAGES, STATES, estimate, formatRupees } from "../data/subsidy.js";
import { Reveal } from "./Reveal.jsx";
import { IconArrow, IconCheck, IconWhatsApp } from "./Icons.jsx";
import { openWhatsAppMessage } from "../utils/whatsapp.js";

const HOME_STATE = STATES.find((s) => s.id === "maharashtra");

export function HomePackages() {
  const packages = HOME_PACKAGES.map((pkg) => ({
    ...pkg,
    result: estimate({ kw: pkg.kw, state: HOME_STATE, propertyType: "home", monthlyBill: 0 }),
  }));

  const enquire = (pkg) => {
    openWhatsAppMessage(
      [
        `Hello, I would like a quotation for the ${pkg.kw} kW ${pkg.name} package.`,
        "",
        `Listed price: ${formatRupees(pkg.result.grossCost)}`,
        `Subsidy: ${formatRupees(pkg.result.central)}`,
        `Price after subsidy: ${formatRupees(pkg.result.netCost)}`,
        "",
        "Please confirm availability and the next step.",
      ].join("\n")
    );
  };

  return (
    <section id="packages" className="section packages" aria-labelledby="packages-title">
      <div className="wrap">
        <Reveal className="section__head section__head--center">
          <p className="kicker">Home packages</p>
          <h2 id="packages-title">2, 3 and 5 kW systems — priced after subsidy</h2>
          <p className="lede">
            The three sizes that suit most homes in Raigad. Prices include panels, inverter,
            structure, wiring and installation.
          </p>
        </Reveal>

        <div className="card-grid card-grid--3 packages__grid">
          {packages.map((pkg, i) => (
            <Reveal className="card-cell" key={pkg.kw} delay={i * 70}>
              <article className={`pkg${pkg.popular ? " pkg--popular" : ""}`}>
                {pkg.popular && <span className="pkg__flag">Most chosen</span>}

                <header className="pkg__head">
                  <span className="pkg__size">{pkg.kw} kW</span>
                  <h3>{pkg.name}</h3>
                  <p className="pkg__for">{pkg.bestFor}</p>
                </header>

                <div className="pkg__price">
                  <span className="pkg__gross">{formatRupees(pkg.result.grossCost)}</span>
                  <strong className="pkg__net">{formatRupees(pkg.result.netCost)}</strong>
                  <span className="pkg__after">your price after subsidy</span>
                  <span className="pkg__subsidy">
                    <IconCheck size={14} />
                    {formatRupees(pkg.result.central)} government subsidy
                  </span>
                </div>

                <dl className="pkg__stats">
                  <div>
                    <dt>Generation</dt>
                    <dd>{pkg.result.monthlyUnits} units/mo</dd>
                  </div>
                  <div>
                    <dt>Bill saving</dt>
                    <dd>{formatRupees(pkg.result.monthlySavings)}/mo</dd>
                  </div>
                  <div>
                    <dt>Payback</dt>
                    <dd>{pkg.result.paybackYears.toFixed(1)} years</dd>
                  </div>
                </dl>

                <ul className="pkg__list">
                  {pkg.includes.map((line) => (
                    <li key={line}>
                      <IconCheck size={15} />
                      {line}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className={`btn ${pkg.popular ? "btn--primary" : "btn--secondary"} pkg__cta`}
                  onClick={() => enquire(pkg)}
                >
                  <IconWhatsApp />
                  Get this package
                </button>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="packages__foot" delay={120}>
          <p>
            Roof, bill or state different? Size it yourself and see the subsidy that applies to
            you.
          </p>
          <a className="btn btn--ghost btn--sm" href="#subsidy">
            Open the calculator
            <IconArrow />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
