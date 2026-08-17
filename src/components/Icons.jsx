const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function IconSun({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4" {...stroke} />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" {...stroke} />
    </svg>
  );
}

export function IconWhatsApp({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488" />
    </svg>
  );
}

export function IconPhone({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6.5 3.75h2.2l1.2 3.1-1.7 1.2a12.2 12.2 0 0 0 6.55 6.55l1.2-1.7 3.1 1.2v2.2c0 .7-.55 1.3-1.25 1.4A16.3 16.3 0 0 1 5.1 6.99c.1-.7.7-1.24 1.4-1.24Z"
        {...stroke}
      />
    </svg>
  );
}

export function IconMail({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" {...stroke} />
      <path d="m3 7 9 6 9-6" {...stroke} />
    </svg>
  );
}

export function IconPin({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" {...stroke} />
      <circle cx="12" cy="11" r="2.5" {...stroke} />
    </svg>
  );
}

export function IconClock({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" {...stroke} />
      <path d="M12 7v5l3 2" {...stroke} />
    </svg>
  );
}

export function IconMenu({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" {...stroke} />
    </svg>
  );
}

export function IconClose({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="m6 6 12 12M18 6 6 18" {...stroke} />
    </svg>
  );
}

export function IconArrow({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" {...stroke} />
    </svg>
  );
}

export function IconStar({ size = 14, filled = true }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="m12 3.5 2.4 4.9 5.4.8-3.9 3.8.9 5.3L12 16.2l-4.8 2.5.9-5.3L4.2 9.2l5.4-.8L12 3.5Z"
        fill={filled ? "currentColor" : "none"}
        {...stroke}
      />
    </svg>
  );
}

export function IconHome({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" {...stroke} />
    </svg>
  );
}

export function IconBuilding({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 21V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v16M14 9h6v12M8 9h.01M8 13h.01M8 17h.01" {...stroke} />
    </svg>
  );
}

export function IconTool({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.7 6.3a4 4 0 0 0-5.66 5.66L3 18l3 3 6.04-6.04a4 4 0 0 0 5.66-5.66l-2.12 2.12-3.54-3.54 2.12-2.12Z" {...stroke} />
    </svg>
  );
}

export function IconWind({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 8h10a3 3 0 1 0-3-3M4 16h12a3 3 0 1 1 3 3M4 12h16" {...stroke} />
    </svg>
  );
}

export function IconMessage({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 12a8 8 0 0 1-8 8H7l-4 3V12a8 8 0 0 1 8-8h4a8 8 0 0 1 8 8Z" {...stroke} />
    </svg>
  );
}

export function IconSearch({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="7" {...stroke} />
      <path d="m20 20-3.5-3.5" {...stroke} />
    </svg>
  );
}

export function IconSettings({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" {...stroke} />
      <path
        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.604.852.997 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"
        {...stroke}
      />
    </svg>
  );
}

export function IconShield({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 4 6v6c0 5 3.4 9.4 8 10 4.6-.6 8-5 8-10V6l-8-3Z" {...stroke} />
    </svg>
  );
}

export function IconCheck({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12 5 5L20 7" {...stroke} />
    </svg>
  );
}

export function IconPlus({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 5v14M5 12h14" {...stroke} />
    </svg>
  );
}

export function IconMinus({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14" {...stroke} />
    </svg>
  );
}

const FEATURED_ICON_MAP = {
  home: IconHome,
  building: IconBuilding,
  tool: IconTool,
  wind: IconWind,
};

const WORKFLOW_ICON_MAP = {
  message: IconMessage,
  search: IconSearch,
  settings: IconSettings,
  shield: IconShield,
};

export function FeaturedIcon({ name, size = 22 }) {
  const Icon = FEATURED_ICON_MAP[name] ?? IconSun;
  return <Icon size={size} />;
}

export function WorkflowIcon({ name, size = 22 }) {
  const Icon = WORKFLOW_ICON_MAP[name] ?? IconCheck;
  return <Icon size={size} />;
}
