import { Link } from "react-router-dom"


export default function Navbar(){
    return(
        <div>
            <ul className="w-full px-6 py-8 flex items-center justify-between">
                <li>
                    <Link to='/'>
                        <h1 className="text-3xl">Journey</h1>
                    </Link>
                </li>
                <li>
                    <Link to='/dashboard'>Dashboard</Link>
                </li>
            </ul>
        </div>
    )
}