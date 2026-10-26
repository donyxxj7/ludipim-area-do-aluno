"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Scenario = "approved" | "pending";
type DemoContextValue = {
  email: string | null;
  scenario: Scenario;
  hydrated: boolean;
  login: (email: string) => void;
  logout: () => void;
  setScenario: (scenario: Scenario) => void;
};

const DemoContext = createContext<DemoContextValue | null>(null);
const EMAIL_KEY = "ludipim-demo-email";
const SCENARIO_KEY = "ludipim-demo-scenario";

export function DemoProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [email, setEmail] = useState<string | null>(null);
  const [scenario, setScenarioState] = useState<Scenario>("approved");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setEmail(window.localStorage.getItem(EMAIL_KEY));
    setScenarioState(window.localStorage.getItem(SCENARIO_KEY) === "pending" ? "pending" : "approved");
    setHydrated(true);
  }, []);

  const value = useMemo<DemoContextValue>(() => ({
    email,
    scenario,
    hydrated,
    login: (nextEmail) => { window.localStorage.setItem(EMAIL_KEY, nextEmail); setEmail(nextEmail); },
    logout: () => { window.localStorage.removeItem(EMAIL_KEY); setEmail(null); },
    setScenario: (nextScenario) => { window.localStorage.setItem(SCENARIO_KEY, nextScenario); setScenarioState(nextScenario); },
  }), [email, scenario, hydrated]);

  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>;
}

export function useDemo() {
  const context = useContext(DemoContext);
  if (!context) throw new Error("useDemo precisa ser usado dentro de DemoProvider");
  return context;
}
