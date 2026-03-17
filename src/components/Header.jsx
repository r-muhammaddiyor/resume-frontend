import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "./Button.jsx";
import LanguageSwitcher from "./LanguageSwitcher.jsx";
import { downloadPdf } from "../services/pdf.js";

export default function Header() {
  const { t } = useTranslation();
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    try {
      setDownloading(true);
      await downloadPdf();
    } finally {
      setDownloading(false);
    }
  };

  return (
    <header className="no-print flex flex-wrap items-center justify-between gap-4 rounded-3xl p-6 glass">
      <div className="space-y-1">
        <p className="text-lg font-heading font-semibold">{t("app.name")}</p>
        <p className="text-sm text-steel">{t("app.tagline")}</p>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Button variant="primary" onClick={handleDownload} disabled={downloading}>
          {downloading ? t("status.loading") : t("nav.export")}
        </Button>
        <LanguageSwitcher />
      </div>
    </header>
  );
}