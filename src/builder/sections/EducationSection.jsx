import { useTranslation } from "react-i18next";
import { useResume } from "../../context/ResumeContext.jsx";
import SectionCard from "../../components/SectionCard.jsx";
import Input from "../../components/Input.jsx";
import TextArea from "../../components/TextArea.jsx";
import EntryList from "../EntryList.jsx";
import { createId } from "../../utils/id.js";

export default function EducationSection() {
  const { t } = useTranslation();
  const { resume, updateResume } = useResume();

  const updateEducation = (items) => {
    updateResume((prev) => ({ ...prev, education: items }));
  };

  const createItem = () => ({
    id: createId(),
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
    summary: "",
  });

  return (
    <SectionCard title={t("sections.education")}>
      <EntryList
        items={resume.education}
        onChange={updateEducation}
        createItem={createItem}
        addLabel={t("actions.addItem")}
        renderItem={(item, onUpdate, onRemove) => (
          <div className="card space-y-3">
            <div className="grid gap-3 md:grid-cols-2">
              <Input
                value={item.school}
                onChange={(e) => onUpdate({ school: e.target.value })}
                placeholder={t("fields.school")}
              />
              <Input
                value={item.degree}
                onChange={(e) => onUpdate({ degree: e.target.value })}
                placeholder={t("fields.degree")}
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
              rows={3}
              value={item.summary}
              onChange={(e) => onUpdate({ summary: e.target.value })}
              placeholder={t("fields.summary")}
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