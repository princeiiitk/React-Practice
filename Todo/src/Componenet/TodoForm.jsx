import { useState } from "react";
import useTodo from "../Context/TodoContext";

export default function TodoForm() {
    const [Todomsg, setTodomsg] = useState("");
    const { AddTodo } = useTodo();

    const handlesubmit = (e) => {
        e.preventDefault();
        if (!Todomsg) return;
        console.log("Todomsg", Todomsg);
        AddTodo({ Todomsg, Completed: true });
        setTodomsg("");
    };

    return (
        <div className="flex flex-col items-center mt-10">
            <div className="w-full max-w-lg bg-slate-700 rounded-2xl shadow-lg p-5">
                <div className="text-white text-3xl font-bold mb-4 text-center">
                    Manage Your Todo
                </div>
                <form onSubmit={handlesubmit} className="flex flex-col sm:flex-row justify-between items-center">
                    <input
                        value={Todomsg}
                        onChange={(e) => setTodomsg(e.target.value)}
                        type="text"
                        className="flex-grow h-12 rounded-2xl p-2 text-2xl placeholder-gray-400"
                        placeholder="Enter your text"
                    />
                    <button
                        type="submit"
                        className="mt-3 sm:mt-0 sm:ml-5 bg-blue-800 rounded-lg w-full sm:w-auto h-12 text-white font-semibold transition duration-200 hover:bg-blue-700"
                    >
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
}
