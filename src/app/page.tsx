"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, BookOpen, Check, Heart, Sparkles, Star } from "lucide-react";
import { Brand } from "@/components/ui";
import { useDemo } from "@/components/demo-provider";

export default function LoginPage() {
  const router = useRouter();
  const { email, login, hydrated } = useDemo();
  const [value, setValue] = useState("aluno@exemplo.com");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  useEffect(() => { if (hydrated && email) router.replace("/biblioteca"); }, [email, hydrated, router]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setNotice("");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) { setError("Digite um e-mail válido para continuar."); return; }
    setError(""); login(value.trim()); setNotice("Tudo certo! Abrindo sua biblioteca..."); router.push("/biblioteca");
  }

  return <main className="grid min-h-screen bg-white md:grid-cols-[1.02fr_.98fr]">
    <section className="relative flex min-h-[380px] flex-col overflow-hidden bg-navy px-6 py-7 text-white md:min-h-screen md:px-14 md:py-10">
      <div className="relative z-10"><Brand light/></div>
      <div className="relative z-10 mx-auto my-auto max-w-lg py-12 md:py-0"><span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-blue-100"><Sparkles size={15}/> APRENDER PODE SER UMA AVENTURA</span><h1 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl">Pequenas descobertas.<br/><span className="text-sunshine">Grandes sorrisos.</span></h1><p className="mt-5 max-w-md text-base leading-7 text-blue-100">Um cantinho especial para aprender, brincar e descobrir coisas novas todos os dias.</p>
        <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-white/90"><span className="flex items-center gap-2"><Check className="text-leaf" size={17}/> Materiais divertidos</span><span className="flex items-center gap-2"><Check className="text-leaf" size={17}/> Aprendizagem no seu ritmo</span></div>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -right-16 h-72 w-72 rounded-full border-[34px] border-white/5"/><div aria-hidden="true" className="absolute right-10 top-1/3 rotate-12 text-5xl text-sunshine/80">✦</div><div aria-hidden="true" className="absolute bottom-24 left-10 -rotate-12 text-4xl text-coral">♥</div>
      <p className="relative z-10 text-xs text-blue-200/70">Um espaço feito com carinho para a família toda.</p>
    </section>
    <section className="flex items-center justify-center px-5 py-12 sm:px-10"><div className="w-full max-w-md fade-in">
      <div className="mb-8 flex items-center gap-2 text-sm font-bold text-blue"><Star size={17} fill="currentColor"/> SUA JORNADA COMEÇA AQUI</div>
      <h2 className="text-3xl font-black tracking-tight text-navy">Entre na sua biblioteca</h2><p className="mt-3 text-sm leading-6 text-slate-500">Acesse seus materiais e continue de onde a imaginação levar.</p>
      <form noValidate onSubmit={submit} className="mt-8 space-y-5"><label htmlFor="email" className="block text-sm font-bold text-slate-700">Seu e-mail</label><input id="email" type="email" autoComplete="email" value={value} onChange={(e) => {setValue(e.target.value); setError(""); setNotice("");}} placeholder="voce@exemplo.com" className="-mt-3 w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-base outline-none transition focus:border-blue focus:ring-4 focus:ring-blue/10" aria-invalid={Boolean(error)}/>
        {error && <p role="alert" className="-mt-3 text-sm font-semibold text-rose-600">{error}</p>}{notice && <p role="status" className="-mt-3 text-sm font-semibold text-green-700">{notice}</p>}
        <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue px-5 py-4 font-extrabold text-white shadow-lg shadow-blue/20 transition hover:bg-navy focus:outline-none focus:ring-4 focus:ring-blue/25">Entrar na minha biblioteca <ArrowRight size={19}/></button></form>
      <div className="mt-7 rounded-2xl border border-dashed border-blue-200 bg-blue-50/60 p-4"><p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-blue"><BookOpen size={15}/> Conta de demonstração</p><p className="mt-2 text-sm text-slate-600">Use <button type="button" onClick={() => {setValue("aluno@exemplo.com"); setError("");}} className="font-bold text-navy underline decoration-blue/40 underline-offset-2">aluno@exemplo.com</button> ou qualquer e-mail válido. Não é preciso criar senha.</p></div>
      <p className="mt-6 flex items-start gap-2 text-xs leading-5 text-slate-400"><Heart size={14} className="mt-0.5 shrink-0 text-coral"/> Esta é uma demonstração. A entrada não confirma identidade nem protege materiais para uso em produção.</p>
    </div></section>
  </main>;
}
