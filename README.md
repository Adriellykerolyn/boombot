<div align="center">
  <h1>🚀 PageForge</h1>
  <p><b>Plataforma de criação automatizada de sites com inteligência artificial</b></p>
  <p><i>Projeto desenvolvido para a agência <b>BoomBot</b> durante a Residência Tecnológica do <b>Programa Bolsa Futuro Digital</b>.</i></p>
</div>

---

## 📖 Sobre o Projeto

O **PageForge** é uma plataforma inovadora onde qualquer empresa contrata a criação do seu site de forma 100% online, do pagamento até a entrega final.

O cliente acessa o site, escolhe um plano, preenche um formulário de briefing com referências visuais e, em até **48 horas**, a Inteligência Artificial gera e publica o site automaticamente.

### ✨ Principais Características

- 🎨 Geração automática de sites com IA
- 💳 Sistema integrado de pagamento
- 📋 Formulário de briefing com referências visuais
- ⚡ Entrega em até 48 horas
- 👨‍💼 Painel administrativo completo

---

## 👥 Equipe e Estrutura do Monorepo

Este projeto utiliza uma estrutura de **monorepo** para isolar frentes de trabalho com tecnologias diferentes. Cada desenvolvedor(a) trabalha em sua própria pasta, garantindo organização e evitando conflitos de código.

| Diretório | Desenvolvedor(a) | Foco | Stack | Escopo |
|:---|:---|:---|:---|:---|
| 📁 `dev-1/` | Adrielly Souza | Infraestrutura & Frontend | Next.js, React, Tailwind | Site de vendas, painel do cliente, painel admin |
| 📁 `dev-2/` | Ricardo | Produto & Formulário | Python (Django/FastAPI) | Formulário de briefing, galeria de referências, e-mails |
| 📁 `dev-3/` | Alessandra | IA & Qualidade | Python | Prompts de IA, PDF de briefing, geração automatizada |

---

## 🛠️ Tecnologias Utilizadas

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Python, Django/FastAPI
- **IA**: Integração com modelos de linguagem
- **Banco de Dados**: PostgreSQL (recomendado)
- **Versionamento**: Git

---

## ⚙️ Como Executar Localmente

Cada ambiente deve ser instalado e iniciado a partir de sua respectiva pasta. Selecione abaixo o seu ambiente:

### 💻 Dev-1: Frontend & Infraestrutura (Adrielly)

Responsável pela interface do cliente e painel administrativo.

```bash
# Navegue até o diretório
cd dev-1

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse em: [http://localhost:3000](http://localhost:3000)

---

### 📝 Dev-2: Formulário & Backend (Ricardo)

Responsável pelo processamento de dados de briefing e API backend.

```bash
# Navegue até o diretório
cd dev-2

# Crie o ambiente virtual Python
python -m venv venv

# Ative o ambiente virtual
# No Linux/Mac:
source venv/bin/activate
# No Windows:
venv\Scripts\activate

# Instale as dependências
pip install -r requirements.txt

# Inicie o servidor backend
python manage.py runserver
```

---

### 🤖 Dev-3: IA & Geração (Alessandra)

Responsável pelo processamento de prompts e geração do resultado final.

```bash
# Navegue até o diretório
cd dev-3

# Crie o ambiente virtual Python
python -m venv venv

# Ative o ambiente virtual
# No Linux/Mac:
source venv/bin/activate
# No Windows:
venv\Scripts\activate

# Instale as dependências
pip install -r requirements.txt

# Execute os scripts de IA
python main.py
```
---

<div align="center">
  <p><b>BoomBot × Programa Bolsa Futuro Digital</b></p>
  <p>🌟 Desenvolvido com dedicação e criatividade</p>
</div>