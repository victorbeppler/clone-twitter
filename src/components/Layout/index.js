import React from "react";

import Main from "../main";
import MenuBar from "../MenuBar";
import SideBar from "../SideBar";
import { Container, Wrapper } from "./styles";

function Layout() {
    return (
        <Container>
            <Wrapper>
                <MenuBar></MenuBar>
                <Main />
                <SideBar></SideBar>
            </Wrapper>
        </Container>
    );
}

export default Layout;
