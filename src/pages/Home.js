import { useEffect, useState } from "react"
import EntryDetails from "../components/EntryDetails"
export default function Home(){
    const [entries, setEntries] = useState(null)

    useEffect(() => {
        const fetchEntries = async () => {
            try {
                const response = await fetch('/api/journey/')
                
                if(!response.ok) return
                
                const responseJson = await response.json()
                setEntries(responseJson)   
            } catch (error) {
                console.log(error)
            }
        }

        fetchEntries()
    }, [])
    return(
        <div className="h-full min-h-screen pt-12 px-6">
            {
                entries ? entries.map(entry => (
                    <EntryDetails key={entry._id} entry={entry}/>
                )) : <p>No entries found! - Start your journey by creating the first entry</p>
            }
        </div>
    )
}