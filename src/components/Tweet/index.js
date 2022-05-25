import React from 'react';

import { Container , Retweeted, RocketseetIcon, Body, Avatar, Content,Header,Dot, Description, ImageContent, Status, Icons, CommentIcon, RetweetIcon, LikeIcon} from './styles';

function Tweet() {
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
                <Description>
                    Foguete não tem ré
                </Description>
                <ImageContent />
                <Icons>
                    <Status>
                        <CommentIcon />
                        29
                    </Status>
                    <Status>
                        <RetweetIcon />
                        76
                    </Status>
                    <Status>
                        <LikeIcon />
                        311
                    </Status>
                </Icons>
            </Content>
            </Body>
      </Container>
  );
}

export default Tweet;