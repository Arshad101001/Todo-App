import React from 'react'
import { useTodo } from '../context'

function SearchSort() {
    const { status, setStatus, searchInput, setSearchInput } = useTodo()

    const handleSort = (e) => {
        setStatus(e.target.value)
    }

    const handleSearch = (e) => {
        setSearchInput(e.target.value)
    }
    return (

        <div className="container flex justify-between items-center mx-auto mb-20  max-[500px]:flex-col max-[500px]:gap-2 max-[500px]:mx-2">

            <div className="max-w-sm mx-auto max-[500px]:w-full">
                <select id="countries" value={status} onChange={(e) => handleSort(e)} className="bg-indigo-500 border text-white text-sm rounded-lg block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">
                    <option value="all">All Todos</option>
                    <option value="finish">Finished Todo</option>
                    <option value="pending">Pending Todo</option>
                </select>
            </div>


            <div className="flex w-80 mx-auto max-[500px]:w-full">
                <div className="relative w-full">
                    <input type="search" id="search-dropdown" value={searchInput} onChange={(e) => handleSearch(e)} className="w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search Todos..." />
                    <button type="submit" className="absolute top-0 end-0 p-3 h-full text-white bg-indigo-500 rounded-e-lg border border-indigo-700 hover:bg-indigo-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default SearchSort