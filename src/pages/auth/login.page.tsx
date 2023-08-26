import {
    Avatar,
    Button,
    CenterLayout,
    Flex,
    H1,
    Input,
} from "opize-design-system";
import { useForm } from "react-hook-form";
import Logo from "../../assets/logo_circle.png";
import { useMutation } from "react-query";
import { client } from "../../lib/client";
import { toast } from "react-toastify";
import { APIResponseError } from "hyuns-api-v2-client";
import { useNavigate } from "react-router-dom";

interface LoginForm {
    id: string;
    password: string;
}

export function LoginPage() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>();

    const { mutate, isLoading } = useMutation(
        (data: LoginForm) => client.auth.login(data),
        {
            onSuccess: (data) => {
                localStorage.setItem("token", data.token);
                navigate("/app");
            },
            onError: (error) => {
                if (error instanceof APIResponseError) {
                    if (error?.status === 404) {
                        toast.error("존재하지 않는 유저에요");
                    } else if (error.status == 400) {
                        if (error.body.code === "WRONG_PASSWORD") {
                            toast.error("비밀번호가 틀렸어요");
                        }
                    }
                }
            },
        }
    );

    const submit = (data: LoginForm) => {
        mutate(data);
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <CenterLayout minHeight="100dvh" width="300px">
                <Flex
                    direction="column"
                    align="center"
                    justify="center"
                    width="100%"
                    gap="8px"
                >
                    <Avatar src={Logo} size="40px" />
                    <H1
                        style={{
                            fontSize: "32px",
                        }}
                    >
                        Dash Login
                    </H1>
                    <Input
                        {...register("id", {
                            required: "필수 항목이에요",
                        })}
                        label="id"
                        placeholder="UserId"
                        width="100%"
                        error={errors.id?.message}
                    />
                    <Input
                        {...register("password", {
                            required: "필수 항목이에요",
                        })}
                        label="password"
                        placeholder="Password"
                        type="password"
                        width="100%"
                        error={errors.password?.message}
                    />
                    <Button
                        type="submit"
                        width="100%"
                        variant="primary"
                        isLoading={isLoading}
                    >
                        Login
                    </Button>
                </Flex>
            </CenterLayout>
        </form>
    );
}
