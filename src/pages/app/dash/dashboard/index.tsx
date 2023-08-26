import { H1 } from "opize-design-system";
import { AppContainer } from "../../../../containers/app";
import dayjs from "dayjs";
import { ChannelContainer } from "../../../../components/ChannelContainer";

export function DashDashboardChannel() {
    return (
        <AppContainer>
            <ChannelContainer>
                <H1
                    style={{
                        fontSize: "20px",
                    }}
                >
                    {dayjs().format("MM월 DD일")} 대시보드
                </H1>
            </ChannelContainer>
        </AppContainer>
    );
}
