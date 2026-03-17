import { useTranslation } from "react-i18next";
import { useResume } from "../../context/ResumeContext.jsx";
import SectionCard from "../../components/SectionCard.jsx";
import Input from "../../components/Input.jsx";
import EntryList from "../EntryList.jsx";
import { createId } from "../../utils/id.js";

export default function SocialSection() {
  const { t } = useTranslation();
  const { resume, updateResume } = useResume();

  const updateSocials = (items) => {
    updateResume((prev) => ({ ...prev, socials: items }));
  };

  const createItem = () => ({
    id: createId(),
    label: "",
    url: "",
  });

  return (
    <SectionCard title={t("sections.socials")}>
      <EntryList
        items={resume.socials}
        onChange={updateSocials}
        createItem={createItem}
        addLabel={t("actions.addItem")}
        renderItem={(item, onUpdate, onRemove) => (
          <div className="card space-y-3">
            <div className="grid gap-3 md:grid-cols-2">
              <Input
                value={item.label}
                onChange={(e) => onUpdate({ label: e.target.value })}
                placeholder={t("fields.label")}
              />
              <Input
                value={item.url}
                onChange={(e) => onUpdate({ url: e.target.value })}
                placeholder={t("fields.link")}
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