import { useState } from "react"
import Task from "./Task"

const TaskList = (props) => {

    const [taskListArray, setTaskListArray] = useState(props.list)

    const handleSubmit = (event, value, idFromTask) => {
        event.preventDefault()
        console.log('event: ', event)
        console.log('value inside TaskList comp: ', value)

        setTaskListArray((previousState) => {
            
        })
    }

    return (
        <>
           { taskListArray.map((task)=> {
              return <Task onSubmit={handleSubmit} key={task.id} task={task} />
           }) } 
        </>
    )
}

export default TaskList  