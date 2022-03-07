const Task = (props) => {
    console.log(props)
    
    return(
        <div>
            Taches : {props.task}
        </div>
    )
}

export default Task;