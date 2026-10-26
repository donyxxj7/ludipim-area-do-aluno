"use client";

import Link from "next/link";
import { ArrowLeft, Mail, ShieldAlert, UserRound } from "lucide-react";
import { AppShell } from "@/components/ui";
import { DemoGate } from "@/components/demo-gate";
import { useDemo } from "@/components/demo-provider";

export default function AccountPage() {
  const { email } = useDemo();
  return <DemoGate><AppShell active="account"><div className="fade-in">
    <Link href="/biblioteca" className="mb-7 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue"><ArrowLeft size={17}/> Voltar à biblioteca</Link>
    <div className="mb-8"><p className="text-sm font-bold text-blue">SEU ESPAÇO</p><h1 className="mt-2 text-3xl font-black tracking-tight text-navy">Minha conta</h1><p className="mt-3 text-slate-500">Confira os dados desta sessão demonstrativa.</p></div>
    <section className="card max-w-2xl p-6 sm:p-8"><div className="flex items-center gap-4"><div className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-blue"><UserRound size={25}/></div><div><h2 className="text-lg font-black text-navy">Perfil de demonstração</h2><p className="text-sm text-slate-400">Conta de teste local</p></div></div><div className="mt-7 rounded-2xl bg-slate-50 p-4"><p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-400"><Mail size={14}/> E-mail usado para entrar</p><p className="mt-2 font-bold text-navy">{email}</p></div><div className="mt-5 flex gap-3 rounded-2xl border border-amber-100 bg-amber-50 p-4 text-sm leading-6 text-amber-900"><ShieldAlert size={19} className="mt-0.5 shrink-0"/><p>Este protótipo guarda apenas um identificador no armazenamento local do navegador. Não existe autenticação real, conta de produção ou confirmação de compra.</p></div></section>
  </div></AppShell></DemoGate>;
}
