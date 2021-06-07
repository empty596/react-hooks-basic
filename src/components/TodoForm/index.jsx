import React, { useState } from "react";
import PropTypes from "prop-types";

TodoForm.propTypes = {
  onTodoFormSubmit: PropTypes.func,
};
TodoForm.defaultProps = {
  onTodoFormSubmit: null,
};

function TodoForm({ onTodoFormSubmit }) {
  const [value, setValue] = useState("");
  function handleFormSubmit(e) {
    e.preventDefault();

    if (!onTodoFormSubmit) return;
    const newValue = {
      name: value,
    };
    onTodoFormSubmit(newValue);
    setValue("");
  }

  function handleInputChange(e) {
    const newValue = e.target.value;
    setValue(newValue);
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <input type='text' value={value} onChange={handleInputChange} />
    </form>
  );
}

export default TodoForm;
