import React from "react";
import { ColorModeScript, ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogsPage from "./pages/blogs";
import chakraTheme from "./styles/theme";
import Home from "./pages/home";
import Header from "./components/homeComponents/header/header";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<BrowserRouter>
		<ChakraProvider theme={chakraTheme}>
			<ColorModeScript initialColorMode={chakraTheme.config.initialColorMode} />
			<body>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='blogs' element={<BlogsPage />} />
				</Routes>
			</body>
		</ChakraProvider>
	</BrowserRouter>
);
