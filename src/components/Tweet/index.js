import React, { useState } from "react";
import {
    Container,
    Retweeted,
    RocketseetIcon,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Status,
    Icons,
    CommentIcon,
    RetweetIcon,
    LikeIcon,
} from "./styles";
import baseBack from "../../config/http-base-url-back";

export default function Tweet(props) {
    const [like, setLike] = useState(props.like);
    const [curtiu, setCurtiu] = useState(false);
    const [retweet, setRetweet] = useState(props.retweet);
    const [retweetado, setRetweetado] = useState(false);
    console.log("Retweets: ", props.reetweet);
    const handleLike = async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        if (curtiu) {
            await baseBack.post("/removeLikeTweet", {
                idTweet: props.idTweet,
            });
            setLike(like - 1);
            setCurtiu(false);
            return;
        } else {
            await baseBack.post("/likeTweet", {
                idTweet: props.idTweet,
            });
            setLike(like + 1);
            setCurtiu(true);
            return;
        }
    };

    const handleRetweet = async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        if (retweet) {
            await baseBack.post("/removeRetweet", {
                idTweet: props.idTweet,
            });
            setRetweet(retweet - 1);
            setRetweetado(false);
        } else {
            await baseBack.post("/retweetar", {
                idTweet: props.idTweet,
            });
            setRetweet(retweet + 1);
            setRetweetado(true);
        }
    };
    console.log("Status", curtiu);
    return (
        <Container>
            <Retweeted>
                <RocketseetIcon />
                Você retweetou
            </Retweeted>
            <Body>
                <Avatar />
                <Content>
                    <Header>
                        <strong>Victor Hugo</strong>
                        <span>@victorbeppler</span>
                        <Dot />
                        <time>27 de jun</time>
                    </Header>
                    <Description>{props.descricaoTweet}</Description>
                    <ImageContent image={props.imageUrl} />
                    <Icons>
                        <Status>
                            <CommentIcon />
                            29
                        </Status>
                        <Status>
                            <RetweetIcon onClick={handleRetweet} isActive={retweetado} />
                            {retweet}
                        </Status>
                        <Status>
                            <LikeIcon onClick={handleLike} isActive={curtiu} />
                            {like}
                        </Status>
                    </Icons>
                </Content>
            </Body>
        </Container>
    );
}
