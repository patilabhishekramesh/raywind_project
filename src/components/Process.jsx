import { PROCESS_STEPS } from "../data/content.js";
import { Reveal } from "./Reveal.jsx";
import { WorkflowIcon } from "./Icons.jsx";

export function Process() {
  return (
    <section id="process" className="section process" aria-labelledby="process-title">
      <div className="wrap">
        <Reveal className="section__head section__head--center">
          <p className="kicker">How it works</p>
          <h2 id="process-title">A clear path from enquiry to power</h2>
          <p className="lede">
            Four structured steps — no guesswork, no surprises. We keep you informed at every stage.
          </p>
        </Reveal>

        <div className="workflow">
          <div className="workflow__line" aria-hidden="true" />
          {PROCESS_STEPS.map((step, i) => (
            <Reveal as="article" className="workflow__step" key={step.n} delay={i * 80}>
              <div className="workflow__icon">
                <WorkflowIcon name={step.icon} />
              </div>
              <span className="workflow__n">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
