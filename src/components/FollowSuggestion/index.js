import React from "react";

import * as S from "./styles";

function FollowSuggestion({ img ,name, nickname }) {
    return (
        <S.Container>
            <div>
                <S.Avatar img={img} />

                <S.Info>
                    <strong>{name}</strong>
                    <span>{nickname}</span>
                </S.Info>
            </div>

            <S.FollowButton outlined>Seguir</S.FollowButton>
        </S.Container>
    );
}

export default FollowSuggestion;
