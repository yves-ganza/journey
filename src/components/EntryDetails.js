export default function EntryDetails({entry}){
    return(
        <div className="bg-[#fffffe] p-4 shadow grid gap-4">
            <h3 className="font-bold">{entry.title} - <span className="font-thin">{entry.createdAt.toString().slice(0,10).split('-').reduce((p, c) => p+'/'+c)}</span></h3>
            <p>{entry.data}</p>
            <p></p>
        </div>
    )
}