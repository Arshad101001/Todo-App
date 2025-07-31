import { useState } from 'react'
import { useTodo } from '../context'

function TodoInput() {
    const { addTodo } = useTodo()

    const [todo, setTodo] = useState("")

    const handleSubmit = () => {
        if (todo) addTodo(todo)

        setTodo("")
    }
    return (
        <div className="container w-5xl mx-auto mt-32 mb-10 max-md:w-full ">
            <div className='container flex gap-3 max-[680px]:flex-col max-[680px]:mx-2'>

                <input type="text" className='bg-white border-2 border-solid w-full p-2 rounded-2xl border-indigo-400 ' placeholder='Enter a Todo....' value={todo} onChange={(e) => setTodo(e.target.value)} name='todoInput' />

                <button type='submit' className='p-3 bg-indigo-500 rounded-md w-32 text-white font-bold cursor-pointer max-[680px]:w-1/2 max-[680px]:mx-auto' onClick={handleSubmit}>Add Todo</button>
            </div>
        </div>
    )
}

export default TodoInput