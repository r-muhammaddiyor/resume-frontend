import { useTranslation } from "react-i18next";
import Header from "../components/Header.jsx";
import Builder from "../builder/Builder.jsx";
import Preview from "../preview/Preview.jsx";

export default function BuilderPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen px-6 pb-16 pt-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <Header />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="section-title">{t("app.builder")}</p>
              <p className="text-sm text-steel">{t("app.builderHint")}</p>
            </div>
            <Builder />
          </div>
          <div className="lg:sticky lg:top-8 h-fit">
            <Preview />
          </div>
        </div>
      </div>
    </div>
  );
}