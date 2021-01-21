import React from "react";
import {Label} from "semantic-ui-react";

const CreateToDoItem = (props) => {
  const { createNewToDoItem, handleInput, handleKeyPress, showError, toDo } = props;

  return (
        <div className="ToDoInput">

          <input placeholder="Task" className="ToDoItem-Input" type="text" value={toDo} onChange={handleInput} onKeyPress={handleKeyPress} />
          { showError &&
            <Label basic color='red' pointing="left">
              Please enter a value
            </Label>
          }
          <button className="ToDo-Add" onClick={createNewToDoItem}>
            +
          </button>
        </div>
  );
};

export default CreateToDoItem;
