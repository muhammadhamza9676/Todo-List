import { useState } from "react";
import './Todo.css';
import { toggleTodo, updateTodo } from "../redux/actions";
import { deleteTodo } from "../redux/actions";

import { useDispatch } from "react-redux";

const Todo = ({ todo }) => {

    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(todo?.data);

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        setEditing(prevState => !prevState);

        dispatch(updateTodo(todo._id, text))
    }

    return (
        <li
            className="task"
            
            style={{
                textDecoration: todo?.done ? 'line-through' : '',
                color: todo?.done ? '#302d2d' : '#34495e'
            }}
            data-testid="todo-test"
        >
            <span style={{ display: editing ? 'none' : '' }}>{todo?.data}</span>

            <form
                style={{ display: editing ? 'inline' : 'none' }}
                onSubmit={onFormSubmit}
            >
                <input
                    type="text"
                    value={text}
                    className="edit-todo"
                    onChange={(e) => setText(e.target.value)}
                />
            </form>

            <span className="icon trash" onClick={() => dispatch(deleteTodo(todo._id))}>
                <i className="fas fa-trash" />
            </span>
            <span className="icon pen" onClick={() => setEditing(prevState => !prevState)}>
                <i className="fas fa-pen" />
            </span>
            <span className="icon check" onClick={() => dispatch(toggleTodo(todo._id))}>
                <i className="fas fa-check"/>
            </span>
        </li>
    )
}

export default Todo;