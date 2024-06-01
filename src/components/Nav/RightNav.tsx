import {Ul} from "./style.ts";

type RightNavProps = {
    open: boolean;
  };
  

const RightNav = ({open}:RightNavProps) => {
    return (
            <Ul open={open}>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About US</a></li>
                <li><a href="/contact">Contact US</a></li>
                <li><a href="/sign-in">Sign In</a></li>
                <li><a href="/sign-up">Sign Up</a></li>
            </Ul>
    )
}
export default RightNav;