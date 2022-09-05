import React from "react";
import Contacts from "../../shared/Contacts/Contacts";
import Titles from "../titles/titles";
import { Button, useColorMode } from "@chakra-ui/react";

const Header = ({ mobileView }) => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				...(mobileView && {
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}),
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					padding: "1rem",
					...(mobileView && {
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}),
				}}
			>
				<h1>Sam Schmitt</h1>
				<Titles />
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					...(mobileView && {
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}),
				}}
			>
				<Contacts />
				<Button onClick={() => toggleColorMode()}>
					Toggle {colorMode === "light" ? "Dark" : "Light"}
				</Button>
			</div>
		</div>
	);
};

export default Header;
