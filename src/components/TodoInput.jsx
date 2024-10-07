import React, { useState } from "react";

export default function TodoInput(props) {
  const { handleAddTodos } = props;
  const [todoValue, setTodoValue] = useState("");
  return (
    <header>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault()
          handleAddTodos(todoValue);
          setTodoValue("");
        }}
      >
        <input
          value={todoValue}
          onChange={(e) => {
            setTodoValue(e.target.value);
          }}
          type="text"
          placeholder="Write something todo"
        />
        <button>Add</button>
      </form>
    </header>
  );
}
