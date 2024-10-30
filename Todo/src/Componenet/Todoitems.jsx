/* eslint-disable react/prop-types */
import { useState } from "react";
import useTodo from "../Context/TodoContext";

export default function TodoItems({ todo }) {
    const { DeleteTodo, UpdateTodo } = useTodo();
    const [edit, setEdit] = useState(false);
    const [checked, setChecked] = useState(todo.Completed);
    const [changeTodo, setChangeTodo] = useState(todo.Todomsg);

    const handleUpdate = () => {
        UpdateTodo(todo.id, changeTodo);
        setEdit(false);
    };

    return (
        <div className="max-w-lg mx-auto my-2 p-2">
            <div className={`${checked ? "bg-red-800" : "bg-blue-600"} flex items-center rounded-xl shadow-lg p-4 transition duration-200`}>
                <input
                    onChange={() => setChecked((prev) => !prev)}
                    checked={checked}
                    type="checkbox"
                    className="h-6 w-6 cursor-pointer"
                />
                <input
                    onChange={(e) => setChangeTodo(e.target.value)}
                    value={!edit ? todo.Todomsg : changeTodo}
                    readOnly={!edit}
                    className="flex-grow text-2xl font-sans h-12 rounded-xl m-1 text-black focus:outline-none"
                    type="text"
                />
                <div className="flex flex-col sm:flex-row sm:items-center sm:ml-2">
                    <button
                        onClick={() => {
                            if (edit) {
                                handleUpdate();
                            } else {
                                setEdit(true);
                            }
                        }}
                        className="m-2 text-xl bg-green-500 w-full sm:w-auto h-10 rounded-lg font-sans transition duration-200 hover:bg-green-600"
                        type="button"
                    >
                        {edit ? "Update" : "Edit"}
                    </button>
                    <button
                        onClick={() => DeleteTodo(todo.id)}
                        className="m-2 text-xl bg-red-600 w-full sm:w-auto h-10 rounded-lg font-sans transition duration-200 hover:bg-red-700"
                        type="button"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
