import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StylesReset } from "./styling/reset";
import { GlobalStyles } from "./styling/globalStyles";
import { Variables } from "./styling/variables";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<StylesReset />
		<GlobalStyles />
		<Variables />
		<App />
	</React.StrictMode>
);
