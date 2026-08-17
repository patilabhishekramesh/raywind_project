import { IconMail, IconPhone } from "./Icons.jsx";
import { SITE } from "../config/site.js";

export function TopBar() {
  return (
    <div className="topbar">
      <div className="wrap topbar__inner">
        <div className="topbar__left">
          <a href={`mailto:${SITE.email}`}>
            <IconMail size={15} />
            {SITE.email}
          </a>
          <a href={SITE.phoneHref}>
            <IconPhone size={15} />
            {SITE.phone}
          </a>
        </div>
        <p className="topbar__hours">{SITE.hours}</p>
      </div>
    </div>
  );
}
