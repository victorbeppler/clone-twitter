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
    const [likeCount, setLike] = useState(props.like);
    const [curtiu, setCurtiu] = useState(false);
    const [retweetCount, setRetweet] = useState(props.retweet);
    const [retweetado, setRetweetado] = useState(false);
    const [commentCount, setComment] = useState(props.comment);
    const [comentado, setComentado] = useState(false);

    const handleLike = async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        if (curtiu) {
            await baseBack.delete(`/tweet/${props.idTweet}/favorite`);
            setLike(likeCount - 1);
            setCurtiu(false);
            return;
        } else {
            await baseBack.post(`/tweet/${props.idTweet}/favorite`);
            setLike(likeCount + 1);
            setCurtiu(true);
            return;
        }
    };

    const handleRetweet = async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        if (retweetado) {
            await baseBack.post(`/tweets/${props.idTweet}/retweets`);
            setRetweet(retweetCount - 1);
            setRetweetado(false);
            return;
        } else {
            await baseBack.post(`/tweets/${props.idTweet}/retweets`);
            setRetweet(retweetCount + 1);
            setRetweetado(true);
            return;
        }
    };

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
                            {retweetCount}
                        </Status>
                        <Status>
                            <LikeIcon onClick={handleLike} isActive={curtiu} />
                            {likeCount}
                        </Status>
                    </Icons>
                </Content>
            </Body>
        </Container>
    );
}
