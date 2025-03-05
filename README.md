🎬 StreamBox

Um app de catálogo de filmes feito com React Native e Expo, usando a API do TMDb para buscar e exibir filmes. 🍿

🚀 Funcionalidades

Listar filmes populares

Buscar filmes por nome

Ver detalhes do filme

Favoritar filmes

🛠️ Tecnologias Utilizadas

React Native: Framework para desenvolvimento de aplicativos móveis.

Expo: Plataforma para simplificar a criação e execução de apps React Native.

Expo Router: Gerenciamento de rotas com uma abordagem similar ao React Router.

TMDb API: API de filmes e séries para obter dados detalhados de produções.



🛠️ Configuração

Instalar dependências:

npm install

Configurar a API:
Crie um arquivo .env:

TMDB_API_KEY=SEU_TOKEN_DE_ACESSO

Adicione ao .gitignore para segurança.

Iniciar o projeto:

npm start

📘 Navegação

O app usa o Expo Router para organizar as telas:

/index.tsx → Página inicial com os filmes populares.

/search.tsx → Tela de busca.

/favorites.tsx → Lista de filmes favoritados.



