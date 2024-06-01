import { useState } from "react";
import { BurguerStyle } from "./style.ts";
import RightNav from "./RightNav.tsx";

const Burguer = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <BurguerStyle open={open} onClick={() => setOpen(!open)}>
        <div className="burguer"></div>
        <div className="burguer"></div>
        <div className="burguer"></div>
      </BurguerStyle>
      <RightNav open={open}/>
    </>
  );
};

export default Burguer;
