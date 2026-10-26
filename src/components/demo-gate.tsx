"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDemo } from "@/components/demo-provider";

export function DemoGate({ children }: { children: React.ReactNode }) {
  const router = useRouter(); const { email, hydrated } = useDemo();
  useEffect(() => { if (hydrated && !email) router.replace("/"); }, [hydrated, email, router]);
  if (!hydrated || !email) return <div className="grid min-h-screen place-items-center bg-canvas"><div className="h-9 w-9 animate-spin rounded-full border-4 border-blue/20 border-t-blue" aria-label="Carregando"/></div>;
  return <>{children}</>;
}
