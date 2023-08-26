import { Badge } from "opize-design-system";
import { useServerStatusQuery } from "../../../../hooks/useSeverStatusQuery";

export function ServerStatusBadge() {
    const { data, isLoading, isError } = useServerStatusQuery();

    if (isLoading || !data) {
        return (
            <Badge color="default" size="small" dot variant="secondary">
                Loading
            </Badge>
        );
    }

    if (isError) {
        return (
            <Badge color="red" size="small" dot variant="secondary">
                Error
            </Badge>
        );
    }

    const res = data.reduce(
        (acc: boolean, cur) => acc && cur.lastCheckStatus === "good",
        true
    );
    if (res) {
        return (
            <Badge color="green" size="small" dot variant="secondary">
                Good
            </Badge>
        );
    } else {
        return (
            <Badge color="red" size="small" dot variant="secondary">
                Bad
            </Badge>
        );
    }
}
