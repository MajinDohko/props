import React, { useState } from 'react';

function AddTaskForm({ addTask }) {
    const [taskText, setTaskText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!taskText.trim())  return
            addTask(taskText)
            setTaskText('')
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder='Añadir una nueva tarea'
            />
            <button type='submit'>Agrerar Tarea</button>
        </form>
    );
}

export default AddTaskForm;