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
    <div className="space-y-3">
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
                "group relative rounded-3xl border border-white/70 bg-white/80 p-4 text-left shadow-soft transition hover:-translate-y-0.5",
                selected && "border-ocean/50 ring-2 ring-ocean/20"
              )}
              onClick={() => onSelect(tpl.id)}
            >
              <div className="absolute right-4 top-4 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold text-steel shadow-soft">
                {selected ? t("template.selected") : t("template.choose")}
              </div>
              <div className="rounded-2xl border border-white/60 bg-gradient-to-br from-white via-frost to-haze p-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-xl bg-white/80" />
                  <div className="space-y-2">
                    {previewMap[tpl.id].map((line, idx) => (
                      <div key={`${tpl.id}-line-${idx}`} className={clsx("rounded-full bg-white/90", line)} />
                    ))}
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="h-10 rounded-xl bg-white/80" />
                  <div className="h-10 rounded-xl bg-white/80" />
                  <div className="h-10 rounded-xl bg-white/80" />
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm font-semibold">{t(tpl.nameKey)}</p>
                <p className="mt-1 text-xs text-steel">{t(descKey[tpl.id])}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
