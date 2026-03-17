import { useTranslation } from "react-i18next";
import { useResume } from "../../context/ResumeContext.jsx";
import SectionCard from "../../components/SectionCard.jsx";
import Input from "../../components/Input.jsx";
import EntryList from "../EntryList.jsx";
import { createId } from "../../utils/id.js";

export default function LanguagesSection() {
  const { t } = useTranslation();
  const { resume, updateResume } = useResume();

  const updateLanguages = (items) => {
    updateResume((prev) => ({ ...prev, languages: items }));
  };

  const createItem = () => ({
    id: createId(),
    name: "",
    level: "",
  });

  return (
    <SectionCard title={t("sections.languages")}>
      <EntryList
        items={resume.languages}
        onChange={updateLanguages}
        createItem={createItem}
        addLabel={t("actions.addItem")}
        renderItem={(item, onUpdate, onRemove) => (
          <div className="card space-y-3">
            <div className="grid gap-3 md:grid-cols-2">
              <Input
                value={item.name}
                onChange={(e) => onUpdate({ name: e.target.value })}
                placeholder={t("fields.language")}
              />
              <Input
                value={item.level}
                onChange={(e) => onUpdate({ level: e.target.value })}
                placeholder={t("fields.level")}
              />
            </div>
            <button type="button" className="btn-ghost" onClick={onRemove}>
              {t("actions.remove")}
            </button>
          </div>
        )}
      />
    </SectionCard>
  );
}