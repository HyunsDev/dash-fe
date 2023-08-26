import { atom } from "recoil";

export const isSidebarOpenState = atom<boolean>({
    key: "isSidebarOpenState",
    default: false,
});
