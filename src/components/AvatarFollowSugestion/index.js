import React from "react";

import * as S from "./styles";

function AvatarFollowSugestion() {
    const elements = [{ image: "https://media-exp1.licdn.com/dms/image/C4E03AQHRS8BwawK2cg/profile-displayphoto-shrink_200_200/0/1641951873276?e=1658966400&v=beta&t=zXejpsL4ySEviPslg92sbPYXQZDHbm-qAfGghFj6NpA" },{ image: "https://media-exp1.licdn.com/dms/image/C4E03AQHRS8BwawK2cg/profile-displayphoto-shrink_200_200/0/1641951873276?e=1658966400&v=beta&t=zXejpsL4ySEviPslg92sbPYXQZDHbm-qAfGghFj6NpA" },{ image: "https://media-exp1.licdn.com/dms/image/C4E03AQHRS8BwawK2cg/profile-displayphoto-shrink_200_200/0/1641951873276?e=1658966400&v=beta&t=zXejpsL4ySEviPslg92sbPYXQZDHbm-qAfGghFj6NpA" }];
    return (
        <>
            {elements.map((element) => (
                <S.Avatar img={element.image} />
            ))}
        </>
    );
}

export default AvatarFollowSugestion;
