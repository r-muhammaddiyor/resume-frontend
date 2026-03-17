import { useTranslation } from "react-i18next";
import { useResume } from "../../context/ResumeContext.jsx";
import SectionCard from "../../components/SectionCard.jsx";
import Input from "../../components/Input.jsx";
import TextArea from "../../components/TextArea.jsx";

export default function ProfileSection() {
  const { t } = useTranslation();
  const { resume, updateResume } = useResume();
  const profile = resume.profile;

  const updateProfile = (patch) => {
    updateResume((prev) => ({
      ...prev,
      profile: { ...prev.profile, ...patch },
    }));
  };

  const handlePhoto = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      updateProfile({ photo: reader.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <SectionCard title={t("sections.profile")}>
      <div className="grid gap-4 md:grid-cols-[120px_1fr]">
        <div className="space-y-3">
          <div className="h-28 w-28 overflow-hidden rounded-3xl border border-white/70 bg-white/80 shadow-soft">
            {profile.photo ? (
              <img src={profile.photo} alt={t("fields.photo")} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-xs text-steel">
                {t("fields.photo")}
              </div>
            )}
          </div>
          <label className="btn-secondary cursor-pointer text-center">
            {t("actions.uploadPhoto")}
            <input type="file" accept="image/*" className="hidden" onChange={handlePhoto} />
          </label>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <Input
            value={profile.fullName}
            onChange={(e) => updateProfile({ fullName: e.target.value })}
            placeholder={t("fields.fullName")}
          />
          <Input
            value={profile.title}
            onChange={(e) => updateProfile({ title: e.target.value })}
            placeholder={t("fields.title")}
          />
          <Input
            value={profile.email}
            onChange={(e) => updateProfile({ email: e.target.value })}
            placeholder={t("fields.email")}
          />
          <Input
            value={profile.phone}
            onChange={(e) => updateProfile({ phone: e.target.value })}
            placeholder={t("fields.phone")}
          />
          <Input
            value={profile.location}
            onChange={(e) => updateProfile({ location: e.target.value })}
            placeholder={t("fields.location")}
          />
          <Input
            value={profile.website}
            onChange={(e) => updateProfile({ website: e.target.value })}
            placeholder={t("fields.website")}
          />
        </div>
      </div>
      <TextArea
        rows={4}
        value={profile.about}
        onChange={(e) => updateProfile({ about: e.target.value })}
        placeholder={t("fields.about")}
      />
    </SectionCard>
  );
}