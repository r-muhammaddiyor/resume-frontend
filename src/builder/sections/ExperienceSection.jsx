import { useTranslation } from "react-i18next";
import { useResume } from "../../context/ResumeContext.jsx";
import SectionCard from "../../components/SectionCard.jsx";
import Input from "../../components/Input.jsx";
import TextArea from "../../components/TextArea.jsx";
import ChipInput from "../../components/ChipInput.jsx";
import EntryList from "../EntryList.jsx";
import { createId } from "../../utils/id.js";

export default function ExperienceSection() {
  const { t } = useTranslation();
  const { resume, updateResume } = useResume();

  const updateExperience = (items) => {
    updateResume((prev) => ({ ...prev, experience: items }));
  };

  const createItem = () => ({
    id: createId(),
    company: "",
    role: "",
    startDate: "",
    endDate: "",
    location: "",
    summary: "",
    highlights: [],
  });

  return (
    <SectionCard title={t("sections.experience")}>
      <EntryList
        items={resume.experience}
        onChange={updateExperience}
        createItem={createItem}
        addLabel={t("actions.addItem")}
        renderItem={(item, onUpdate, onRemove) => (
          <div className="card space-y-3">
            <div className="grid gap-3 md:grid-cols-2">
              <Input
                value={item.company}
                onChange={(e) => onUpdate({ company: e.target.value })}
                placeholder={t("fields.company")}
              />
              <Input
                value={item.role}
                onChange={(e) => onUpdate({ role: e.target.value })}
                placeholder={t("fields.role")}
              />
              <Input
                value={item.startDate}
                onChange={(e) => onUpdate({ startDate: e.target.value })}
                placeholder={t("fields.startDate")}
              />
              <Input
                value={item.endDate}
                onChange={(e) => onUpdate({ endDate: e.target.value })}
                placeholder={t("fields.endDate")}
              />
              <Input
                value={item.location}
                onChange={(e) => onUpdate({ location: e.target.value })}
                placeholder={t("fields.location")}
              />
            </div>
            <TextArea
              rows={4}
              value={item.summary}
              onChange={(e) => onUpdate({ summary: e.target.value })}
              placeholder={t("fields.summary")}
            />
            <ChipInput
              value={item.highlights || []}
              onChange={(next) => onUpdate({ highlights: next })}
              placeholder={t("fields.highlights")}
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