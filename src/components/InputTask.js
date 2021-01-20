import { useState } from 'react'

export default function InputTask({handleSubmit}) {
    const [input, setInput] = useState('')
    /** @param {Event} event */
    const onSubmit = (event) => {
        event.preventDefault()
        setInput('')
        handleSubmit(input)
    }
    return (
        <form onSubmit={onSubmit}>
        <label>New task: 
          <input type="text" 
            value={input} 
            onChange={(event) => setInput(event.target.value)} 
          />
        </label>
        <button type="submit">Add task</button>
      </form>
    )
}