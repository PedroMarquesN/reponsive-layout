import {Nav} from "./style.ts";
import RightNav from "./RightNav.tsx";

const Navbar = () => {
    return (
        <Nav>
            <div className="logo">
                <h1>Navbar</h1>
            </div>
            <RightNav />
        </Nav>
);
}

export default Navbar;