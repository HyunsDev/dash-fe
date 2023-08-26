import { styled } from "styled-components";
import { cv } from "opize-design-system";
import { useApp } from "../../hooks/useApp";

const StyledServerInfoContainer = styled.div`
    padding: 12px 12px;
    transition: 100ms;
    cursor: pointer;
    height: 60px;
    min-height: 60px;
    border-bottom: solid 1px ${cv.default200};

    &:hover {
        background-color: ${cv.default100};
    }
`;

const StyledServerInfoTitle = styled.div`
    font-size: 16px;
    font-weight: 700;
    line-height: 130%;
    user-select: none;
`;

const StyledServerInfoDescription = styled.div`
    font-size: 12px;
    color: ${cv.default500};
    user-select: none;
`;

export function ServerInfo() {
    const { currentServer } = useApp();

    return (
        <StyledServerInfoContainer>
            <StyledServerInfoTitle>
                {currentServer?.name || "이름 없음"}
            </StyledServerInfoTitle>
            <StyledServerInfoDescription>
                {currentServer?.description || "설명 없음"}
            </StyledServerInfoDescription>
        </StyledServerInfoContainer>
    );
}
