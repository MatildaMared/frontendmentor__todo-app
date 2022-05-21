import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import store from "./app/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<ThemeProvider>
		<Provider store={store}>
			<App />
		</Provider>
	</ThemeProvider>
);
