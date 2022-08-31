import useJourneyContext from "../hooks/useJourneyContext"

export default function EntryDetails({entry}){

    const {dispatch} = useJourneyContext()

    const shortText = (size, text) => {
       return text.length > size ? text.slice(0,size) + "..." : text
    }

    const handleClick = async () => {
        dispatch({type: 'SET_CURRENT_ENTRY', payload: entry})
    }

    return(
        <div onClick={handleClick} className="cursor-pointer block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">{shortText(12, entry.title)}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{shortText(48, entry.data)}</p>
            <p className="font-normal text-gray-700 dark:text-gray-400">{entry.createdAt.toString().slice(0,10).split('-').reduce((p, c) => p+'/'+c)}</p>
        </div>

    )
}