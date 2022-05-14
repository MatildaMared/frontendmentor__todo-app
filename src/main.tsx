import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StylesReset } from "./styling/reset";
import { GlobalStyles } from "./styling/globalStyles";
import { Variables } from "./styling/variables";
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<ThemeProvider>
		<React.StrictMode>
			<Variables />
			<StylesReset />
			<GlobalStyles />
			<App />
		</React.StrictMode>
	</ThemeProvider>
);
