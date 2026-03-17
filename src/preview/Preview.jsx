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
      <div id="resume-preview" className="print-area resume-preview-frame">
        <div className="resume-page">
          <TemplateRenderer resume={resume} />
        </div>
      </div>
      <div id="resume-export" className="resume-export">
        <div className="resume-page">
          <TemplateRenderer resume={resume} />
        </div>
      </div>
    </div>
  );
}
