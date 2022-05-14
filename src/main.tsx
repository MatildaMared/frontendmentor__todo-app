import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<ThemeProvider>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</ThemeProvider>
);
