import React from "react";
import { ColorModeScript, ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogsPage from "./pages/blogs";
import chakraTheme from "./styles/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<ChakraProvider theme={chakraTheme}>
			<ColorModeScript initialColorMode={chakraTheme.config.initialColorMode} />
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='blogs' element={<BlogsPage />} />
			</Routes>
		</ChakraProvider>
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
