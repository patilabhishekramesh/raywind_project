import { useMemo, useState } from "react";
import {
  NATIONAL_PORTAL,
  PROPERTY_TYPES,
  STATES,
  SYSTEM_PRESETS,
  estimate,
  formatRupees,
  sizeForBill,
} from "../data/subsidy.js";
import { Reveal } from "./Reveal.jsx";
import { openWhatsAppMessage } from "../utils/whatsapp.js";
import { IconArrow, IconCheck, IconWhatsApp } from "./Icons.jsx";

const DEFAULT_STATE = STATES.find((s) => s.id === "maharashtra");

export function SubsidyCalculator() {
  const [stateId, setStateId] = useState(DEFAULT_STATE.id);
  const [propertyType, setPropertyType] = useState("home");
  const [monthlyBill, setMonthlyBill] = useState(3000);
  const [manualKw, setManualKw] = useState(null);

  const state = STATES.find((s) => s.id === stateId) ?? DEFAULT_STATE;
  const suggestedKw = useMemo(() => sizeForBill(monthlyBill, state), [monthlyBill, state]);
  const kw = manualKw ?? suggestedKw;

  const result = useMemo(
    () => estimate({ kw, state, propertyType, monthlyBill }),
    [kw, state, propertyType, monthlyBill]
  );

  const property = PROPERTY_TYPES.find((p) => p.id === propertyType);
  const subsidyShare = result.grossCost ? (result.totalSubsidy / result.grossCost) * 100 : 0;

  const sendEnquiry = () => {
    const lines = [
      "Hello, I used the subsidy calculator on your website and would like an exact quotation.",
      "",
      `State: ${state.name}`,
      `Property: ${property.label}`,
      `Monthly bill: ${formatRupees(monthlyBill)}`,
      `System size: ${kw} kW`,
      `Estimated cost: ${formatRupees(result.grossCost)}`,
      `Estimated subsidy: ${formatRupees(result.totalSubsidy)}`,
      `Estimated net cost: ${formatRupees(result.netCost)}`,
    ];
    openWhatsAppMessage(lines.join("\n"));
  };

  return (
    <section id="subsidy" className="section section--soft calc" aria-labelledby="calc-title">
      <div className="wrap">
        <Reveal className="section__head section__head--center">
          <p className="kicker">Government subsidy</p>
          <h2 id="calc-title">Check your rooftop solar subsidy</h2>
          <p className="lede">
            Under PM Surya Ghar: Muft Bijli Yojana, homes get up to {formatRupees(78000)} of
            central assistance. Pick your state and bill to see what a system would cost you after
            subsidy.
          </p>
        </Reveal>

        <div className="calc__grid">
          <Reveal className="calc__panel">
            <div className="calc__field">
              <label className="calc__label" htmlFor="calc-state">
                Your state
              </label>
              <select
                id="calc-state"
                className="calc__select"
                value={stateId}
                onChange={(e) => setStateId(e.target.value)}
              >
                {STATES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="calc__field">
              <span className="calc__label">Property type</span>
              <div className="segmented" role="group" aria-label="Property type">
                {PROPERTY_TYPES.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    className={propertyType === type.id ? "is-active" : ""}
                    aria-pressed={propertyType === type.id}
                    onClick={() => setPropertyType(type.id)}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
              <p className="calc__hint">{property.note}</p>
            </div>

            <div className="calc__field">
              <label className="calc__label" htmlFor="calc-bill">
                Average monthly electricity bill
                <strong className="calc__value">{formatRupees(monthlyBill)}</strong>
              </label>
              <input
                id="calc-bill"
                className="calc__range"
                type="range"
                min={500}
                max={25000}
                step={500}
                value={monthlyBill}
                onChange={(e) => {
                  setMonthlyBill(Number(e.target.value));
                  setManualKw(null);
                }}
              />
              <div className="calc__scale" aria-hidden="true">
                <span>{formatRupees(500)}</span>
                <span>{formatRupees(25000)}</span>
              </div>
            </div>

            <div className="calc__field">
              <span className="calc__label">
                System size
                <strong className="calc__value">{kw} kW</strong>
              </span>
              <div className="chips" role="group" aria-label="System size">
                {SYSTEM_PRESETS.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    className={kw === preset ? "is-active" : ""}
                    aria-pressed={kw === preset}
                    onClick={() => setManualKw(preset)}
                  >
                    {preset} kW
                  </button>
                ))}
                <button
                  type="button"
                  className={manualKw === null ? "is-active" : ""}
                  aria-pressed={manualKw === null}
                  onClick={() => setManualKw(null)}
                >
                  Suggest for me
                </button>
              </div>
              <p className="calc__hint">
                Around {result.monthlyUnits} units a month at {state.sunHours} sun hours a day in{" "}
                {state.name}.
              </p>
            </div>
          </Reveal>

          <Reveal className="calc__results" delay={80}>
            <div className="calc__headline">
              <span className="calc__headline-label">Your cost after subsidy</span>
              <strong className="calc__headline-value">{formatRupees(result.netCost)}</strong>
              <span className="calc__headline-note">
                {formatRupees(result.grossCost)} system cost minus{" "}
                {formatRupees(result.totalSubsidy)} subsidy
              </span>

              <div className="calc__bar" aria-hidden="true">
                <span style={{ width: `${subsidyShare}%` }} />
              </div>
              <span className="calc__bar-note">
                {Math.round(subsidyShare)}% of the cost covered by government support
              </span>
            </div>

            <div className="calc__metrics">
              <div className="metric">
                <span className="metric__label">Central subsidy</span>
                <strong className="metric__value">{formatRupees(result.central)}</strong>
              </div>
              <div className="metric">
                <span className="metric__label">State top-up</span>
                <strong className="metric__value">{formatRupees(result.stateTopUp)}</strong>
              </div>
              <div className="metric">
                <span className="metric__label">Monthly saving</span>
                <strong className="metric__value">{formatRupees(result.monthlySavings)}</strong>
              </div>
              <div className="metric">
                <span className="metric__label">Payback</span>
                <strong className="metric__value">
                  {result.paybackYears ? `${result.paybackYears.toFixed(1)} yrs` : "—"}
                </strong>
              </div>
            </div>

            {property.eligible ? (
              <p className="calc__note calc__note--ok">
                <IconCheck size={16} />
                {state.topUpNote ??
                  `${state.name} follows the central scheme, so the subsidy above is what applies.`}
              </p>
            ) : (
              <p className="calc__note">
                Business connections do not receive residential subsidy, but qualify for
                accelerated depreciation. We will work that into your proposal.
              </p>
            )}

            <div className="calc__actions">
              <button type="button" className="btn btn--primary" onClick={sendEnquiry}>
                <IconWhatsApp />
                Get an exact quote
              </button>
              <a
                className="btn btn--secondary"
                href={NATIONAL_PORTAL}
                target="_blank"
                rel="noopener noreferrer"
              >
                National portal
                <IconArrow />
              </a>
            </div>

            <p className="calc__disclaimer">
              Indicative only. Final cost depends on your roof, structure and equipment, and the
              sanctioned subsidy is confirmed by your DISCOM through the national portal.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
