import { useTranslation } from "react-i18next";
import { useResume } from "../context/ResumeContext.jsx";
import TemplateRenderer from "./TemplateRenderer.jsx";

export default function Preview() {
  const { t } = useTranslation();
  const { resume } = useResume();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="section-title">{t("app.preview")}</p>
      </div>
      <div id="resume-preview" className="print-area rounded-3xl border border-white/80 bg-white shadow-glass p-8">
        <div className="mx-auto min-h-[1120px] w-full max-w-[794px]">
          <TemplateRenderer resume={resume} />
        </div>
      </div>
    </div>
  );
}