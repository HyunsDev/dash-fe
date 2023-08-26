import React from "react";
import {
    Bell,
    Database,
    Folder,
    Image,
    PuzzlePiece,
    Vault,
    Toolbox,
    Bookmark,
    Broadcast,
    PaperPlaneTilt,
} from "@phosphor-icons/react";

import DashIcon from "../../../assets/logo_circle.png";

export type Channel = {
    id: string;
    name: string;
    icon: React.ReactNode;
};

export type Server = {
    id: string;
    name: string;
    description: string;
    icon: string;

    channels: Channel[];
};

export const servers: Server[] = [
    {
        id: "dash",
        name: "Hyuns Dash",
        description: "dash.hyuns.dev",
        icon: DashIcon,
        channels: [
            {
                id: "default",
                name: "대시보드",
                icon: <PuzzlePiece />,
            },
            {
                id: "message",
                name: "알림 & 메세지",
                icon: <Bell />,
            },
            {
                id: "var",
                name: "변수",
                icon: <Database />,
            },
            {
                id: "env",
                name: "환경변수",
                icon: <Vault />,
            },
            {
                id: "resource",
                name: "대시보드",
                icon: <Folder />,
            },
            {
                id: "image",
                name: "이미지",
                icon: <Image />,
            },
            {
                id: "tools",
                name: "도구",
                icon: <Toolbox />,
            },
            {
                id: "bookmark",
                name: "북마크",
                icon: <Bookmark />,
            },
            {
                id: "request",
                name: "리퀘스트",
                icon: <Broadcast />,
            },
            {
                id: "lambda",
                name: "람다",
                icon: <PaperPlaneTilt />,
            },
        ],
    },
];
