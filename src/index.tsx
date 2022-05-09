import * as ReactDOMClient from "react-dom/client";

import App from "./App";
import { ContextProvider } from "./hooks/resultContext";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
	<ContextProvider>
		<App />
	</ContextProvider>
);
