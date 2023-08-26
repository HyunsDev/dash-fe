import { useRecoilValue } from "recoil";
import { styled } from "styled-components";
import { isSidebarOpenState } from "../states/isSidebarOpen.state";
import { ServerSideBar } from "./ServerSideBar";
import { ChannelSideBar } from "./ChannelSideBar/ChannelSideBar";

const AppSideBarContainer = styled.div<{ $isOpen: boolean }>`
    display: flex;
    height: calc(100dvh - 26px);

    @media (max-width: 767px) {
        width: fit-content;
        position: fixed;
        top: 0;
        left: -278px;
        transition: left 200ms;

        ${(props) =>
            props.$isOpen &&
            `
            left: 0px;
        `}
    }
`;

export function AppSideBar() {
    const isOpen = useRecoilValue(isSidebarOpenState);

    return (
        <AppSideBarContainer $isOpen={isOpen}>
            <ServerSideBar />
            <ChannelSideBar />
        </AppSideBarContainer>
    );
}
