# Plano de Implementação: Catálogo de Filmes (React + Firebase)

## 1. Visão Geral
Construir uma aplicação web simples para catalogar, comentar e avaliar filmes. O frontend será em React, aproveitando as telas importadas do Stitch. O backend utilizará Firebase (Authentication e Firestore) e a busca de filmes utilizará a API do TMDB.

## 2. Divisão de Tarefas

### Fase 1: Configuração do Projeto e Estrutura Inicial
- [ ] Inicializar o projeto React (recomendado usar Vite: `npm create vite@latest . -- --template react`).
- [ ] Configurar variáveis de ambiente (`.env` renomeado a partir de `ap.env` para o Vite ler o `VITE_TMDB_API_KEY`).
- [ ] Configurar o React Router para navegação entre as páginas.
- [ ] Mover/Configurar os assets (SVG do logo e outras mídias) para a pasta `public` ou `src/assets`.

### Fase 2: Conversão de Telas (HTML/CSS -> React Components)
- [ ] **Global CSS/Design System:** Migrar as variáveis e regras do design system presentes no HTML gerado para um arquivo de estilo global (`index.css` ou Styled Components / Tailwind, dependendo da escolha final).
- [ ] **Componentes Base:** Criar componentes reaproveitáveis (Posters de filmes, Botões, Estrelas de Avaliação, Modal).
- [ ] **Páginas Principais:**
  - `Home` (`home.html`): Feed/Diário de filmes.
  - `MovieDetail` (`filme_detalhes.html`): Detalhes do filme selecionado.
  - `Search` (`busca.html`): Busca via TMDB.
  - `Profile` (`perfil.html`): Perfil do usuário logado e estatísticas.
- [ ] **Modais:**
  - `ReviewModal` (`modal_avaliacao.html`): Formulário para avaliar e comentar um filme.

### Fase 3: Integração com TMDB API
- [ ] Criar serviço (`tmdbService.js`) para consumir a API usando as variáveis do `.env`.
- [ ] Implementar as rotas de busca de filmes por nome.
- [ ] Implementar a busca de detalhes do filme, elenco, etc.

### Fase 4: Backend com Firebase (Auth & Firestore)
- [ ] Configurar projeto no Firebase e adicionar as credenciais ao `.env`.
- [ ] Implementar Autenticação (Login com Google).
- [ ] **Modelagem de Dados (Firestore):**
  - Coleção `users`: Dados do perfil.
  - Coleção `reviews`: Avaliações e comentários associados ao `userId` e `movieId`.
- [ ] **Security Rules (Regras de Segurança Firestore):**
  - Leitura: Pública ou apenas logados (conforme decisão).
  - Escrita/Edição: Apenas o dono da avaliação (validar `request.auth.uid == resource.data.userId`).
- [ ] Conectar os componentes React às funções do Firebase (Salvar nota, Favoritar, Listar diário).

## Fase X: Verificação e Testes
- [ ] Garantir que o login com o Google persiste a sessão.
- [ ] Validar a requisição ao TMDB e o carregamento correto dos posters/imagens.
- [ ] Testar a inclusão de uma avaliação no Firestore (com e sem texto de review).
- [ ] Testar as restrições do Firebase Rules (tentar editar avaliação de outro usuário).
- [ ] Ajustes finais de responsividade e animações baseadas no UI original do Stitch.
