import styled, { css } from "styled-components";

import { Home, Notifications, Email, FavoriteBorder, Person, ExitToApp, Twitter } from "../../styles/Icons";

export const Container = styled.div`
    display: none;

    @media (min-width: 500px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: sticky;
        top: 0;
        left: 0;

        padding: 9px 19px 20px;

        max-height: 100vh;
        overflow-y: auto;
    }
`;
export const Topside = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 1280px) {
        align-items: flex-start;
    }
`;
export const Logo = styled(Twitter)`
    width: 41px;
    height: 41px;

    > path {
        fill: var(--twitter);
    }
    align-self: right;
    margin-bottom: 20px;
`;
export const MenuButton = styled.button`
    display: flex;
    align-items: center;
    flex-shrink: 0;

    > span {
        display: none;
    }
    @media (min-width: 1280px) {
        > span {
            display: inline;
            margin-left: 19px;
            font-weight: bold;
            font-size: 19px;
        }
    }

    padding: 8.25px 0;
    outline: 0;
    & + button {
        margin-top: 16.5px;
    }

    & + button:last-child {
        margin-top: 33px;
        width: 40px;
        height: 40px;

        > span {
            display: none;
        }

        @media (min-width: 1280px) {
            width: 100%;
            height: unset;
            > span {
                display: inline;
            }
        }
        padding-right: 15px;
    }

    cursor: pointer;
    border-radius: 25px;

    &:hover {
        background: var(--twitter-dark-hover);
    }

    &:hover,
    &.active {
        span,
        svg {
            color: var(--twitter);
            fill: var(--twitter);
        }
    }
`;

const iconsCSS = css`
    flex-shrink: 0;
    width: 30px;
    height: 30px;
    color: var(--white);
`;
export const HomeIcon = styled(Home)`
    ${iconsCSS}
`;
export const BellIcon = styled(Notifications)`
    ${iconsCSS}
`;
export const EmailIcon = styled(Email)`
    ${iconsCSS}
`;
export const FavoriteIcon = styled(FavoriteBorder)`
    ${iconsCSS}
`;
export const ProfileIcon = styled(Person)`
    ${iconsCSS}
`;
export const Botside = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
`;
export const Avatar = styled.div`
    width: 39px;
    height: 39px;

    flex-shrink: 0;
    border-radius: 50%;

    background-image: url("https://media-exp1.licdn.com/dms/image/C4E03AQHRS8BwawK2cg/profile-displayphoto-shrink_200_200/0/1641951873276?e=1658966400&v=beta&t=zXejpsL4ySEviPslg92sbPYXQZDHbm-qAfGghFj6NpA");
    background-size: contain;
`;
export const ProfileData = styled.div`
    display: none;

    @media (min-width: 1280px) {
        display: flex;
        flex-direction: column;

        margin-left: 10px;
        font-size: 14px;

        >span {
            color: var(--gray);
        }
`;

export const ExitIcon = styled(ExitToApp)`
    display: none;
    @media (min-width: 1280px) {
        display: inline-block;
        width: 25px;
        height: 25px;
        color: var(--white);
        margin-left: 30px;
        cursor: pointer;
        &:hover {
            > path {
                color: var(--like);
            }
        }
    }
`;
