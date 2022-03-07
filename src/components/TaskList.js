import Task from './Task'

const TaskList = (props) => {
    console.log(props)
    
    return(
        <div className="tasklist">
            {props.tasks.map(element => (
                <Task task={element}/>
            ))}
        </div>
    )
}

export default TaskList;