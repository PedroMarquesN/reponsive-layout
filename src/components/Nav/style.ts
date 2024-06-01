import styled from "styled-components";

export const Nav = styled.nav`
    width: 100%;
    height: 65px;
    border-bottom: 2px solid #f1f1f1;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    
    .logo {
         padding: 15px 0;
    }

`

export const Ul = styled.ul`;
        display: flex;
        flex-flow: row nowrap;
    a {
        text-decoration: none;
        color: inherit;
    }
    @media (max-width: 768px) {
        display: none;
        flex-flow: column nowrap;
        background-color: #0D2538;
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        
        li {
            color: #fff;
        }
    }
    
    li {
        padding: 18px 10px;
    }
`


export const BurguerStyle = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;    
    top: 15px;
    right: 20px; 
    div{
        width: 2rem;
        height: 0.25rem;
        background-color: #333;
    }

`