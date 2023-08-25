import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { RootRouter } from "./pages/router";
import { OpizeWrapper } from "opize-design-system";

const queryClient = new QueryClient();

function App() {
    return (
        <BrowserRouter>
            <RecoilRoot>
                <QueryClientProvider client={queryClient}>
                    <OpizeWrapper>
                        <RootRouter />
                    </OpizeWrapper>
                    <ReactQueryDevtools />
                </QueryClientProvider>
            </RecoilRoot>
        </BrowserRouter>
    );
}

export default App;
