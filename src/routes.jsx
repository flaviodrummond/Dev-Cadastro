import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import ListUser from "./Pages/ListUser";

const router = createBrowserRouter([
    {

        path: '/',
        element: <Home />
    },

    {
        path: '/lista-de-clientes',
        element: <ListUser />
    }
])

export default router