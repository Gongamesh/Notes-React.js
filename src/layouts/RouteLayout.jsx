import { NavLink, Outlet } from "react-router-dom";

const RouteLayout = () => {
    return ( 
        <div className="root-layout">
            <header>
                <nav>
                    <h1>Notes</h1>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="notes">Notes</NavLink>
                    <NavLink to="new">New note</NavLink>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
     );
}
 
export default RouteLayout;