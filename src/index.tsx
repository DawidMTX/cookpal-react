import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import App from "./App";
import { Providers } from "./store/provider";


const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<Providers>
			<App />
		</Providers>
	</React.StrictMode>
);
