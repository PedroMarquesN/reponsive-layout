import { useState } from "react";
import {BurguerStyle} from "./style.ts";

const Burguer = () => {
    const [open, setOpen] = useState(false);
    return (
        <BurguerStyle open={open} onClick={() => setOpen(!open)}>
        <div className="burguer"></div>
        <div className="burguer"></div>
        <div className="burguer"></div>
        </BurguerStyle>
    );
}

export default Burguer;