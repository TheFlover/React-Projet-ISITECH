import { useState, useCallback } from "react";

const Task = (props) => {

    const [done, setDone] = useState(false);
    const[NewTaskName, SetNewTaskName] = useState("");

    const handleButton = () => {
        setDone(!done);
    }

    const handleInputChange = (event) => {
        SetNewTaskName(event.target.value)
    }

    const handleClick = useCallback(() => {    console.log('Clicked!');  }, []);

    const { task } = props;

    return (
        <div className="task">
            Tâche : {task.task}<br/>
            Temps : {task.time} heures<br/>
            Personne : {task.assign}<br/>
            <button onClick={handleButton}>{done ? "Pas terminé" : "Terminé"}</button><br/>
            <input value={NewTaskName} onChange={handleInputChange} type="text"></input><br/>
            <button onClick={handleClick}>Valider</button><br/><br/>
        </div>
    )
}

export default Task;