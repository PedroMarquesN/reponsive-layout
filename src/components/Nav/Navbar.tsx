import {Nav} from "./style.ts";
import RightNav from "./RightNav.tsx";
import Burguer from "./Burguer.tsx";

const Navbar = () => {
    return (
        <Nav>
            <div className="logo">
                <h1>Navbar</h1>
            </div>
            <Burguer />
            <RightNav />
        </Nav>
);
}

export default Navbar;