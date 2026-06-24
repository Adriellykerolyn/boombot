export default function Admin() {
  // Dados fictícios simulando os pedidos recebidos pela agência
  const pedidos = [
    { id: "101", cliente: "João Silva", plano: "Profissional", status: "Aguardando Formulário", data: "24/06/2026" },
    { id: "102", cliente: "Maria Oliveira", plano: "Básico", status: "Em Produção", data: "23/06/2026" },
    { id: "103", cliente: "Carlos Souza", plano: "Premium", status: "Concluído", data: "20/06/2026" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex">
      {/* Menu Lateral (Sidebar) */}
      <aside className="w-64 border-r border-white/10 p-6 hidden md:block">
        <div className="font-bold text-xl mb-10">
          Page<span className="text-violet-400">Forge</span> <span className="text-xs font-normal text-white/30 ml-1">ADMIN</span>
        </div>
        <nav className="space-y-4 text-sm text-white/60">
          <p className="text-white font-medium cursor-pointer">Painel Geral</p>
          <p className="hover:text-white cursor-pointer transition-colors">Pedidos</p>
          <p className="hover:text-white cursor-pointer transition-colors">Clientes</p>
        </nav>
      </aside>

      {/* Conteúdo Principal */}
      <main className="flex-1 p-6 lg:p-12">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-2xl font-bold">Visão Geral</h1>
          <span className="text-sm text-white/50">Equipe BoomBot</span>
        </header>

        {/* Tabela de Pedidos */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-white/10">
            <h2 className="text-lg font-semibold">Pedidos Recentes</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-white/40">
                <tr>
                  <th className="px-6 py-4 font-medium">ID</th>
                  <th className="px-6 py-4 font-medium">Cliente</th>
                  <th className="px-6 py-4 font-medium">Plano</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium">Ação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {pedidos.map((pedido) => (
                  <tr key={pedido.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4 text-white/50">#{pedido.id}</td>
                    <td className="px-6 py-4 font-medium">{pedido.cliente}</td>
                    <td className="px-6 py-4 text-white/70">{pedido.plano}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        pedido.status === "Concluído" ? "bg-green-500/20 text-green-400" :
                        pedido.status === "Em Produção" ? "bg-blue-500/20 text-blue-400" :
                        "bg-yellow-500/20 text-yellow-400"
                      }`}>
                        {pedido.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-xs border border-white/20 hover:border-violet-500 hover:text-violet-400 px-3 py-1.5 rounded-lg transition-colors">
                        Ver detalhes
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}