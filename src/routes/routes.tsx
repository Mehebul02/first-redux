import App from "@/App";
import Tasks from "@/components/pages/Tasks";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [{
            index:true,
            element: <Tasks />
        }
        ]
    }
])

export default routes