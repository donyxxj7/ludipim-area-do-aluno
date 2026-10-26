import Link from "next/link";
import { BookOpen, CheckCircle2, Home, LogOut, Menu, UserRound, X } from "lucide-react";
import { useDemo } from "@/components/demo-provider";
import { useState } from "react";

export function Brand({ light = false }: { light?: boolean }) {
  return <Link href="/biblioteca" className={`flex items-center gap-2.5 font-extrabold tracking-tight ${light ? "text-white" : "text-navy"}`} aria-label="Ludipim, início">
    <span className="grid h-10 w-10 place-items-center rounded-2xl bg-sunshine text-navy"><span className="text-xl">✦</span></span>
    <span className="text-[22px]">ludipim<span className={light ? "text-blue-200" : "text-blue"}>.</span></span>
  </Link>;
}

export function AppShell({ children, active }: { children: React.ReactNode; active: "library" | "account" }) {
  const { email, logout, scenario } = useDemo();
  const [mobileOpen, setMobileOpen] = useState(false);
  const firstName = email?.split("@")[0]?.split(/[._-]/)[0] || "aluno";
  const nav = <>
    <Link onClick={() => setMobileOpen(false)} href="/biblioteca" className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold ${active === "library" ? "bg-blue-50 text-blue" : "text-slate-500 hover:bg-slate-50"}`}><Home size={18}/> Meus materiais</Link>
    <Link onClick={() => setMobileOpen(false)} href="/conta" className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold ${active === "account" ? "bg-blue-50 text-blue" : "text-slate-500 hover:bg-slate-50"}`}><UserRound size={18}/> Minha conta</Link>
  </>;
  return <div className="min-h-screen bg-canvas md:flex">
    <aside className="hidden w-[260px] shrink-0 border-r border-slate-100 bg-white px-5 py-7 md:flex md:flex-col">
      <Brand/><div className="mt-12 space-y-2">{nav}</div>
      <div className="mt-auto rounded-2xl bg-amber-50 p-4 text-xs leading-relaxed text-amber-800"><strong className="mb-1 block">Modo demonstração</strong>Acesso: {scenario === "approved" ? "liberado" : "pendente"}</div>
      <button onClick={logout} className="mt-4 flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold text-slate-500 hover:bg-slate-50"><LogOut size={18}/> Sair</button>
    </aside>
    {mobileOpen && <div className="fixed inset-0 z-50 bg-navy/30 md:hidden" onClick={() => setMobileOpen(false)}><div className="h-full w-[min(84vw,320px)] bg-white p-5" onClick={(event) => event.stopPropagation()}><div className="flex items-center justify-between"><Brand/><button aria-label="Fechar menu" onClick={() => setMobileOpen(false)}><X/></button></div><div className="mt-10 space-y-2">{nav}<button onClick={logout} className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold text-slate-500"><LogOut size={18}/> Sair</button></div></div></div>}
    <div className="min-w-0 flex-1">
      <header className="sticky top-0 z-20 flex h-[76px] items-center justify-between border-b border-slate-100 bg-white/90 px-4 backdrop-blur md:px-10">
        <button aria-label="Abrir menu" onClick={() => setMobileOpen(true)} className="rounded-xl p-2 text-navy hover:bg-slate-50 md:hidden"><Menu/></button>
        <div className="hidden items-center gap-2 text-sm text-slate-400 md:flex"><BookOpen size={17}/> Área do aluno <span className="text-slate-300">/</span> {active === "library" ? "Meus materiais" : "Minha conta"}</div>
        <div className="flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded-full bg-sunshine text-sm font-extrabold uppercase text-navy">{firstName.slice(0,1)}</div><div className="hidden sm:block"><p className="text-sm font-bold capitalize text-navy">Olá, {firstName}!</p><p className="text-xs text-slate-400">Que bom ter você aqui</p></div></div>
      </header>
      <main className="mx-auto w-full max-w-6xl px-4 py-8 md:px-10 md:py-10">{children}</main>
      <nav className="fixed inset-x-0 bottom-0 z-30 flex justify-around border-t border-slate-100 bg-white px-4 py-3 md:hidden">
        <Link href="/biblioteca" className={`flex flex-col items-center gap-1 text-xs ${active === "library" ? "font-bold text-blue" : "text-slate-400"}`}><BookOpen size={20}/> Materiais</Link>
        <Link href="/conta" className={`flex flex-col items-center gap-1 text-xs ${active === "account" ? "font-bold text-blue" : "text-slate-400"}`}><UserRound size={20}/> Minha conta</Link>
        <button onClick={logout} className="flex flex-col items-center gap-1 text-xs text-slate-400"><LogOut size={20}/> Sair</button>
      </nav>
      <div className="h-16 md:hidden"/><span className="sr-only"><CheckCircle2/></span>
    </div>
  </div>;
}
