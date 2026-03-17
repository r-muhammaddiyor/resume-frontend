import { useTranslation } from "react-i18next";
import { useResume } from "../../context/ResumeContext.jsx";
import SectionCard from "../../components/SectionCard.jsx";
import ChipInput from "../../components/ChipInput.jsx";

export default function SkillsSection() {
  const { t } = useTranslation();
  const { resume, updateResume } = useResume();

  return (
    <SectionCard title={t("sections.skills")}>
      <ChipInput
        value={resume.skills}
        onChange={(value) => updateResume((prev) => ({ ...prev, skills: value }))}
        placeholder={t("fields.skill")}
        addLabel={t("actions.add")}
      />
    </SectionCard>
  );
}