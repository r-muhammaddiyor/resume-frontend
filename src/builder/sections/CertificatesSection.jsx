import { useTranslation } from "react-i18next";
import { useResume } from "../../context/ResumeContext.jsx";
import SectionCard from "../../components/SectionCard.jsx";
import Input from "../../components/Input.jsx";
import EntryList from "../EntryList.jsx";
import { createId } from "../../utils/id.js";

export default function CertificatesSection() {
  const { t } = useTranslation();
  const { resume, updateResume } = useResume();

  const updateCertificates = (items) => {
    updateResume((prev) => ({ ...prev, certificates: items }));
  };

  const createItem = () => ({
    id: createId(),
    name: "",
    issuer: "",
    date: "",
    link: "",
  });

  return (
    <SectionCard title={t("sections.certificates")}>
      <EntryList
        items={resume.certificates}
        onChange={updateCertificates}
        createItem={createItem}
        addLabel={t("actions.addItem")}
        renderItem={(item, onUpdate, onRemove) => (
          <div className="card space-y-3">
            <div className="grid gap-3 md:grid-cols-2">
              <Input
                value={item.name}
                onChange={(e) => onUpdate({ name: e.target.value })}
                placeholder={t("fields.certificate")}
              />
              <Input
                value={item.issuer}
                onChange={(e) => onUpdate({ issuer: e.target.value })}
                placeholder={t("fields.issuer")}
              />
              <Input
                value={item.date}
                onChange={(e) => onUpdate({ date: e.target.value })}
                placeholder={t("fields.date")}
              />
              <Input
                value={item.link}
                onChange={(e) => onUpdate({ link: e.target.value })}
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