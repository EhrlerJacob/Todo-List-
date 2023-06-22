import React from "react";
const Todo = (props) => {
    const todoClasses = [];
        if (props.todo.complete) {
            todoClasses.push("line-through")
        }
    return (
        <div>
            <input className="form-check-input mt-2" type="checkbox" style={{ marginRight: "5px" }}
                onChange={(event) => {
                    props.handleTodoCompletion(props.i);
                }} />
            <span className={todoClasses.join(" ")} >{props.todo.text}</span>
            <button style={{ marginLeft: "10px" }} className="btn btn-danger"
                onClick={(event) => {
                    props.handleTodoDelete(props.i);
                }}
                checked={props.todo.complete}
            >Delete</button>
        </div>
    );
};

export default Todo;
