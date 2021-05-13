import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { TodosProvider } from "./providers/TodosProvider";

ReactDOM.render(
	<TodosProvider>
		<App />
	</TodosProvider>,
	document.getElementById("root")
);
