export default function EntryDetails({entry}){
    const shortText = (size, text) => {
       return text.length > size ? text.slice(0,size) + "..." : text
    }

    return(
        <div className="bg-[#fffffe] px-4 pt-4 shadow gap-4 h-48 w-48">
            <div className="mb-4">
                <h3 className="font-semibold block text-[#0d0d0d]">{shortText(12, entry.title)}</h3>
                <p className="font-thin text-xs text-[#2a2a2a]">{entry.createdAt.toString().slice(0,10).split('-').reduce((p, c) => p+'/'+c)}</p>
            </div>
            <p className="break-all block text-[#2a2a2a]">{shortText(48, entry.data)}</p>
        </div>
    )
}