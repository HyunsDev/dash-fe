import { cv } from "opize-design-system";
import { styled } from "styled-components";
import { ServerInfo } from "./ServerInfo";
import { useApp } from "../../hooks/useApp";
import { IconContext } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { UserInfo } from "./UserInfo";

const ChannelSideBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 220px;
    min-width: 220px;
    height: 100%;
    background-color: ${cv.background};
    border-left: solid 1px ${cv.default200};
    border-right: solid 1px ${cv.default200};
`;

const StyledChannelsContainer = styled.div`
    padding: 6px 4px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    height: 100%;
`;

const StyledChannelButton = styled(Link)<{ $selected: boolean }>`
    display: flex;
    align-items: center;
    background-color: ${(props) =>
        props.$selected ? cv.default200 : cv.background};
    outline: none;
    border: none;
    width: 100%;
    gap: 8px;
    padding: 0px 12px;
    height: 30px;
    transition: 150ms;
    cursor: pointer;
    border-radius: 8px;
    font-size: 14px;
    text-decoration: none;
    color: ${cv.foreground};

    &:hover {
        background-color: ${cv.default100};
    }
`;

function ChannelList() {
    const { currentServer, currentChannel } = useApp();

    return (
        <StyledChannelsContainer>
            <IconContext.Provider
                value={{
                    color: cv.default500,
                    size: 16,
                    weight: "fill",
                    mirrored: false,
                }}
            >
                {currentServer?.channels.map((channel) => {
                    return (
                        <StyledChannelButton
                            $selected={
                                (currentChannel &&
                                    channel.id === currentChannel.id) ||
                                false
                            }
                            to={`/app/${currentServer?.id}/${
                                channel.id === "default" ? "" : channel.id
                            }`}
                        >
                            {channel.icon}
                            {channel.name}
                        </StyledChannelButton>
                    );
                })}
            </IconContext.Provider>
        </StyledChannelsContainer>
    );
}

export function ChannelSideBar() {
    return (
        <ChannelSideBarContainer>
            <ServerInfo />
            <ChannelList />
            <UserInfo />
        </ChannelSideBarContainer>
    );
}
