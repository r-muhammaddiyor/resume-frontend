import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { defaultResume } from "../utils/defaultResume.js";
import { loadDraft, saveDraft } from "../utils/storage.js";

const ResumeContext = createContext(null);

export function ResumeProvider({ children }) {
  const initial = loadDraft() || defaultResume;
  const [resume, setResume] = useState(initial);

  const updateResume = useCallback((updater) => {
    setResume((prev) => {
      const next = typeof updater === "function" ? updater(prev) : { ...prev, ...updater };
      return next;
    });
  }, []);

  useEffect(() => {
    saveDraft(resume);
  }, [resume]);

  const value = useMemo(
    () => ({ resume, updateResume, setResume }),
    [resume, updateResume]
  );

  return <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>;
}

export function useResume() {
  const ctx = useContext(ResumeContext);
  if (!ctx) throw new Error("useResume must be used within ResumeProvider");
  return ctx;
}