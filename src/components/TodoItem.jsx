import { useState } from 'react'
import { useTodo } from '../context'

function TodoItem({ todo }) {

    const [isEditable, setIsEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const [isCompleted, setIsCompleted] = useState(todo.isCompleted)

    const { deleteTodo, updateTodo, toggleCompleted } = useTodo()
    const handleDelete = () => {
        deleteTodo(todo.id)
    }

    const handleEdit = () => {
        if (todo.isCompleted) {
            return
        }

        if (isEditable) {
            updateTodo(todo.id, todoMsg)
            setIsEditable((prev) => !prev)
        } else {
            setIsEditable((prev) => !prev)
        }
    }

    const handleToggleCompleted = () => {
        toggleCompleted(todo.id)
        setIsCompleted((prev) => !prev)
        if (isEditable) {
            setTodoMsg(todo.todo)
            setIsEditable((prev) => !prev)
        }

    }

    return (
        <>

            <div className="container mx-auto max-[650px]:mx-2">
                <div className='container flex justify-between max-w-5xl mx-auto my-5 max-lg:w-full max-[650px]:mx-1 max-[650px]:flex-col max-[650px]:gap-3'>

                    <div className='flex gap-6 w-full items-center '>
                        <input type="checkbox" name="Checked" className='w-7 h-7 accent-indigo-500 hover:accent-indigo-400' checked={isCompleted} onChange={handleToggleCompleted} />
                        <textarea rows={1} type="text" value={todoMsg} onChange={(e) => setTodoMsg(e.target.value)} className={`text-2xl max-[650px]:text-center field-sizing-content  p-2 w-full ${isEditable ? "border-2 border-solid" : "outline-none cursor-auto"}`} id={todo.id} readOnly={!isEditable} />
                    </div>

                    <div className="buttons flex gap-6 items-center ">
                        <button className='p-3 bg-indigo-500 rounded-md w-18 text-white font-bold cursor-pointer max-[650px]:w-1/2' onClick={handleEdit}>{isEditable ? "Save" : "Edit"}</button>
                        <button className='p-3 bg-indigo-500 rounded-md w-18 text-white font-bold cursor-pointer max-[650px]:w-1/2' onClick={handleDelete}>Delete</button>
                    </div>

                </div>
                <hr className='text-indigo-400 max-w-5xl mx-auto' />

            </div>

        </>

    )
}

export default TodoItem