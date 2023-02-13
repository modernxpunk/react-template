import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/_error";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <Error />,
	},
]);

export default router;
