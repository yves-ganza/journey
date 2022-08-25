import { useState } from "react"
import useJourneyContext from "../hooks/useJourneyContext"

export default function NewEntryForm(){
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    const {dispatch} = useJourneyContext()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const headers = {
                'Content-Type': 'application/json'
            }
            const response = await fetch('/api/journey/', {
                method: 'POST',
                body: JSON.stringify({title, data: text}),
                headers
            })
            
            if(!response.ok) throw new Error({message: response.text, status: response.status})
            
            const json = await response.json()
            dispatch({type: 'CREATE_ENTRY', payload: json})
            setText('')
            setTitle('')
            
        } catch (error) {
            console.log(error.message)
        }

    }
    return(
        <form action="" onSubmit={handleSubmit} className="bg-[#fffffe] shadow max-w-96 md:w-[480px] grid p-4 gap-2">
            <h3 className="text-center text-xl font-semibold">Create a new entry</h3>
            <input type="text" placeholder="Title" className="p-4 text-3xl" onChange={e => setTitle(e.target.value)} value={title}/>
            <textarea name="data" className="p-4 border" rows={5} onChange={e => setText(e.target.value)} placeholder="Type here..." value={text}>
            </textarea>
            <button className="bg-[#ff8e3c] text-[#fffffe] px-6 py-4 rounded">Save</button>
        </form>
    )
}