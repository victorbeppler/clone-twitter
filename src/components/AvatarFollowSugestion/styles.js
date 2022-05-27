import styled from "styled-components";

export const Avatar = styled.div`
    background-image: ${(element) => `url(${element.image})`};
    min-width: 49px;
    min-height: 49px;
    border-radius: 50%;
    margin-right: 10px;
`;
