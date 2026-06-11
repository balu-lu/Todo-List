# TaskMaster
TaskMaster é um aplicativo de lista de tarefas (todo app) construído com React, Vite, Tailwind CSS e Recoil.

## O que ele faz
    - Adiciona novas tarefas com validação para campos vazios.
    - Marca tarefas como concluídas ou pendentes.
    - Filtra tarefas por todas, pendentes ou concluídas.
    - Remove tarefas individualmente.
    - Usa Recoil para gerenciamento de estado global.

## Tecnologias Utilizadas
    - React 18.2
    - Vite
    - Tailwind CSS 4
    - Recoil
    - Docker

## Estrutura do Projeto

    - `src/App.jsx`: layout principal do aplicativo.
    - `src/components/TodoForm.jsx`: formulário de criação de tarefas.
    - `src/components/TodoFilter.jsx`: seletor de filtros.
    - `src/components/TodoList.jsx`: lista de tarefas filtrada.
    - `src/components/TodoItem.jsx`: linha de uma única tarefa.
    - `src/atoms/todoState.js`: atoms do Recoil.
    - `src/selectors/filteredTodoListState.js`: seletor de tarefas filtradas.
    - `src/main.jsx`: inicialização do app com o `RecoilRoot`.

## Como Executar (Recomendado via Docker)
A maneira mais fácil e recomendada de rodar este projeto é utilizando o Docker.

```bash
docker compose up --build

```
Depois que os contêineres iniciarem, abra o seu navegador em:

```bash
http://localhost:5173

```