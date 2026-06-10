# TaskMaster

TaskMaster é uma aplicação de lista de tarefas feita com React e Vite, com foco em uma experiência visual mais polida, persistência local e filtros rápidos para acompanhar o status das tarefas.

## Funcionalidades

- Criar novas tarefas com validação para impedir envios vazios.
- Marcar tarefas como concluídas ou pendentes.
- Filtrar a lista entre todas, pendentes e concluídas.
- Excluir tarefas individualmente.
- Salvar automaticamente as tarefas no `localStorage`.
- Interface construída com Tailwind CSS.

## Tecnologias

- React 19
- Vite
- Tailwind CSS 4
- Context API
- Hooks personalizados
- `useMemo` e `React.memo` para otimização de renderização

## Estrutura Principal

- `src/App.jsx`: layout principal da aplicação.
- `src/components/TodoForm.jsx`: formulário para adicionar tarefas.
- `src/components/TodoFilter.jsx`: seleção entre todas, pendentes e concluídas.
- `src/components/TodoList.jsx`: exibição da lista filtrada.
- `src/components/TodoItem.jsx`: item individual com concluir e excluir.
- `src/context/TodoProvider.jsx`: estado global e ações da aplicação.
- `src/hooks/useLocalStorage.js`: persistência local dos dados.
- `src/hooks/useTodo.js`: acesso ao contexto da aplicação.

## Como Executar

```bash
npm install
npm run dev
```

## Scripts Disponíveis

- `npm run dev`: inicia o ambiente de desenvolvimento.
- `npm run build`: gera a versão de produção.
- `npm run preview`: visualiza a build gerada.
- `npm run lint`: executa o ESLint no projeto.

## Observações

- O projeto usa `localStorage`, então as tarefas permanecem salvas entre recarregamentos do navegador.
- O filtro animado e o layout principal foram pensados para funcionar bem em desktop e mobile.
