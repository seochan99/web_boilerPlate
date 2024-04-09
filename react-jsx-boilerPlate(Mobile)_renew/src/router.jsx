import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { styled } from "styled-components";
import NavBar from "./components/layouts/NavBar";
import Main from "./pages/main/Main";

const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 430px;
    width: 100%;
    min-height: 100vh;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
`;
const Layout = () => {
    return (
        <>
            <Wrapper>
                <NavBar />
                <Outlet />
            </Wrapper>
        </>
    );
};

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index path="/" element={<Main />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
