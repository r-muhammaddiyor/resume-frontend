import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import ru from "./locales/ru.json";
import uz from "./locales/uz.json";
import ja from "./locales/ja.json";
import zh from "./locales/zh.json";
import tr from "./locales/tr.json";

const resources = {
  en: { translation: en },
  ru: { translation: ru },
  uz: { translation: uz },
  ja: { translation: ja },
  zh: { translation: zh },
  tr: { translation: tr },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;