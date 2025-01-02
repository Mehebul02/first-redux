import App from "@/App";
import Tasks from "@/components/pages/Tasks";
import Users from "@/components/pages/Users";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [{
            index:true,
            element: <Tasks />
        },
        {
            path:"/users",
            element:<Users/>
        }
        ]
    }
])

export default routes