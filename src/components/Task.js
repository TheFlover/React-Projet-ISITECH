import React, { useState } from 'react'

const Task = (props) => {
    const { task } = props
    const [label, setLabel] = useState(task.label)

    const onClickHandler = (event) => {
        props.onSubmit(event, label, task.id)
    }

    const onChangeHandler = (event) => {
        setLabel(event.target.value)
    }
    return (
        <>
            <span> {task.label}</span>

            <br />
            <form onSubmit={onClickHandler}>
                <input onChange={onChangeHandler} />
                <button type='submit' > Click me ! </button>
            </form>
        </>
    )
}

export default Task;