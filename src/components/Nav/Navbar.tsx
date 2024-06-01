import {Nav} from "./style.ts";
import Burguer from "./Burguer.tsx";

const Navbar = () => {
    return (
        <Nav>
            <div className="logo">
                <h1>Navbar</h1>
            </div>
            <Burguer />
        </Nav>
);
}

export default Navbar;