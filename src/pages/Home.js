import { useEffect } from "react"
import EntryContainer from "../components/EntryContainer"
import EntryDetails from "../components/EntryDetails"
import NewEntryForm from "../components/NewEntryForm"
import useJourneyContext from "../hooks/useJourneyContext"
import { registerServiceWorker } from "../utils"

export default function Home(){
    const {state, dispatch} = useJourneyContext()
    const entries = state.entries

    useEffect(() => {
        const fetchEntries = async () => {
            try {
                const response = await fetch('/api/journey/')
                
                if(!response.ok) return
                
                const responseJson = await response.json()

                dispatch({type: 'SET_ENTRIES', payload: responseJson})  
            } catch (error) {
                console.log(error)
            }
        }
        fetchEntries()

    }, [])

    return(
        <div className="min-h-screen flex">
            <aside className="bg-gray-50 dark:bg-gray-700 w-1/3 p-6 flex flex-col gap-y-1">
                <h4 className="mb-4 text-2xl font-semibold dark:text-white">All entries</h4>
                {
                    entries ? entries.map(entry => (
                        <EntryDetails key={entry._id} entry={entry}/>
                    )) : <p>No entries found! - Start your journey by creating the first entry</p>
                }
            </aside>
            <main className="p-6 flex-1 bg-white dark:bg-gray-900">
                <NewEntryForm />
            </main>
        </div>
    )
}