import React, { useState, useEffect } from 'react'
import ToDoItem from "./ToDoItem";
import "./ToDo.css";
import "./extra/ErrorMessage"
import Logo from "../assets/logo192.png";
import {Icon, Label} from "semantic-ui-react";

function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [toDo, setToDo] = useState("");
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:4000/api/task')
      setTasks(await response.json())
    }
    fetchData();
  }, [])

  async function createNewToDoItem() {
    if (!toDo) {
      setShowError(true);
      return;
    }

    setShowError(false);

    const response = await fetch('http://localhost:4000/api/task', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: toDo,
        checked: false
      })
    })
    if (response.ok) {
      const newTask = await response.json()
      setTasks([...tasks, newTask])
      setToDo("")
    }
  }

  async function handleKeyPress(e) {
    if (e.key === "Enter") {
      await createNewToDoItem();
    }
  }
  const changeItem = async(id, checked) => {
    const response = await fetch(`http://localhost:4000/api/task/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        checked: !checked
      })
    })
    if (response.ok) {
      setTasks(tasks.map(task =>
        task.id === id ? {...task, checked: !checked } : {...task}))
    }
  }

  async function deleteItem(id) {
    const response = await fetch(`http://localhost:4000/api/task/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (response.ok) {
      setTasks(tasks.filter((item) => item.id !== id));
    }
  }

  const handleInput = (e) => {
    setToDo(e.target.value);
  };

  return (
    <div className="ToDo">
      <img className="Logo" src={Logo} alt="React logo" />
      <h1 className="ToDo-Header">React To Do</h1>
      <div className="ToDo-Container">
        <div className="ToDo-Content">
          {tasks.map((item) => {
            return <ToDoItem key={item.id} item={item} deleteItem={deleteItem} changeItem={changeItem} />;
          })}
        </div>

        <div className="ToDoInput">

          <input placeholder="Task" className="ToDoItem-Input" type="text" value={toDo} onChange={handleInput} onKeyPress={handleKeyPress} />
          { showError &&
            <Label basic color='red' pointing="left">
              Please enter a value
            </Label>
          }
          <button className="ToDo-Add" onClick={createNewToDoItem}>
            <Icon name="plus" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDo;
