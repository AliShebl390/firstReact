import {
    Outlet,
    createBrowserRouter,
    RouterProvider,
    createHashRouter,
} from "react-router-dom";
import Home from "./code/Home/Home";
import About from "./code/About/About";
import Portfolio from "./code/Portfolio/Portfolio";
import Contact from "./code/Contact/Contact";
import Layout from "./code/Layout/Layout";
import NotFound from "./code/NotFound/NotFound";

function App() {
    const routers = createBrowserRouter([
        {
            path: "",
            element: <Layout />,
            children: [
                { index: true, element: <Home /> },
                { path: "portfolio", element: <Portfolio /> },
                { path: "contact", element: <Contact /> },
                { path: "about", element: <About /> },
                { path: "*", element: <NotFound /> },
            ],
        },
    ]);
    return (
        <>
            <RouterProvider router={routers} />
        </>
    );
}

export default App;
