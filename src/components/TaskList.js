import Task from "./Task";

const TaskList = (props) => {

    return (
        <div className="tasklist">
            {props.task.map(element => (
                <Task task={element}/>
            ))}
        </div>
    );
}

export default TaskList;