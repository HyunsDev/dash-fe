import { styled } from "styled-components";

export const ChannelContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (max-width: 767px) {
        padding: 16px;
    }
`;
