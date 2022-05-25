import styled, { css } from "styled-components";
import { LocationOn, Cake } from "../../styles/Icons";
import Button from "../Button";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    max-width: 1280px;
    overflow-y: auto;

    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }
`;
export const Banner = styled.div`
    flex-shrink: 0;
    width: 100%;
    height: min(33vw, 199px);

    background-image: url("https://media-exp1.licdn.com/dms/image/C4D16AQGnaoPussdhig/profile-displaybackgroundimage-shrink_200_800/0/1632225854783?e=1658966400&v=beta&t=wMo1hP6710QoPbbU5AoPQHkldYh7-3PTWf_9fpKmWV4");
    background-size: contain;

    position: relative;
`;
export const Avatar = styled.div`
    width: max(45px, min(135px, 22vw));
    height: max(45px, min(135px, 22vw));

    border: 3.75px solid var(--primary);
    background-image: url("https://media-exp1.licdn.com/dms/image/C4E03AQHRS8BwawK2cg/profile-displayphoto-shrink_200_200/0/1641951873276?e=1658966400&v=beta&t=zXejpsL4ySEviPslg92sbPYXQZDHbm-qAfGghFj6NpA");
    border-radius: 50%;
    background-size: contain;

    position: absolute;
    bottom: max(-60px, -10vw);
    left: 15px;
`;
export const ProfileData = styled.div`
    padding: min(calc(10vw + 7px), 67px) 16px 0;

    display: flex;
    flex-direction: column;

    position: relative;
    > h1 {
        font-weight: bold;
        font-size: 19px;
    }
    > h2 {
        font-weight: normal;
        font-size: 15px;
        color: var(--gray);
    }
    > p {
        font-size: 15px;
        margin-top: 11px;
        > a {
            text-decoration: none;
            color: var(--twitter);
        }
    }
    > ul {
        list-style: none;
        margin-top: 10px;
        margin-bottom: 10px;
        > li {
            display: flex;
            align-items: center;

            font-size: 15px;
            color: var(--gray);
            > svg {
                fill: var(--gray);
                margin-right: 5px;
            }
        }
    }
`;

const iconsCSS = css`
    width: 20px;
    height: 20px;

    color: var(--gray);
`;

export const LocationIcon = styled(LocationOn)`
    ${iconsCSS}
`;
export const CakeIcon = styled(Cake)`
    ${iconsCSS}
`;

export const Followage = styled.div`
    display: flex;
    > span {
        font-size: 15px;
        color: var(--gray);

        & + span {
            margin-left: 20px;
        }
    }
`;

export const EditButton = styled(Button)`
    position: absolute;
    top: 2vw;
    right: 7px;

    padding: 4px 16px;

    @media (min-width: 320px) {
        top: 10px;
        padding: 10px 19px;
        font-size: 15px;
    }
`;
