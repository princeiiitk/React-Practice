import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteTodo, UpdataTodo } from "../../Feature/TodoSlice";

export default function TodoItems() {
    const dispatch = useDispatch();
    const [editId, setEditId] = useState(null);
    const [changetext, setChangeText] = useState("");
    const [tik, settik] = useState(false)

    const data = useSelector((state) => state.todos);

    return (
        <>
            {data.map((todo) => (
                <div key={todo.id}>
                    <div className=" mt-1">
                        <div className={`w-[50%] ml-[28%] mt-2 rounded-xl shadow-lg }`}>
                            <div 
                                className={`p-3 h-[30%] ml-[1%] rounded-2xl ${editId === todo.id ? "bg-blue-800" : "bg-green-500"}`}>
                                <input
                                    className="p-1"
                                    onChange={() =>
                                        settik((prev) => !prev)
                                    }
                                    checked={editId === todo.id ? tik : null}
                                    type="checkbox"

                                />


                                <input
                                    onChange={(e) => setChangeText(e.target.value)}
                                    value={editId === todo.id ? changetext : todo.text}
                                    readOnly={editId !== todo.id}
                                    className="w-[70%] text-2xl font-sans h-14 rounded-xl m-1 mt-2 text-black"
                                    type="text"
                                />


                                <button
                                    onClick={() => dispatch(DeleteTodo(todo.id))}
                                    className="m-2 text-xl bg-red-600 w-[11%] h-10 rounded-lg font-sans"
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
                                    className="m-2 text-xl bg-red-600 w-[11%] h-10 rounded-lg font-sans"
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
