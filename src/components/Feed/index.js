import React, { useEffect, useState } from "react";

import { Container, Tab, Tweets } from "./styles";
import Tweet from "../Tweet";
import baseBack from "../../config/http-base-url-back";

function Feed() {
    const [tweets, setTweet] = useState([]);
    useEffect(() => {
        baseBack.get("/tweets").then(({ data }) => {
            setTweet(data.tweet);
            console.log("Busca", data.tweet);
        });
    }, []);
    console.log("State", tweets);
    return (
        <Container>
            <Tab>Tweets</Tab>
            <Tweets>
                {tweets.map((tweet) => (
                    <Tweet
                        idTweet={tweet._id}
                        descricaoTweet={tweet.descricaoTweet}
                        like={tweet.likes}
                        imageUrl={tweet.imageURL}
                        dataPublicacao={tweet.date}
                        retweet={tweet.retweets}
                        comments={tweet.comments}
                    />
                ))}
            </Tweets>
        </Container>
    );
}

export default Feed;
