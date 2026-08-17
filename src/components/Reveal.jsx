import { useInView } from "../hooks/useInView.js";

export function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  const [ref, visible] = useInView();

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? " is-in" : ""}${className ? ` ${className}` : ""}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
