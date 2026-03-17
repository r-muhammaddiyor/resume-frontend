import { useTranslation } from "react-i18next";
import { useResume } from "../../context/ResumeContext.jsx";
import SectionCard from "../../components/SectionCard.jsx";
import Input from "../../components/Input.jsx";
import ChipInput from "../../components/ChipInput.jsx";
import EntryList from "../EntryList.jsx";
import { createId } from "../../utils/id.js";

export default function CustomSectionsSection() {
  const { t } = useTranslation();
  const { resume, updateResume } = useResume();

  const updateCustom = (items) => {
    updateResume((prev) => ({ ...prev, customSections: items }));
  };

  const createItem = () => ({
    id: createId(),
    title: "",
    items: [],
  });

  return (
    <SectionCard title={t("sections.custom")}
      subtitle={t("actions.addSection")}
    >
      <EntryList
        items={resume.customSections}
        onChange={updateCustom}
        createItem={createItem}
        addLabel={t("actions.addSection")}
        renderItem={(item, onUpdate, onRemove) => (
          <div className="card space-y-3">
            <Input
              value={item.title}
              onChange={(e) => onUpdate({ title: e.target.value })}
              placeholder={t("fields.customTitle")}
            />
            <ChipInput
              value={item.items || []}
              onChange={(next) => onUpdate({ items: next })}
              placeholder={t("fields.customItem")}
              addLabel={t("actions.add")}
            />
            <button type="button" className="btn-ghost" onClick={onRemove}>
              {t("actions.remove")}
            </button>
          </div>
        )}
      />
    </SectionCard>
  );
}