import { Avatar, Tooltip, cv } from "opize-design-system";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Logo from "../../../assets/logo_circle.png";

const ServerSideBarContainer = styled.div`
    width: 58px;
    min-width: 58px;
    height: 100%;
    background-color: ${cv.background};
    padding: 8px 0px;

    display: flex;
    align-items: center;
    flex-direction: column;
`;

const ServerSideBarIcon = styled.div`
    cursor: pointer;
    transition: transform 100ms, border 200ms;
    width: 40px;
    height: 40px;
    box-sizing: content-box;
    border: solid 4px transparent;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;

    img {
        border-radius: 30px;
        width: 100%;
        height: 100%;
    }

    &:hover {
        border: solid 4px ${cv.blue_background};
    }

    &:active {
        transform: translateY(2px);
    }
`;

export function ServerSideBar() {
    return (
        <ServerSideBarContainer>
            <Link to={"/app/dash"}>
                <Tooltip content="Hyuns Dash" direction="top">
                    <ServerSideBarIcon>
                        <Avatar size="40px" src={Logo} />
                    </ServerSideBarIcon>
                </Tooltip>
            </Link>
        </ServerSideBarContainer>
    );
}
