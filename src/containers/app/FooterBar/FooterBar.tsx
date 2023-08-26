import { cv } from "opize-design-system";
import { styled } from "styled-components";
import { ServerStatusBadge } from "./containers/ServerStatusBadge";

const StyledFooterBar = styled.div`
    height: 26px;
    min-height: 26px;
    min-width: 100vw;
    padding: 0px 4px;
    border-top: solid 1px ${cv.default200};
    display: flex;
    align-items: center;
`;

export function FooterBar() {
    return (
        <StyledFooterBar>
            <ServerStatusBadge />
        </StyledFooterBar>
    );
}
