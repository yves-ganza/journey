import { useEffect, useState } from "react"
import EntryDetails from "../components/EntryDetails"
import NewEntryForm from "../components/NewEntryForm"
import useJourneyContext from "../hooks/useJourneyContext"

export default function Home(){
    const {state: {entries}, dispatch} = useJourneyContext()

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
        <div className="min-h-screen pt-12 px-6 grid md:flex md:flex-row-reverse md:justify-between gap-6">
            <div>
                <NewEntryForm />
            </div>
            <div className="max-w-3xl grid lg:grid-cols-2 xl:grid-cols-3 content-start justify-center gap-y-2 lg:gap-x-8 xl:gap-x-4 pb-4">
                {
                    entries ? entries.map(entry => (
                        <EntryDetails key={entry._id} entry={entry}/>
                    )) : <p>No entries found! - Start your journey by creating the first entry</p>
                }
            </div>
        </div>
    )
}