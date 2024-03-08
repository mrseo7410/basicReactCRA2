import { Link, NavLink } from "react-router-dom"

const Header = () => {
    return(
        <nav className="flex justify-between relative items-center font-mono h-16">
            <Link to="/" className="pl-8 text-xl font-bold">OracleCava</Link>
            <div className="pr-8 font-semibold">
                <NavLink className={(
                    { isActive }) => isActive ? 
                        "active-link" : "p-4"} to="/">Home
                </NavLink>
                <NavLink className={(
                    { isActive }) => isActive ? 
                        "active-link" : "p-4"} to="/Cars">Cars
                </NavLink>
                <NavLink className={(
                    { isActive }) => isActive ? 
                        "active-link" : "p-4"} to="/New">New Car
                </NavLink>
            </div>
        </nav>
    )
}
export default Header