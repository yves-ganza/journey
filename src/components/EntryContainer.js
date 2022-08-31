export default function EntryContainer({children}){
    return(
        <div className="bg-[#eff0f3] w-full max-w-[425px] p-6 flex flex-col gap-y-1 border border-right-width-1">
            <h3 className="mb-4 text-xl">All entries</h3>
            {children}
        </div>
    )
}