import { useMemo, useState } from "react";
import { PROJECTS } from "../data/content.js";
import { Reveal } from "./Reveal.jsx";
import { IconArrow } from "./Icons.jsx";
import { asset } from "../utils/asset.js";

export function Projects() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Residential", "Commercial", "Industrial", "Solar", "Wind"];
  const items = useMemo(
    () => (filter === "All" ? PROJECTS.slice(0, 3) : PROJECTS.filter((p) => p.tags.includes(filter)).slice(0, 3)),
    [filter]
  );

  return (
    <section id="projects" className="section projects">
      <div className="wrap">
        <Reveal className="section__head section__head--row">
          <div>
            <p className="kicker">Projects</p>
            <h2>Recent work</h2>
          </div>
          <a className="link-arrow" href="#contact">
            Start a project
            <IconArrow />
          </a>
        </Reveal>

        <div className="tabs tabs--soft" role="tablist" aria-label="Project categories">
          {filters.map((name) => (
            <button
              key={name}
              type="button"
              role="tab"
              aria-selected={filter === name}
              className={filter === name ? "is-active" : ""}
              onClick={() => setFilter(name)}
            >
              {name}
            </button>
          ))}
        </div>

        <div className="card-grid card-grid--3">
          {items.map((project, i) => (
            <Reveal className="card-cell" key={project.name} delay={i * 60}>
              <article className="pcard">
                <div className="pcard__img">
                  <img src={asset(project.image)} alt={project.imageAlt} width={800} height={560} loading="lazy" />
                  <span className="pcard__tag">2026</span>
                </div>
                <div className="pcard__body">
                  <h3>{project.name}</h3>
                  <p>{project.location}</p>
                  <span className="pcard__type">{project.type}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
