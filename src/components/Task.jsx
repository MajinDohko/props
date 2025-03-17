const ShowTask = ({task, handleDelete, handleCompleted}) => {

    return(
        <>
            <li className="card">
                <span 
                    onClick={() => handleCompleted(task.id)}
                    style={{ textDecoration: task.completed ? 'line-through' : 'none'}}
                >
                
                    {task.text}
                </span>
                
            </li>
            <button className="delete" onClick={() => handleDelete(task.id)}>Eliminar tarea</button>
            <button className="completed" onClick={() => handleCompleted(task.id)}>
                {task.completed ? 'No completada' : 'Completada'} 
            </button>
        </>
    )
    

}


export default ShowTask;