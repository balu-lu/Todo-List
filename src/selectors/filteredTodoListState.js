import { selector } from 'recoil';
import { todoListState, todoListFilterState } from '../atoms/todoState';

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'concluidas':
        return list.filter((item) => item.concluida);
      case 'pendentes':
        return list.filter((item) => !item.concluida);
      default:
        return list;
    }
  },
});