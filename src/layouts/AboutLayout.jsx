import { NavLink, Outlet } from "react-router-dom";

const AboutLayout = () => {
    return (
        <div className="about-layout">

            <h2>About us</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, cupiditate possimus? Autem vero officiis eligendi sint quia. Non, sit adipisci!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, cupiditate possimus? Autem vero officiis eligendi sint quia. Non, sit adipisci!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, cupiditate possimus? Autem vero officiis eligendi sint quia. Non, sit adipisci!</p>


            <nav>
                <NavLink to={"faq"}>View the FAQ</NavLink>
                <NavLink to={"contact"}>Contact Us</NavLink>
            </nav>

            <Outlet />
        </div>
    );
}
 
export default AboutLayout;