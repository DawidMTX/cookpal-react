import { RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import RootLayout from "./components/pages/RootLayout";
import DetailPage, {
	loader as detailLoader,
} from "./components/pages/DetailPage";
import ErrorPage from "./components/pages/ErrorPage";
import AccountPage from "./components/pages/AccountPage";
import CreateAccount from "./components/pages/CreateAccount";

const routers = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: "/", element: <HomePage /> },
			{
				path: "/detail/:recipeID",
				element: <DetailPage />,
				loader: detailLoader,
			},
			{path: "/account", element: <AccountPage />}
		],
	},
	{ path: "/createaccount", element: <CreateAccount/> },
]);

function App() {
	return <RouterProvider router={routers} />;
}

export default App;
