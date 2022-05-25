import React from "react";

import ProfilePage from "../ProfilePage";

import {
    Container,
    Header,
    BackIcon,
    ProfileInfo,
    ButtonMenu,
    HomeIncon,
    SearchIncon,
    BellIcon,
    EmailIcon,
} from "./styles";

function main() {
    return ( 
        <Container>
            <Header>
                <button>
                    <BackIcon />
                </button>
                <ProfileInfo>
                    <strong>Victor Hugo</strong>
                    <span>15 Tweets</span>
                </ProfileInfo>
            </Header>
            <ProfilePage />
            <ButtonMenu>
                <HomeIncon className="active"/>
                <SearchIncon />
                <BellIcon />
                <EmailIcon />
            </ButtonMenu>
        </Container>
    );
}

export default main;
