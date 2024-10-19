import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTodo } from "../../Feature/TodoSlice";

export default function Inputbox() {
    const Dispatcher = useDispatch();
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        Dispatcher(AddTodo(input));
        setInput("");
    };

    return (
        <>
            <div className="text-2xl font-sans font-bold">
                <div className="rounded-2xl shadow-lg mt-10 bg-slate-700 flex flex-col items-center w-[90%] sm:w-[70%] lg:w-[50%] mx-auto p-6">
                   
                    <div className="text-white text-center text-3xl font-sans mb-6">
                        <span>Manage Your Todo</span>
                    </div>

                    
                    <div className="w-full sm:w-[90%] lg:w-[80%] rounded-2xl bg-gray-800 shadow-xl p-4">
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-between items-center">
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                type="text"
                                className="w-full sm:w-[70%] lg:w-[75%] h-12 rounded-2xl font-sans text-lg sm:text-2xl p-3 mb-4 sm:mb-0"
                                placeholder="Enter your text"
                            />
                            <button
                                type="submit"
                                className="bg-blue-600 text-white text-sm sm:text-lg px-6 py-3 rounded-lg"
                            >
                                Add
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
