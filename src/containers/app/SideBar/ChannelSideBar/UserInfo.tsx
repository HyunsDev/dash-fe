import { Avatar, Flex, Menu, cv, useColorTheme } from "opize-design-system";
import { styled } from "styled-components";

import HyunsImage from "../../../../assets/hyuns.jpg";
import { Atom, Gear, Moon, SignOut, Sun } from "@phosphor-icons/react";

const UserInfoContainer = styled.div`
    padding: 0px 12px;
    transition: 100ms;
    height: 56px;
    min-height: 40px;
    border-top: solid 1px ${cv.default200};

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Name = styled.div`
    font-size: 14px;
    font-weight: 700;
    line-height: 100%;
`;

const Description = styled.div`
    font-size: 12px;
    color: ${cv.default500};
`;

export function UserInfo() {
    const { setColorTheme, nowColorTheme } = useColorTheme();

    const logout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };

    return (
        <UserInfoContainer>
            <Flex.Row gap="8px">
                <Avatar src={HyunsImage} size="32px" />
                <Flex.Column>
                    <Name>Hyuns</Name>
                    <Description>HyunsDev</Description>
                </Flex.Column>
            </Flex.Row>
            <Menu>
                <Menu.Trigger
                    iconOnly
                    size="small"
                    variant="tertiary"
                    shape="round"
                >
                    <Gear size={20} weight="fill" fill={cv.default400} />
                </Menu.Trigger>
                <Menu.Content>
                    <Menu.Option onClick={logout} suffix={<SignOut />}>
                        로그아웃
                    </Menu.Option>
                    <Menu>
                        <Menu.Trigger
                            size="small"
                            variant="tertiary"
                            width="180px"
                            align="start"
                            suffix={
                                nowColorTheme === "light" ? <Sun /> : <Moon />
                            }
                        >
                            테마
                        </Menu.Trigger>
                        <Menu.Content>
                            <Menu.Option
                                onClick={() => setColorTheme("light")}
                                suffix={<Sun />}
                            >
                                라이트
                            </Menu.Option>
                            <Menu.Option
                                onClick={() => setColorTheme("dark")}
                                suffix={<Moon />}
                            >
                                다크
                            </Menu.Option>
                            <Menu.Option
                                onClick={() => setColorTheme("system")}
                                suffix={<Atom />}
                            >
                                시스템
                            </Menu.Option>
                        </Menu.Content>
                    </Menu>
                </Menu.Content>
            </Menu>
        </UserInfoContainer>
    );
}
