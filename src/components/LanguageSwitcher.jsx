import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", label: "English" },
  { code: "ru", label: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439" },
  { code: "uz", label: "O\u2018zbek" },
  { code: "ja", label: "\u65e5\u672c\u8a9e" },
  { code: "zh", label: "\u4e2d\u6587" },
  { code: "tr", label: "T\u00fcrk\u00e7e" }
];

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  return (
    <select
      className="input max-w-[180px]"
      value={i18n.language}
      onChange={(event) => i18n.changeLanguage(event.target.value)}
      aria-label={t("nav.language")}
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  );
}