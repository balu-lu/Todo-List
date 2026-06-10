# Todo List Avançado em React

Uma aplicação de gerenciamento de tarefas focada em performance e arquitetura moderna, aplicando padrões avançados do ecossistema React.

## Tecnologias Utilizadas

- **React 18** (Vite)
- **Tailwind CSS** (Estilização com utilitários)
- **Context API** (Gerenciamento de Estado Global)
- **Custom Hooks** (Lógica extraída para persistência)
- **Memoization** (`useMemo` e `React.memo` para otimização de renderização)

## Arquitetura e Padrões

* O estado e a lógica de negócios da lista foram desacoplados em um `TodoProvider` genérico.
* Persistência garantida através do hook customizado `useLocalStorage`.
* A re-renderização da listagem é prevenida pelo `.memo` nos itens filhos e pelo cacheamento do array processado via `useMemo`.
* Dados de entrada sanitizados globalmente via `.trim()`.
