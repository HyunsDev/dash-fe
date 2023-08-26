import { useQuery } from "react-query";
import { client } from "../lib/client";
import { APIResponseError } from "hyuns-api-v2-client";
import { toast } from "react-toastify";

export function useServerStatusQuery() {
    const query = useQuery(
        ["app", "dash", "serverStatus"],
        () => client.server.list({}),
        {
            onError: (error) => {
                if (error instanceof APIResponseError) {
                    if (error?.status === 401) {
                        toast.error("로그인을 다시 진행해주세요");
                        localStorage.removeItem("token");
                        window.location.reload();
                        return;
                    }
                }
                throw error;
            },
        }
    );
    return query;
}
