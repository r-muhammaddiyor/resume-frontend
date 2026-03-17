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

const Minimal = React.memo(function Minimal({ resume }) {
  const { t } = useTranslation();
  const order = resume.sectionsOrder || defaultOrder;
  const profile = resume.profile || {};

  const Section = ({ title, children }) => (
    <section className="mt-6">
      <p className="resume-section-title">{title}</p>
      <div className="mt-3 space-y-3 text-sm text-ink">{children}</div>
    </section>
  );

  const sections = {
    profile: () => (
      <section className="space-y-3">
        <div className="flex flex-wrap items-center gap-4">
          {profile.photo && (
            <img src={profile.photo} alt={t("fields.photo")} className="h-16 w-16 rounded-2xl object-cover" />
          )}
          <div>
            <h1 className="text-3xl font-heading font-semibold">{profile.fullName}</h1>
            <p className="text-sm text-steel">{profile.title}</p>
          </div>
        </div>
        {profile.about && <p className="text-sm text-ink">{profile.about}</p>}
        <div className="flex flex-wrap gap-4 text-xs text-steel">
          {profile.email && <span>{profile.email}</span>}
          {profile.phone && <span>{profile.phone}</span>}
          {profile.location && <span>{profile.location}</span>}
          {profile.website && <span>{profile.website}</span>}
        </div>
      </section>
    ),
    experience: () =>
      resume.experience?.length ? (
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
              {item.summary && <p className="text-sm text-ink">{item.summary}</p>}
              {item.highlights?.length ? (
                <ul className="list-disc pl-5 text-xs text-steel">
                  {item.highlights.map((h, idx) => (
                    <li key={`${item.id}-h-${idx}`}>{h}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </Section>
      ) : null,
    education: () =>
      resume.education?.length ? (
        <Section title={t("sections.education")}>
          {resume.education.map((item) => (
            <div key={item.id} className="space-y-1">
              <div className="flex flex-wrap items-center justify-between text-sm font-semibold">
                <span>{item.school}</span>
                <span className="text-xs text-steel">
                  {item.startDate} - {item.endDate}
                </span>
              </div>
              <div className="text-xs text-steel">{item.degree}</div>
              {item.summary && <p className="text-sm text-ink">{item.summary}</p>}
            </div>
          ))}
        </Section>
      ) : null,
    skills: () =>
      resume.skills?.length ? (
        <Section title={t("sections.skills")}>
          <div className="flex flex-wrap gap-2">
            {resume.skills.map((skill) => (
              <span key={skill} className="resume-chip">
                {skill}
              </span>
            ))}
          </div>
        </Section>
      ) : null,
    languages: () =>
      resume.languages?.length ? (
        <Section title={t("sections.languages")}>
          <div className="space-y-1">
            {resume.languages.map((lang) => (
              <div key={lang.id} className="flex items-center justify-between text-sm">
                <span>{lang.name}</span>
                <span className="text-xs text-steel">{lang.level}</span>
              </div>
            ))}
          </div>
        </Section>
      ) : null,
    projects: () =>
      resume.projects?.length ? (
        <Section title={t("sections.projects")}>
          {resume.projects.map((project) => (
            <div key={project.id} className="space-y-1">
              <div className="flex items-center justify-between text-sm font-semibold">
                <span>{project.name}</span>
                {project.link && (
                  <span className="text-xs text-steel">{project.link}</span>
                )}
              </div>
              <div className="text-xs text-steel">{project.role}</div>
              {project.description && <p className="text-sm text-ink">{project.description}</p>}
            </div>
          ))}
        </Section>
      ) : null,
    certificates: () =>
      resume.certificates?.length ? (
        <Section title={t("sections.certificates")}>
          {resume.certificates.map((cert) => (
            <div key={cert.id} className="flex items-center justify-between text-sm">
              <span>{cert.name}</span>
              <span className="text-xs text-steel">{cert.issuer}</span>
            </div>
          ))}
        </Section>
      ) : null,
    socials: () =>
      resume.socials?.length ? (
        <Section title={t("sections.socials")}>
          <div className="space-y-1">
            {resume.socials.map((social) => (
              <div key={social.id} className="flex items-center justify-between text-sm">
                <span>{social.label}</span>
                <span className="text-xs text-steel">{social.url}</span>
              </div>
            ))}
          </div>
        </Section>
      ) : null,
    custom: () =>
      resume.customSections?.length ? (
        <Section title={t("sections.custom")}>
          {resume.customSections.map((custom) => (
            <div key={custom.id} className="space-y-2">
              <p className="text-sm font-semibold">{custom.title}</p>
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
      ) : null,
  };

  return (
    <div className="font-body text-ink">
      {order.map((key) => (
        <div key={key}>{sections[key] ? sections[key]() : null}</div>
      ))}
    </div>
  );
});

export default Minimal;
