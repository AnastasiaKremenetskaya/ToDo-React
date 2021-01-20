import { useState, useEffect } from 'react'
import InputTask from './components/InputTask'

function TodoApp() {
  const [tasks, setTasks] = useState([])
  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:4000/api/task')
      setTasks(await response.json())
    }
    fetchData();
  }, [])

  async function handleSubmit(input) {
    const response = await fetch('http://localhost:4000/api/task', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: input,
        checked: false
      })
    })
    if (response.ok) {
      const newTask = await response.json()
      setTasks([...tasks, newTask])
    }
  }

  async function toggleTask({id, checked}) {
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

  return (
    <div>
      <InputTask handleSubmit={handleSubmit} />
      <ul>
        {tasks.map(task => 
          (<li 
            style={task.checked ? {textDecoration: 'line-through'} : null }
            onClick={() => toggleTask(task)} 
            key={task.id}>{task.name}
          </li>)
        )}
      </ul>
    </div>
  );
}

export default TodoApp;
