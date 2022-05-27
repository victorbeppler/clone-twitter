import React from "react";
import List from "../List";

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
                        <FollowSugestion img="https://pps.whatsapp.net/v/t61.24694-24/167131401_463684585131014_7151050453866434990_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVyDrU4WQy3Z8QhAcKxKmQLxASKs__wEgyRH9ZTbAQC8Yg&oe=62A20BE9" name="Gabriel Santini" nickname="@gabrielsantini" />,
                        <FollowSugestion img="https://media-exp1.licdn.com/dms/image/C5603AQGcHCqhtEhK8Q/profile-displayphoto-shrink_200_200/0/1612464940883?e=1658966400&v=beta&t=_IDfqEr_21rntwBrXMxaqM3_kj2pJw-FHcUX2TO4imc" name="João Vitor" nickname="@joaovitor" />,
                        <FollowSugestion img="https://pps.whatsapp.net/v/t61.24694-24/76909384_218977072497713_4486627643391365168_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=66460dc186088337c29f55cdac1e8375&oe=62A0D1A9" name="Lucas Medeiros" nickname="@lucasmedeiros" />,
                    ]}
                />
            </Body>
        </Container>
    );
}

export default SideBar;
