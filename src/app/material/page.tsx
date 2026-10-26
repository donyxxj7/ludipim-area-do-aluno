"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, BookOpenCheck, Check, Download, FileText, LockKeyhole, Printer, ShieldAlert, Sparkles, Star } from "lucide-react";
import { AppShell } from "@/components/ui";
import { DemoGate } from "@/components/demo-gate";
import { useDemo } from "@/components/demo-provider";
import { publicPath } from "@/lib/paths";

export default function MaterialPage() {
  const { scenario } = useDemo(); const unlocked = scenario === "approved";
  return <DemoGate><AppShell active="library"><div className="fade-in">
    <Link href="/biblioteca" className="mb-7 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue"><ArrowLeft size={17}/> Voltar aos materiais</Link>
    {!unlocked ? <section className="card mx-auto max-w-2xl px-6 py-14 text-center sm:px-12"><div className="mx-auto grid h-16 w-16 place-items-center rounded-3xl bg-amber-50 text-amber-600"><LockKeyhole size={28}/></div><h1 className="mt-5 text-2xl font-black text-navy">Este material está aguardando liberação</h1><p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">No cenário de compra pendente, o acesso fica bloqueado. Volte à biblioteca para trocar o cenário da demonstração.</p><Link href="/biblioteca" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue px-5 py-3 text-sm font-extrabold text-white">Voltar e alterar cenário <ArrowRight size={17}/></Link><p className="mt-5 text-xs text-slate-400">A simulação no navegador não representa controle de acesso seguro.</p></section> : <>
      <div className="grid gap-8 lg:grid-cols-[.88fr_1.12fr]">
        <section><div className="relative flex min-h-[345px] items-center justify-center overflow-hidden rounded-[30px] bg-[#fffdf5] p-7"><Image src={publicPath("/images/capa-meu-primeiro-ingles.webp")} alt="Capa oficial enviada de Meu Primeiro Inglês Divertido" width={640} height={900} className="h-[390px] w-auto rounded-xl object-contain shadow-2xl" priority/></div>
          <div className="mt-4 flex items-start gap-2 rounded-2xl border border-slate-200 bg-white p-4 text-xs leading-5 text-slate-500"><ShieldAlert size={17} className="mt-0.5 shrink-0 text-blue"/> Capa extraída do PDF enviado. A demonstração não inclui o restante do material comercial.</div>
        </section>
        <section className="flex flex-col"><div className="flex items-center gap-2 text-sm font-extrabold text-blue"><Sparkles size={16}/> MATERIAL EDUCATIVO DIGITAL</div><h1 className="mt-3 text-3xl font-black leading-tight tracking-tight text-navy sm:text-4xl">Meu Primeiro Inglês Divertido</h1><p className="mt-4 text-base leading-7 text-slate-500">Uma primeira aventura pelas palavras em inglês, com atividades pensadas para aprender brincando e compartilhar bons momentos.</p>
          <div className="mt-6 grid grid-cols-2 gap-3"><InfoTile icon={<FileText/>} title="40 páginas" detail="Atividades educativas"/><InfoTile icon={<Printer/>} title="PDF digital" detail="Pronto para imprimir em A4"/><InfoTile icon={<Star/>} title="6 a 9 anos" detail="Aprendizagem infantil"/><InfoTile icon={<BookOpenCheck/>} title="No seu ritmo" detail="Explore quando quiser"/></div>
          <div className="mt-7"><h2 className="font-extrabold text-navy">O que você vai encontrar</h2><ul className="mt-3 space-y-2 text-sm text-slate-600"><li className="flex gap-2"><Check size={17} className="shrink-0 text-leaf"/> Propostas leves para descobrir cores e palavras do dia a dia.</li><li className="flex gap-2"><Check size={17} className="shrink-0 text-leaf"/> Atividades de leitura, desenho e associação.</li><li className="flex gap-2"><Check size={17} className="shrink-0 text-leaf"/> Páginas para imprimir e fazer em família.</li></ul></div>
          <a href="#previa" className="mt-6 self-start text-sm font-bold text-blue underline underline-offset-4">Ver uma página de prévia</a><a href={publicPath("/amostra-meu-primeiro-ingles.pdf")} download className="mt-5 inline-flex items-center justify-center gap-2 rounded-2xl bg-leaf px-5 py-4 font-extrabold text-white shadow-lg shadow-leaf/20 transition hover:bg-green-700"><Download size={19}/> Baixar amostra em PDF</a><p className="mt-3 text-center text-xs leading-5 text-slate-400">Amostra de 1 página extraída do material enviado. O PDF completo não está nesta demonstração.</p>
        </section>
      </div>
      <section id="previa" className="mt-12"><div className="mb-4 flex items-end justify-between"><div><p className="text-xs font-extrabold uppercase tracking-wider text-blue">PRÉVIA DO MATERIAL ENVIADO</p><h2 className="mt-1 text-2xl font-black text-navy">Let’s Learn Colors!</h2></div><span className="hidden rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-400 sm:inline">Página 2 de 40</span></div><div className="card grid gap-6 overflow-hidden p-5 sm:grid-cols-[220px_1fr] sm:items-center sm:p-7"><div className="relative mx-auto aspect-[.7] w-full max-w-[220px] overflow-hidden rounded-xl bg-white shadow-md"><Image src={publicPath("/images/previa-atividade-cores.webp")} alt="Prévia da página Let’s Learn Colors! com atividades sobre cores" fill sizes="(max-width: 640px) 80vw, 220px" className="object-contain"/></div><div><span className="rounded-full bg-sunshine/40 px-3 py-1 text-xs font-extrabold text-amber-900">PÁGINA 2 DE 40</span><h3 className="mt-4 text-xl font-black text-navy">Let’s Learn Colors!</h3><p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">Uma prévia real do PDF enviado, com cores em inglês e português. O arquivo para download contém somente esta página de amostra.</p></div></div></section>
    </>}</div></AppShell></DemoGate>;
}

function InfoTile({ icon, title, detail }: { icon: React.ReactNode; title: string; detail: string }) {
  return <div className="rounded-2xl border border-slate-100 bg-white p-4"><div className="text-blue">{icon}</div><p className="mt-2 text-sm font-extrabold text-navy">{title}</p><p className="mt-1 text-xs text-slate-400">{detail}</p></div>;
}
