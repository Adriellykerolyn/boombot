import Link from "next/link";

export default function Dashboard() {
  // Dados fictícios simulando um cliente logado
  const cliente = {
    nome: "João Silva",
    plano: "Profissional",
    statusAtual: "aguardando", // pode ser: "aguardando", "producao", "concluido"
  };

  const etapas = [
    { titulo: "Pagamento confirmado", feito: true },
    { titulo: "Formulário de briefing", feito: false },
    { titulo: "Site em produção", feito: false },
    { titulo: "Site entregue", feito: false },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Cabeçalho do Painel */}
      <header className="border-b border-white/10 px-6 h-16 flex items-center justify-between">
        <span className="text-lg font-bold">
          Page<span className="text-violet-400">Forge</span>
        </span>
        <div className="flex items-center gap-4">
          <span className="text-sm text-white/50">Olá, {cliente.nome}</span>
          <button className="text-xs border border-white/20 hover:border-white/40 px-3 py-1.5 rounded-lg transition-colors">
            Sair
          </button>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold mb-2">Meu Projeto</h1>
        <p className="text-white/40 text-sm mb-8">
          Plano atual: <span className="text-violet-400">{cliente.plano}</span>
        </p>

        {/* Card de Pagamento (Responsabilidade Dev 1) */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 mb-8">
          <h2 className="font-semibold mb-4">Pagamento</h2>
          <div className="flex items-center justify-between p-4 bg-white/[0.05] rounded-xl border border-white/5">
            <div>
              <p className="text-sm font-medium">Plano {cliente.plano}</p>
              <p className="text-xs text-white/40">Status: Aguardando pagamento</p>
            </div>
            <button className="bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors">
              Pagar agora (Pix/Cartão)
            </button>
          </div>
        </div>

        {/* Card de Ação - Se estiver aguardando o formulário */}
        {cliente.statusAtual === "aguardando" && (
          <div className="bg-violet-950/40 border border-violet-500/30 rounded-2xl p-6 mb-8">
            <h2 className="font-semibold mb-2">Próximo passo pendente</h2>
            <p className="text-sm text-white/50 mb-4">
              Precisamos de algumas informações sobre a sua empresa para a nossa IA começar a trabalhar.
            </p>
            <Link 
              href="/briefing" 
              className="inline-block bg-violet-600 hover:bg-violet-500 transition-colors text-white text-sm font-semibold px-6 py-3 rounded-xl"
            >
              Preencher Formulário de Briefing
            </Link>
          </div>
        )}

        {/* Timeline de Status */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
          <p className="text-xs text-white/40 uppercase tracking-widest mb-6">Status do Projeto</p>
          <div className="space-y-6">
            {etapas.map((etapa, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                  etapa.feito ? "bg-violet-600 text-white" : "bg-white/10 text-white/30"
                }`}>
                  {etapa.feito ? "✓" : index + 1}
                </div>
                <p className={`text-sm ${etapa.feito ? "text-white font-medium" : "text-white/40"}`}>
                  {etapa.titulo}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}