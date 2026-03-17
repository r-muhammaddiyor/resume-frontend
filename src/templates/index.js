import { lazy } from "react";

export const templateOptions = [
  { id: "minimal", nameKey: "template.minimal" },
  { id: "modern", nameKey: "template.modern" },
  { id: "professional", nameKey: "template.professional" },
  { id: "creative", nameKey: "template.creative" }
];

export const lazyTemplates = {
  minimal: lazy(() => import("./Minimal.jsx")),
  modern: lazy(() => import("./Modern.jsx")),
  professional: lazy(() => import("./Professional.jsx")),
  creative: lazy(() => import("./Creative.jsx"))
};