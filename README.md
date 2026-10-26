# Ludipim · Área do aluno

Protótipo independente de uma biblioteca digital educativa, feito com Next.js, TypeScript e Tailwind CSS. O projeto foi pensado para funcionar em celular e computador e para ser executado na nuvem ou localmente.

> **Demonstração, não produção:** o login não verifica identidade e a compra é simulada no navegador. Não use dados pessoais. A capa e a prévia foram extraídas do PDF enviado pela Ludipim. O download contém somente uma página de amostra; o PDF comercial completo não está incluído.

## O que funciona

- Entrada demonstrativa com validação de e-mail, sem senha, e saída da sessão.
- Biblioteca, página do material e conta, com navegação adaptada para celular.
- Alternância entre compra aprovada (acesso liberado) e pendente (material bloqueado). A preferência fica no armazenamento local do navegador durante a navegação.
- Download de uma página extraída do PDF enviado, para testar o fluxo.
- Capa e prévia reais do material; o arquivo comercial completo fica fora do projeto.

O estado é apenas uma conveniência de interface. A amostra de uma página fica publicamente acessível e não é um download protegido; o PDF completo não está no projeto. Isso não substitui autenticação, validação de pagamento ou autorização no servidor. Não há conexão com Neon, Cakto, webhooks ou armazenamento privado.

## Requisitos

- Node.js 20.9 ou superior (Node.js 24 recomendado)
- npm 10 ou superior

## Executar localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/donyxxj7/ludipim-area-do-aluno.git
   cd ludipim-area-do-aluno
   ```

2. Instale as dependências e inicie o servidor:

   ```bash
   npm install
   npm run dev
   ```

3. Abra `http://localhost:3000` no navegador. Entre com `aluno@exemplo.com` ou qualquer e-mail válido; não é necessária senha.

Não são necessárias variáveis de ambiente para esta demonstração. Para uma versão de produção, será necessário desenhar autenticação, persistência e autorização no servidor antes de integrar pagamentos ou liberar arquivos privados.

## Comandos úteis

```bash
npm run dev        # desenvolvimento
npm run lint       # lint
npm run typecheck  # TypeScript
npm run build      # build de produção
npm start          # servidor de produção (após o build)
```

## Estrutura

```text
src/app/                 páginas, layout e rota do PDF de demonstração
src/components/          estado demonstrativo e componentes compartilhados
```

## Hospedagem

O projeto pode ser implantado em um serviço compatível com Next.js, como Vercel. A implantação exige acesso à conta e autorização no provedor. A simulação no navegador não deve ser usada para proteger conteúdo comercial.
