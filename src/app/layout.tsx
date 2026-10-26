import type { Metadata } from "next";
import { DemoProvider } from "@/components/demo-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ludipim | Área do aluno",
  description: "Sua biblioteca de atividades educativas Ludipim.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><DemoProvider>{children}</DemoProvider></body></html>;
}
