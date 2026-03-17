import { useTranslation } from "react-i18next";
import { useResume } from "../../context/ResumeContext.jsx";
import SectionCard from "../../components/SectionCard.jsx";
import Input from "../../components/Input.jsx";
import TextArea from "../../components/TextArea.jsx";
import EntryList from "../EntryList.jsx";
import { createId } from "../../utils/id.js";

export default function ProjectsSection() {
  const { t } = useTranslation();
  const { resume, updateResume } = useResume();

  const updateProjects = (items) => {
    updateResume((prev) => ({ ...prev, projects: items }));
  };

  const createItem = () => ({
    id: createId(),
    name: "",
    role: "",
    link: "",
    description: "",
  });

  return (
    <SectionCard title={t("sections.projects")}>
      <EntryList
        items={resume.projects}
        onChange={updateProjects}
        createItem={createItem}
        addLabel={t("actions.addItem")}
        renderItem={(item, onUpdate, onRemove) => (
          <div className="card space-y-3">
            <div className="grid gap-3 md:grid-cols-2">
              <Input
                value={item.name}
                onChange={(e) => onUpdate({ name: e.target.value })}
                placeholder={t("fields.project")}
              />
              <Input
                value={item.role}
                onChange={(e) => onUpdate({ role: e.target.value })}
                placeholder={t("fields.role")}
              />
              <Input
                value={item.link}
                onChange={(e) => onUpdate({ link: e.target.value })}
                placeholder={t("fields.link")}
              />
            </div>
            <TextArea
              rows={3}
              value={item.description}
              onChange={(e) => onUpdate({ description: e.target.value })}
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