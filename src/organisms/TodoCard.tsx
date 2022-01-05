import { useEffect, useState } from 'react';

import TodoTitle from 'molecules/TodoTitle';
import TodoList from 'molecules/TodoList';
import NewTodoInputBox from 'molecules/NewTodoInputBox';
import { Todo } from 'utils/types';
import { mockTodoList } from 'utils/mockData';

function TodoPage() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const onToggle = (id: number) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const onDelete = (id: number) => {
    setTodoList(todoList.filter((todo: Todo) => todo.id !== id));
  };

  const onSubmit = (text: string) => {
    setTodoList([
      { id: 0, text, completed: false, createdOn: new Date() },
      ...todoList,
    ]);
  };

  useEffect(() => {
    setTodoList(mockTodoList);
  }, []);

  return (
    <div className="border-4 border-gray-500 rounded w-full h-screen p-4">
      <TodoTitle />
      <NewTodoInputBox onSubmit={onSubmit} />
      <TodoList todoList={todoList} onToggle={onToggle} onDelete={onDelete} />
    </div>
  );
}

export default TodoPage;