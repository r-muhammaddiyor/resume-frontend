import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { lazyTemplates } from "../templates/index.js";

export default function TemplateRenderer({ resume }) {
  const { t } = useTranslation();
  const Template = lazyTemplates[resume.template] || lazyTemplates.minimal;

  return (
    <Suspense fallback={<div className="text-sm text-steel">{t("status.loadingTemplate")}</div>}>
      <Template resume={resume} />
    </Suspense>
  );
}