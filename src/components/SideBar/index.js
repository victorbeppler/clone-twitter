import React, { useEffect, useState } from "react";
import List from "../List";
import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from "./styles";
import FollowSugestion from "../FollowSuggestion";
import New from "../News";
import baseBack from "../../config/http-base-url-back";

function SideBar() {
    const [suggestion, setSuggestion] = useState([]);
    useEffect(() => {
        baseBack.get("/FollowSuggestion").then(({ data }) => {
            setSuggestion(data.followSuggestion);
            console.log("Busca", data.followSuggestion);
        });
    }, []);
    return (
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Buscar no Twitter" />
                <SearchIcon />
            </SearchWrapper>
            <Body>
                <List
                    title="Talvez você curta"

                    elements= {suggestion.map((suggestion) => (
                        <FollowSugestion
                            id={suggestion._id}
                            img={suggestion.imageURL}
                            name={suggestion.name}
                            nickname={suggestion.nickname}
                            />
                    ))}
                />
                <List title="O que está acontecendo" elements={[<New />, <New />, <New />]} />
            </Body>
        </Container>
    );
}

export default SideBar;
