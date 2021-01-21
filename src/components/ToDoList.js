import React from "react";
import "./extra/ErrorMessage"

const ToDoList = (props) => {
  const { tasks, renderItem } = props;

  return (
      <div className="ToDo-Content">
        {tasks.map((item) => renderItem(item))}
      </div>
  );
};

export default ToDoList;
