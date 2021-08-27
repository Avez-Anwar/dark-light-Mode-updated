import React from "react"
import "./TodoList.css"

function TodoList(props) {
    return (
        <div>
            {props.items.map((item, index) => {
                return (
                    <div className="todolist-app">
                        <h2 style={{ fontSize: "large" }} key={index} >
                            {item}
                        </h2>
                        <button onClick={() => props.deleteHandler(item, index)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoList