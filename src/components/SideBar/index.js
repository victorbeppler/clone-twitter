import React from "react";
import List from "../List";
import FollowSuggestion from "../FollowSuggestion";

import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from "./styles";
import FollowSugestion from "../FollowSuggestion";
function SideBar() {
    return (
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Buscar no Twitter" />
                <SearchIcon />
            </SearchWrapper>
            <Body>
                <List
                    title="Talvez você curta"
                    elements={[
                        <FollowSuggestion name="Luiz Batanero" nickname="@luizbatanero" />,
                        <FollowSuggestion name="Pedro Henrique" nickname="@pedrohenrique" />,
                        <FollowSugestion name="Lucas Medeiros" nickname="@lucasmedeiros" />,
                    ]}
                />
            </Body>
        </Container>
    );
}

export default SideBar;
