import React from "react";
import PropTypes from "prop-types";

Todos.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};
Todos.defaultProps = {
  todoList: [],
  onTodoClick: null,
};

function Todos({ todoList, onTodoClick }) {
  function handleTodoClick(index) {
    if (!onTodoClick) return;
    onTodoClick(index);
  }
  return (
    <ul>
      {todoList.map((todo, index) => {
        return (
          <li onClick={() => handleTodoClick(index)} key={todo.id}>
            {todo.title}
          </li>
        );
      })}
    </ul>
  );
}

export default Todos;
