import React, { useState } from "react";
import baseBack from "../../config/http-base-url-back";

import * as S from "./styles";

function FollowSuggestion({ id, img, name, nickname }) {
    const [follow, setfollow] = useState(false);
    const handleClick = async () => {
        console.log("idFollow", id);
        if (follow) {
            console.log("Deixar de seguir");
            await baseBack.delete(`/${id}/FollowSuggestion`);
            setfollow(false);
        } else {
            console.log("Seguir");
            await baseBack.put(`/${id}/FollowSuggestion`);
            setfollow(true);
        }
    };
    return (
        <S.Container>
            <div>
                <S.Avatar img={img} />

                <S.Info>
                    <strong>{name}</strong>
                    <span>{nickname}</span>
                </S.Info>
            </div>

            <S.FollowButton outlined onClick={handleClick} isActive={follow}>
                Seguir
            </S.FollowButton>
        </S.Container>
    );
}

export default FollowSuggestion;
