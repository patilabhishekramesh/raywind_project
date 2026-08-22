import { useEffect, useId, useRef, useState } from "react";
import { IconCheck, IconChevronDown } from "./Icons.jsx";

export function SelectField({
  label,
  value,
  onChange,
  options,
  placeholder = "Choose an option",
  optional = false,
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const autoId = useId();
  const fieldId = `select-${autoId}`;
  const listId = `${fieldId}-list`;

  useEffect(() => {
    if (!open) return undefined;

    const close = () => setOpen(false);

    const onDocPointer = (event) => {
      if (!rootRef.current?.contains(event.target)) close();
    };

    const onKey = (event) => {
      if (event.key === "Escape") close();
    };

    document.addEventListener("mousedown", onDocPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const pick = (option) => {
    onChange(option);
    setOpen(false);
  };

  const onTriggerKey = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setOpen((prev) => !prev);
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setOpen(true);
    }
  };

  const display = value || placeholder;
  const isPlaceholder = !value;

  return (
    <div className={`field select${open ? " is-open" : ""}`} ref={rootRef}>
      <span className="field__label" id={`${fieldId}-label`}>
        {label}
        {optional ? <span className="field__optional"> optional</span> : null}
      </span>

      <button
        type="button"
        id={fieldId}
        className={`select__trigger${isPlaceholder ? " is-placeholder" : ""}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={`${fieldId}-label`}
        aria-controls={listId}
        onClick={() => setOpen((prev) => !prev)}
        onKeyDown={onTriggerKey}
      >
        <span className="select__value">{display}</span>
        <IconChevronDown size={18} className="select__chevron" />
      </button>

      {open ? (
        <ul
          id={listId}
          className="select__menu"
          role="listbox"
          aria-labelledby={`${fieldId}-label`}
          data-lenis-prevent
        >
          {options.map((option) => {
            const selected = value === option;
            return (
              <li key={option} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  className={`select__option${selected ? " is-selected" : ""}`}
                  onClick={() => pick(option)}
                >
                  <span>{option}</span>
                  {selected ? <IconCheck size={16} /> : null}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
