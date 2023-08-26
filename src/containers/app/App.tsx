import { styled } from "styled-components";
import { FooterBar } from "./FooterBar";
import { useRecoilState } from "recoil";
import { isSidebarOpenState } from "./states/isSidebarOpen.state";
import { useSwipeable } from "react-swipeable";
import { AppSideBar } from "./SideBar/SideBar";

const StyledAppContainer = styled.div`
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    @media (max-width: 767px) {
        max-width: fit-content;
        width: fit-content;
        overflow-x: hidden;
    }

    max-height: 100%;
    min-height: 100dvh;
    height: 100dvh;
`;

const StyledAppContainerContent = styled.div`
    height: calc(100% - 26px);
    width: 100%;
    @media (max-width: 767px) {
        width: fit-content;
    }
    display: flex;
`;

const StyledAppContainerContentChannel = styled.div<{ $isOpen: boolean }>`
    width: 100%;
    overflow-y: scroll;
    @media (max-width: 767px) {
        position: fixed;
        height: calc(var(--vh) * 100 - 22px);
        top: 0;
        left: 0px;
        transition: 200ms;
        ${(props) => props.$isOpen && `left: 278px;`}
    }
`;

export interface AppContainerProps {
    children?: React.ReactNode;
}
export function AppContainer({ children }: AppContainerProps) {
    const [isOpen, setIsOpen] = useRecoilState(isSidebarOpenState);
    const swipeHandler = useSwipeable({
        onSwipedLeft: () => setIsOpen(false),
        onSwipedRight: () => setIsOpen(true),
        touchEventOptions: {
            passive: false,
        },
    });

    return (
        <StyledAppContainer {...swipeHandler}>
            <StyledAppContainerContent>
                <AppSideBar />
                <StyledAppContainerContentChannel $isOpen={isOpen}>
                    {children}
                </StyledAppContainerContentChannel>
            </StyledAppContainerContent>
            <FooterBar />
        </StyledAppContainer>
    );
}
