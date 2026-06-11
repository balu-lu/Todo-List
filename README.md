# TaskMaster

TaskMaster is a todo app built with React, Vite, Tailwind CSS and Recoil.

## What it does

- Add new tasks with validation for empty input.
- Mark tasks as completed or pending.
- Filter tasks by all, pending, or completed.
- Remove tasks individually.
- Use Recoil for global state management.

## Tech Stack

- React 18.2
- Vite
- Tailwind CSS 4
- Recoil
- Docker

## Project Structure

- `src/App.jsx`: main app layout.
- `src/components/TodoForm.jsx`: task creation form.
- `src/components/TodoFilter.jsx`: filter selector.
- `src/components/TodoList.jsx`: filtered task list.
- `src/components/TodoItem.jsx`: single task row.
- `src/atoms/todoState.js`: Recoil atoms.
- `src/selectors/filteredTodoListState.js`: filtered task selector.
- `src/main.jsx`: app bootstrap with `RecoilRoot`.

## Run Locally

```bash
npm install
npm run dev
```

## Run with Docker

```bash
docker compose up --build
```

Then open:

```bash
http://localhost:5173
```

## Scripts

- `npm run dev`: start the dev server.
- `npm run build`: build for production.
- `npm run preview`: preview the production build.
- `npm run lint`: run ESLint.
