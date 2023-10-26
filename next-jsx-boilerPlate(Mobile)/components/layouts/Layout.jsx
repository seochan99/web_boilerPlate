import Footer from "./Footer";
import HeadTitle from "./Head";
import NavBar from "./NavBar";
import styled from "styled-components";

const Wrapper = styled.div`
    max-width: 430px;
    width: 100%;
    min-height: 100vh;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
`

const Content = styled.div`
    flex: 1 0 auto;
`

export default function Layout( {children} ){
        return(
            <Wrapper>
                <HeadTitle/>
                <NavBar />
                <Content>{children}</Content>
                <Footer/>
            </Wrapper>
        )
}