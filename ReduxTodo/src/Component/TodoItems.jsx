import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteTodo, UpdataTodo } from "../../Feature/TodoSlice";

export default function TodoItems() {
    const dispatch = useDispatch();
    const [editId, setEditId] = useState(null);
    const [changetext, setChangeText] = useState("");
    const [tik, settik] = useState(false);

    const data = useSelector((state) => state.todos);

    return (
        <>
            {data.map((todo) => (
                <div key={todo.id} className="w-full sm:w-3/4 lg:w-1/2 mx-auto mt-4">
                    <div className="rounded-xl shadow-lg p-4">  
                        <div
                            className={`p-3 rounded-2xl ${editId === todo.id ? "bg-blue-800" : "bg-green-500"}`}
                        >
                            <div className="flex items-center space-x-2">
                               
                                <input
                                    className="p-1"
                                    onChange={() => settik((prev) => !prev)}
                                    checked={editId === todo.id ? tik : false}
                                    type="checkbox"
                                />

                               
                                <input
                                    onChange={(e) => setChangeText(e.target.value)}
                                    value={editId === todo.id ? changetext : todo.text}
                                    readOnly={editId !== todo.id}
                                    className="flex-grow text-lg sm:text-xl lg:text-2xl font-sans rounded-xl px-3 py-2 text-black"
                                    type="text"
                                />
                            </div>

                          
                            <div className="flex justify-between mt-4">
                                <button
                                    onClick={() => dispatch(DeleteTodo(todo.id))}
                                    className="text-sm sm:text-lg bg-red-600 text-white px-4 py-2 rounded-lg"
                                    type="button"
                                >
                                    Delete
                                </button>

                                <button
                                    onClick={() => {
                                        if (editId === todo.id) {
                                            dispatch(UpdataTodo({ id: todo.id, text: changetext }));
                                            setEditId(null);
                                        } else {
                                            setEditId(todo.id);
                                            setChangeText(todo.text);
                                        }
                                    }}
                                    className="text-sm sm:text-lg bg-blue-600 text-white px-4 py-2 rounded-lg"
                                    type="button"
                                >
                                    {editId === todo.id ? "Update" : "Edit"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
