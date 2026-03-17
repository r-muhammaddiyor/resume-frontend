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

const Professional = React.memo(function Professional({ resume }) {
  const { t } = useTranslation();
  const order = resume.sectionsOrder || defaultOrder;
  const profile = resume.profile || {};

  const Section = ({ title, children }) => (
    <section className="mt-8">
      <div className="flex items-center gap-3">
        <div className="h-px w-10 bg-ink" />
        <p className="text-xs uppercase tracking-[0.3em] text-ink">{title}</p>
      </div>
      <div className="mt-4 space-y-3 text-sm text-ink">{children}</div>
    </section>
  );

  const sections = {
    profile: () => (
      <section className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-heading font-semibold">{profile.fullName}</h1>
            <p className="text-sm text-steel">{profile.title}</p>
          </div>
          {profile.photo && (
            <img src={profile.photo} alt={t("fields.photo")} className="h-20 w-20 rounded-2xl object-cover" />
          )}
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
              {item.summary && <p className="text-sm">{item.summary}</p>}
            </div>
          ))}
        </Section>
      ) : null,
    education: () =>
      resume.education?.length ? (
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
      ) : null,
    skills: () =>
      resume.skills?.length ? (
        <Section title={t("sections.skills")}>
          <div className="flex flex-wrap gap-2">
            {resume.skills.map((skill) => (
              <span key={skill} className="rounded-full border border-haze px-3 py-1 text-xs">
                {skill}
              </span>
            ))}
          </div>
        </Section>
      ) : null,
    languages: () =>
      resume.languages?.length ? (
        <Section title={t("sections.languages")}>
          {resume.languages.map((lang) => (
            <div key={lang.id} className="flex items-center justify-between text-sm">
              <span>{lang.name}</span>
              <span className="text-xs text-steel">{lang.level}</span>
            </div>
          ))}
        </Section>
      ) : null,
    projects: () =>
      resume.projects?.length ? (
        <Section title={t("sections.projects")}>
          {resume.projects.map((project) => (
            <div key={project.id} className="space-y-1">
              <div className="text-sm font-semibold">{project.name}</div>
              <div className="text-xs text-steel">{project.role}</div>
              {project.description && <p className="text-sm">{project.description}</p>}
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
          {resume.socials.map((social) => (
            <div key={social.id} className="text-xs text-steel">
              {social.label}: {social.url}
            </div>
          ))}
        </Section>
      ) : null,
    custom: () =>
      resume.customSections?.length ? (
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

export default Professional;