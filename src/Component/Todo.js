import React, { useState } from "react";
import "./Todo.css"
import TodoList from "./TodoList";

function Todo() {
    const [dark, setDark] = useState(false);
    const [text, setText] = useState("")
    const [items, setItems] = useState([])

    const handleClick = () => {
        setDark(!dark);
    };

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSumbit = (e) => {
        e.preventDefault()
        if (text.trim() === "") {
            return;
        }
        setItems([text, ...items])
        setText("")
    }

    const deleteHandler = (name, i) => {
        const todos = items.slice()
        todos.splice(i, 1)
        setItems(todos)
    }

    return (
        <div className="App" style={{ background: `${dark ? "#111" : "#fff"}` }}>
            <div className="mode">
                <h1 style={{ color: `${dark ? "#fff" : "#111"}` }}>
                    {dark ? "Dark" : "Light"}
                </h1>
                <button
                    className="toggle"
                    onClick={handleClick}
                    style={{ background: `${dark ? "#fff" : "#111"}` }}>
                    <div
                        className="btn"
                        style={{
                            marginLeft: `${dark ? "53px" : "2px"}`,
                            background: `${dark ? "#111" : "#fff"}`
                        }}
                    />
                </button>
            </div>

            <div
                style={{
                    background: `${dark ? "#111" : "#fff"}`,
                    color: `${dark ? "#fff" : "#111"}`
                }}>

            </div>
            <div
                style={{
                    background: `${dark ? "#111" : "#fff"}`,
                    color: `${dark ? "#fff" : "#111"}`
                }}>

                <form className="todo-form" onSubmit={handleSumbit}>
                    <div>
                        <h2>What you want to do?</h2>
                        <input value={text} type="text" onChange={handleChange} />
                        <button>Add #{items.length}</button>
                    </div>

                </form>
                <TodoList items={items} deleteHandler={deleteHandler} />
            </div>
        </div>
    );
}

export default Todo;







