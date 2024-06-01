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

type UlProps = {
    open: boolean;
  };

export const Ul = styled.ul<UlProps>`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    a {
        text-decoration: none;
        color: inherit;
    }
    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: #0D2538;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        
        li {
            color: #fff;
        }
    }
    
    li {
        padding: 18px 10px;
    }
`


type BurgerProps = {
    open: boolean;
  };


export const BurguerStyle = styled.div<BurgerProps>`
    width: 2rem;
    height: 2rem;
    position: fixed;    
    top: 15px;
    right: 20px;
    display: none;
    z-index: 20;
    
    @media(max-width: 768px){
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }

    div{
        width: 2rem;
        height: 0.25rem;
        background-color: ${({open}) => (open ? '#ccc' : '#333')};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;
    

        &:nth-child(1){
            transform: ${({open}) => (open ? 'rotate(45deg)' : 'rotate(0)')};
        }
        &:nth-child(2){
            transform: ${({open}) => (open ? 'translateX(100%)' : 'translateX(0)')};
            opacity: ${({open}) => (open ? 0 : 1)};
        }
        &:nth-child(3){
            transform: ${({open}) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
        }
    }

`