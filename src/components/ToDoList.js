import React from "react";

const ToDoList = (props) => {
  const { tasks, renderItem } = props;

  return (
      <div className="ToDo-Content">
        {tasks.map((item) => renderItem(item))}
      </div>
  );
};

export default ToDoList;
