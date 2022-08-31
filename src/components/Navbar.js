import { Link } from "react-router-dom"


export default function Navbar(){
    return(
        <div className="bg-[#fffffe]">
            <ul className="w-full max-w-screen-xl container mx-auto px-6 py-8 flex items-center justify-between">
                <li>
                    <Link to='/'>
                        <h1 className="text-5xl font-bold">Journey</h1>
                    </Link>
                </li>
                <li>
                    <Link to='/dashboard'>Dashboard</Link>
                </li>
            </ul>
        </div>
    )
}