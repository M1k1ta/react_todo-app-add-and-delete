import React, { FC } from 'react';
import { deleteTodo } from '../../api/todos';
import { Todo } from '../../types/Todo';

interface Props {
  todo: Todo;
  setError: (error: string) => void;
}

export const ActiveTodo: FC<Props> = React.memo(({
  todo,
  setError,
}) => {
  const { id, title } = todo;

  return (
    <div className="todo">
      <label className="todo__status-label">
        <input
          type="checkbox"
          className="todo__status"
        />
      </label>

      <span className="todo__title">{title}</span>
      <button
        type="button"
        className="todo__remove"
        onClick={() => {
          const deletedTodo = deleteTodo(id);

          deletedTodo.catch(() => setError('Unable to delete a todo'));
        }}
      >
        ×
      </button>

      <div className="modal overlay">
        <div className="modal-background has-background-white-ter" />
        <div className="loader" />
      </div>
    </div>
  );
});
