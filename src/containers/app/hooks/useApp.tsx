import { useLocation } from "react-router-dom";
import { servers } from "../data/server";

export function useApp() {
    const location = useLocation();

    const isInApp = location.pathname.startsWith("/app");
    const serverId = location.pathname.split("/")[2];
    const currentServer = servers.find((server) => server.id === serverId);
    const currentChannelId = location.pathname.split("/")[3] || "default";
    const currentChannel = currentServer?.channels.find(
        (channel) => channel.id === currentChannelId
    );

    return {
        isInApp,
        currentServer,
        currentChannel,
    };
}
