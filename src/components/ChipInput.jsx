import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ChipInput({ value = [], onChange, placeholder, addLabel = "Add" }) {
  const { t } = useTranslation();
  const [input, setInput] = useState("");

  const addChip = () => {
    const next = input.trim();
    if (!next) return;
    onChange([...(value || []), next]);
    setInput("");
  };

  const removeChip = (chip) => {
    onChange(value.filter((item) => item !== chip));
  };

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {value.map((chip) => (
          <span key={chip} className="chip">
            {chip}
            <button
              type="button"
              className="ml-2 text-steel"
              onClick={() => removeChip(chip)}
              aria-label={t("actions.remove")}
            >
              ?
            </button>
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder={placeholder}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              addChip();
            }
          }}
        />
        <button type="button" className="btn-secondary" onClick={addChip}>
          {addLabel}
        </button>
      </div>
    </div>
  );
}