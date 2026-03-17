import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { templateOptions } from "../templates/index.js";

const previewMap = {
  minimal: ["h-2 w-2/3", "h-2 w-1/2", "h-2 w-5/6"],
  modern: ["h-2 w-full", "h-2 w-2/3", "h-2 w-3/4"],
  professional: ["h-2 w-1/2", "h-2 w-3/4", "h-2 w-full"],
  creative: ["h-2 w-2/3", "h-2 w-full", "h-2 w-1/2"],
};

const descKey = {
  minimal: "template.minimalDesc",
  modern: "template.modernDesc",
  professional: "template.professionalDesc",
  creative: "template.creativeDesc",
};

export default function TemplatePicker({ value, onSelect }) {
  const { t } = useTranslation();

  return (
    <div className="card space-y-4">
      <div className="flex items-end justify-between gap-3">
        <div>
          <p className="section-title">{t("template.title")}</p>
          <p className="text-sm text-steel">{t("template.pickHint")}</p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {templateOptions.map((tpl) => {
          const selected = value === tpl.id;
          return (
            <button
              key={tpl.id}
              type="button"
              className={clsx(
                "group rounded-2xl border border-white/70 bg-white/90 p-4 text-left shadow-soft transition hover:-translate-y-0.5",
                selected && "border-ocean/60 ring-2 ring-ocean/20"
              )}
              onClick={() => onSelect(tpl.id)}
              aria-pressed={selected}
            >
              <div className="flex items-center gap-4">
                <div className="w-24 shrink-0 rounded-xl border border-white/70 bg-gradient-to-br from-white via-frost to-haze p-3">
                  <div className="space-y-2">
                    {previewMap[tpl.id].map((line, idx) => (
                      <div key={`${tpl.id}-line-${idx}`} className={clsx("h-2 rounded-full bg-white/90", line)} />
                    ))}
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    <div className="h-6 rounded-lg bg-white/80" />
                    <div className="h-6 rounded-lg bg-white/80" />
                    <div className="h-6 rounded-lg bg-white/80" />
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-base font-semibold">{t(tpl.nameKey)}</p>
                    <span className="badge">{selected ? t("template.selected") : t("template.choose")}</span>
                  </div>
                  <p className="text-xs text-steel">{t(descKey[tpl.id])}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
