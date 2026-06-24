export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight">
            Page<span className="text-violet-400">Forge</span>
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
            <a href="#como-funciona" className="hover:text-white transition-colors">Como funciona</a>
            <a href="#planos" className="hover:text-white transition-colors">Planos</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
          <a href="#planos" className="bg-violet-600 hover:bg-violet-500 transition-colors text-white text-sm font-medium px-5 py-2 rounded-lg">
            Criar meu site
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-28 px-6 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-violet-950/60 border border-violet-500/30 text-violet-300 text-xs font-medium px-4 py-1.5 rounded-full mb-8">
          ✦ Site pronto em até 48 horas
        </div>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
          Seu site profissional,<br />
          <span className="text-violet-400">criado por IA.</span>
        </h1>
        <p className="text-lg text-white/50 max-w-xl mx-auto mb-10">
          Pague, preencha um formulário e receba seu site no ar em até 48 horas.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#planos" className="bg-violet-600 hover:bg-violet-500 transition-colors text-white font-semibold px-8 py-3.5 rounded-xl text-base">
            Criar meu site agora
          </a>
          <a href="#como-funciona" className="border border-white/20 hover:border-white/40 transition-colors text-white/70 hover:text-white font-medium px-8 py-3.5 rounded-xl text-base">
            Como funciona
          </a>
        </div>
        <div className="mt-20 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          <div className="text-center">
            <p className="text-2xl font-bold text-violet-400">48h</p>
            <p className="text-xs text-white/40 mt-1">prazo de entrega</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-violet-400">100%</p>
            <p className="text-xs text-white/40 mt-1">online, sem reunião</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-violet-400">1 passo</p>
            <p className="text-xs text-white/40 mt-1">preencha e pronto</p>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-violet-400 font-medium uppercase tracking-widest text-center mb-3">Como funciona</p>
          <h2 className="text-3xl font-bold text-center mb-16">Em 3 passos simples</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-white/8 bg-white/[0.03]">
              <span className="text-5xl font-black text-violet-600/20 leading-none block mb-4">01</span>
              <h3 className="text-lg font-semibold mb-2">Escolha seu plano</h3>
              <p className="text-sm text-white/50 leading-relaxed">Selecione o plano ideal e realize o pagamento de forma segura.</p>
            </div>
            <div className="p-6 rounded-2xl border border-white/8 bg-white/[0.03]">
              <span className="text-5xl font-black text-violet-600/20 leading-none block mb-4">02</span>
              <h3 className="text-lg font-semibold mb-2">Preencha o formulário</h3>
              <p className="text-sm text-white/50 leading-relaxed">Acesse o painel, preencha as informações da empresa e escolha referências visuais.</p>
            </div>
            <div className="p-6 rounded-2xl border border-white/8 bg-white/[0.03]">
              <span className="text-5xl font-black text-violet-600/20 leading-none block mb-4">03</span>
              <h3 className="text-lg font-semibold mb-2">Receba seu site</h3>
              <p className="text-sm text-white/50 leading-relaxed">A IA cria o site com base no seu briefing. Em até 48h ele está publicado.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section id="planos" className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-violet-400 font-medium uppercase tracking-widest text-center mb-3">Planos</p>
          <h2 className="text-3xl font-bold text-center mb-4">Escolha o seu plano</h2>
          <p className="text-white/40 text-center text-sm mb-16">Taxa única de criação + mensalidade para manter no ar</p>
          <div className="grid md:grid-cols-3 gap-6">

            <div className="relative p-7 rounded-2xl border border-white/10 bg-white/[0.03] flex flex-col">
              <h3 className="text-lg font-bold mb-1">Básico</h3>
              <p className="text-3xl font-black mb-1">R$ 497</p>
              <p className="text-xs text-white/40 mb-6">+ R$ 59/mês para manter no ar</p>
              <ul className="space-y-2.5 mb-8 flex-1">
                <li className="flex items-center gap-2 text-sm text-white/70"><span className="text-violet-400">✓</span> Site de 1 página</li>
                <li className="flex items-center gap-2 text-sm text-white/70"><span className="text-violet-400">✓</span> Domínio incluso no 1º ano</li>
                <li className="flex items-center gap-2 text-sm text-white/70"><span className="text-violet-400">✓</span> Formulário de contato</li>
                <li className="flex items-center gap-2 text-sm text-white/70"><span className="text-violet-400">✓</span> 1 alteração gratuita</li>
                <li className="flex items-center gap-2 text-sm text-white/70"><span className="text-violet-400">✓</span> Entrega em 48h</li>
              </ul>
              <a href="#" className="text-center py-3 rounded-xl text-sm font-semibold border border-white/20 hover:border-white/40 text-white/80 hover:text-white transition-colors">
                Escolher Básico
              </a>
            </div>

            <div className="relative p-7 rounded-2xl border border-violet-500 bg-violet-950/40 flex flex-col">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                Mais popular
              </span>
              <h3 className="text-lg font-bold mb-1">Profissional</h3>
              <p className="text-3xl font-black mb-1">R$ 897</p>
              <p className="text-xs text-white/40 mb-6">+ R$ 99/mês para manter no ar</p>
              <ul className="space-y-2.5 mb-8 flex-1">
                <li className="flex items-center gap-2 text-sm text-white/70"><span className="text-violet-400">✓</span> Site de até 5 páginas</li>
                <li className="flex items-center gap-2 text-sm text-white/70"><span className="text-violet-400">✓</span> Domínio incluso no 1º ano</li>
                <li className="flex items-center gap-2 text-sm text-white/70"><span className="text-violet-400">✓</span> Integração WhatsApp e Instagram</li>
                <li className="flex items-center gap-2 text-sm text-white/70"><span className="text-violet-400">✓</span> 2 alterações gratuitas</li>
                <li className="flex items-center gap-2 text-sm text-white/70"><span className="text-violet-400">✓</span> Entrega em 48h</li>
                <li className="flex items-center gap-2 text-sm text-white/70"><span className="text-violet-400">✓</span> Suporte prioritário</li>
              </ul>
              <a href="#" className="text-center py-3 rounded-xl text-sm font-semibold bg-violet-600 hover:bg-violet-500 text-white transition-colors">
                Escolher Profissional
              </a>
            </div>

            <div className="relative p-7 rounded-2xl border border-white/10 bg-white/[0.03] flex flex-col">
              <h3 className="text-lg font-bold mb-1">Premium</h3>
              <p className="text-3xl font-black mb-1">R$ 1.497</p>
              <p className="text-xs text-white/40 mb-6">+ R$ 149/mês para manter no ar</p>
              <ul className="space-y-2.5 mb-8 flex-1">
                <li className="flex items-center gap-2 text-sm text-white/70"><span className="text-violet-400">✓</span> Site de até 10 páginas</li>
                <li className="flex items-center gap-2 text-sm text-white/70"><span className="text-violet-400">✓</span> Domínio incluso no 1º ano</li>
                <li className="flex items-center gap-2 text-sm text-white/70"><span className="text-violet-400">✓</span> Blog integrado</li>
                <li className="flex items-center gap-2 text-sm text-white/70"><span className="text-violet-400">✓</span> SEO avançado</li>
                <li className="flex items-center gap-2 text-sm text-white/70"><span className="text-violet-400">✓</span> 3 alterações gratuitas</li>
                <li className="flex items-center gap-2 text-sm text-white/70"><span className="text-violet-400">✓</span> Suporte dedicado</li>
              </ul>
              <a href="#" className="text-center py-3 rounded-xl text-sm font-semibold border border-white/20 hover:border-white/40 text-white/80 hover:text-white transition-colors">
                Escolher Premium
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs text-violet-400 font-medium uppercase tracking-widest text-center mb-3">FAQ</p>
          <h2 className="text-3xl font-bold text-center mb-16">Perguntas frequentes</h2>
          <div className="space-y-4">
            <details className="group border border-white/8 rounded-xl bg-white/[0.02] overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer text-sm font-medium list-none hover:bg-white/5 transition-colors">
                Preciso entender de tecnologia?
                <span className="text-white/40 text-lg ml-4">+</span>
              </summary>
              <p className="px-5 pb-5 pt-1 text-sm text-white/50 leading-relaxed">Não. O processo é 100% online e guiado. Você preenche um formulário simples e nós cuidamos do resto.</p>
            </details>
            <details className="group border border-white/8 rounded-xl bg-white/[0.02] overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer text-sm font-medium list-none hover:bg-white/5 transition-colors">
                Em quanto tempo meu site fica pronto?
                <span className="text-white/40 text-lg ml-4">+</span>
              </summary>
              <p className="px-5 pb-5 pt-1 text-sm text-white/50 leading-relaxed">Após o envio do formulário, seu site é entregue em até 48 horas.</p>
            </details>
            <details className="group border border-white/8 rounded-xl bg-white/[0.02] overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer text-sm font-medium list-none hover:bg-white/5 transition-colors">
                Posso solicitar alterações após a entrega?
                <span className="text-white/40 text-lg ml-4">+</span>
              </summary>
              <p className="px-5 pb-5 pt-1 text-sm text-white/50 leading-relaxed">Sim. Cada plano inclui alterações gratuitas. Mudanças adicionais são cobradas conforme tabela.</p>
            </details>
            <details className="group border border-white/8 rounded-xl bg-white/[0.02] overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer text-sm font-medium list-none hover:bg-white/5 transition-colors">
                O site é personalizado para minha empresa?
                <span className="text-white/40 text-lg ml-4">+</span>
              </summary>
              <p className="px-5 pb-5 pt-1 text-sm text-white/50 leading-relaxed">Sim. A IA usa suas informações e referências visuais para criar algo único com a identidade do seu negócio.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-6 text-center border-t border-white/5">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Pronto para ter seu site?</h2>
          <p className="text-white/50 text-sm mb-8">Comece agora e tenha seu site no ar em até 48 horas.</p>
          <a href="#planos" className="inline-block bg-violet-600 hover:bg-violet-500 transition-colors text-white font-semibold px-10 py-4 rounded-xl text-base">
            Criar meu site agora
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <span>Page<span className="text-violet-400">Forge</span> — criado pela BoomBot</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/60 transition-colors">Termos de uso</a>
            <a href="#" className="hover:text-white/60 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white/60 transition-colors">Contato</a>
          </div>
        </div>
      </footer>

    </main>
  )
}