import React from "react";
import PropTypes from "prop-types";

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};
TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
};

function TodoList({ todoList, onTodoClick }) {
  function handleTodoClick(todo) {
    if (!onTodoClick) return;
    onTodoClick(todo);
  }
  return (
    <ul>
      {todoList.map((todo) => {
        return (
          <li onClick={() => handleTodoClick(todo)} key={todo.id}>
            {todo.name}
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
