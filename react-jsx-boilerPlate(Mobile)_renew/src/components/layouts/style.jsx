import { styled } from "styled-components";

export const NavBarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 60px;   
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24);  
    position: relative;
    z-index: 1;
    @media (max-width: 768px) {
        padding: 0 10px;
    }
`
