import React from "react";
import { useTranslation } from "react-i18next";

const defaultOrder = [
  "profile",
  "experience",
  "education",
  "skills",
  "languages",
  "projects",
  "certificates",
  "socials",
  "custom",
];

const Creative = React.memo(function Creative({ resume }) {
  const { t } = useTranslation();
  const order = resume.sectionsOrder || defaultOrder;
  const profile = resume.profile || {};
  const sidebarKeys = ["skills", "languages", "socials"];

  const Section = ({ title, children }) => (
    <section className="space-y-3">
      <p className="resume-section-title text-sunrise">{title}</p>
      <div className="space-y-2 text-sm text-ink">{children}</div>
    </section>
  );

  const renderSection = (key) => {
    switch (key) {
      case "experience":
        return resume.experience?.length ? (
          <Section title={t("sections.experience")}>
            {resume.experience.map((item) => (
              <div key={item.id} className="space-y-1">
                <div className="flex flex-wrap items-center justify-between text-sm font-semibold">
                  <span>{item.role}</span>
                  <span className="text-xs text-steel">
                    {item.startDate} - {item.endDate}
                  </span>
                </div>
                <div className="text-xs text-steel">{item.company}</div>
                {item.summary && <p className="text-sm">{item.summary}</p>}
              </div>
            ))}
          </Section>
        ) : null;
      case "education":
        return resume.education?.length ? (
          <Section title={t("sections.education")}>
            {resume.education.map((item) => (
              <div key={item.id} className="space-y-1">
                <div className="text-sm font-semibold">{item.school}</div>
                <div className="text-xs text-steel">{item.degree}</div>
                <div className="text-xs text-steel">
                  {item.startDate} - {item.endDate}
                </div>
              </div>
            ))}
          </Section>
        ) : null;
      case "projects":
        return resume.projects?.length ? (
          <Section title={t("sections.projects")}>
            {resume.projects.map((project) => (
              <div key={project.id} className="space-y-1">
                <div className="text-sm font-semibold">{project.name}</div>
                <div className="text-xs text-steel">{project.role}</div>
                {project.description && <p className="text-sm">{project.description}</p>}
              </div>
            ))}
          </Section>
        ) : null;
      case "certificates":
        return resume.certificates?.length ? (
          <Section title={t("sections.certificates")}>
            {resume.certificates.map((cert) => (
              <div key={cert.id} className="flex items-center justify-between text-sm">
                <span>{cert.name}</span>
                <span className="text-xs text-steel">{cert.issuer}</span>
              </div>
            ))}
          </Section>
        ) : null;
      case "custom":
        return resume.customSections?.length ? (
          <Section title={t("sections.custom")}>
            {resume.customSections.map((custom) => (
              <div key={custom.id} className="space-y-1">
                <div className="text-sm font-semibold">{custom.title}</div>
                {custom.items?.length ? (
                  <ul className="list-disc pl-5 text-xs text-steel">
                    {custom.items.map((item, idx) => (
                      <li key={`${custom.id}-${idx}`}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </Section>
        ) : null;
      case "skills":
        return resume.skills?.length ? (
          <Section title={t("sections.skills")}>
            <div className="flex flex-wrap gap-2">
              {resume.skills.map((skill) => (
                <span key={skill} className="resume-chip">
                  {skill}
                </span>
              ))}
            </div>
          </Section>
        ) : null;
      case "languages":
        return resume.languages?.length ? (
          <Section title={t("sections.languages")}>
            {resume.languages.map((lang) => (
              <div key={lang.id} className="flex items-center justify-between text-sm">
                <span>{lang.name}</span>
                <span className="text-xs text-steel">{lang.level}</span>
              </div>
            ))}
          </Section>
        ) : null;
      case "socials":
        return resume.socials?.length ? (
          <Section title={t("sections.socials")}>
            {resume.socials.map((social) => (
              <div key={social.id} className="text-xs text-steel">
                {social.label}: {social.url}
              </div>
            ))}
          </Section>
        ) : null;
      default:
        return null;
    }
  };

  const mainOrder = order.filter((key) => key !== "profile" && !sidebarKeys.includes(key));
  const sideOrder = order.filter((key) => sidebarKeys.includes(key));

  return (
    <div className="font-body text-ink">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_2.1fr]">
        <aside className="rounded-3xl bg-gradient-to-b from-sunrise/30 via-white to-white p-6">
          <div className="space-y-3">
            <h1 className="text-3xl font-heading font-semibold">{profile.fullName}</h1>
            <p className="text-sm text-steel">{profile.title}</p>
            {profile.photo && (
              <img src={profile.photo} alt={t("fields.photo")} className="h-24 w-24 rounded-2xl object-cover" />
            )}
            <div className="space-y-1 text-xs text-steel">
              {profile.email && <div>{profile.email}</div>}
              {profile.phone && <div>{profile.phone}</div>}
              {profile.location && <div>{profile.location}</div>}
              {profile.website && <div>{profile.website}</div>}
            </div>
          </div>
          <div className="mt-6 space-y-6">
            {sideOrder.map((key) => (
              <div key={key}>{renderSection(key)}</div>
            ))}
          </div>
        </aside>
        <main className="space-y-8">
          {profile.about && (
            <section className="rounded-3xl bg-white/80 p-6 shadow-soft">
              <p className="text-sm text-ink">{profile.about}</p>
            </section>
          )}
          {mainOrder.map((key) => (
            <div key={key}>{renderSection(key)}</div>
          ))}
        </main>
      </div>
    </div>
  );
});

export default Creative;
