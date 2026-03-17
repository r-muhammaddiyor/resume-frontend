import { useResume } from "../context/ResumeContext.jsx";
import TemplatePicker from "../components/TemplatePicker.jsx";
import DraggableSectionList from "./DraggableSectionList.jsx";
import ProfileSection from "./sections/ProfileSection.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import EducationSection from "./sections/EducationSection.jsx";
import SkillsSection from "./sections/SkillsSection.jsx";
import LanguagesSection from "./sections/LanguagesSection.jsx";
import ProjectsSection from "./sections/ProjectsSection.jsx";
import CertificatesSection from "./sections/CertificatesSection.jsx";
import SocialSection from "./sections/SocialSection.jsx";
import CustomSectionsSection from "./sections/CustomSectionsSection.jsx";

const sectionMap = {
  profile: ProfileSection,
  experience: ExperienceSection,
  education: EducationSection,
  skills: SkillsSection,
  languages: LanguagesSection,
  projects: ProjectsSection,
  certificates: CertificatesSection,
  socials: SocialSection,
  custom: CustomSectionsSection,
};

export default function Builder() {
  const { resume, updateResume } = useResume();

  const handleOrderChange = (nextOrder) => {
    updateResume((prev) => ({ ...prev, sectionsOrder: nextOrder }));
  };

  const handleTemplate = (template) => {
    updateResume((prev) => ({ ...prev, template }));
  };

  return (
    <div className="space-y-6">
      <TemplatePicker value={resume.template} onSelect={handleTemplate} />
      <DraggableSectionList
        items={resume.sectionsOrder}
        onChange={handleOrderChange}
        renderItem={(id) => {
          const SectionComponent = sectionMap[id];
          return SectionComponent ? <SectionComponent /> : null;
        }}
      />
    </div>
  );
}