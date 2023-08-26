import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { RootRouter } from "./pages/router";
import { OpizeWrapper } from "opize-design-system";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

function App() {
    return (
        <BrowserRouter>
            <RecoilRoot>
                <QueryClientProvider client={queryClient}>
                    <ToastContainer
                        position="bottom-right"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        draggable
                        transition={Flip}
                    />
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
