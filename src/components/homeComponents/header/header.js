import React, { useEffect, useState } from "react";
import Contacts from "../../shared/Contacts/Contacts";
import Titles from "../titles/titles";
import {
	Box,
	Container,
	IconButton,
	theme,
	useColorMode,
} from "@chakra-ui/react";
// import styles from "./header.module.css";
import { FaMoon, FaSun } from "react-icons/fa";
import logo from "../../../assets/images/icon.png";
import { useNavigate } from "react-router-dom";
import chakraTheme from "../../../styles/theme";

const Header = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const [state, setState] = useState({ mobileView: false });
	const { mobileView } = state;
	const imageSize = 100;
	const navigate = useNavigate();

	useEffect(() => {
		const setResponsiveness = () => {
			return window.innerWidth < 900
				? setState((prevState) => ({ ...prevState, mobileView: true }))
				: setState((prevState) => ({ ...prevState, mobileView: false }));
		};
		setResponsiveness();
		window.addEventListener("resize", () => setResponsiveness());
		return () => {
			window.removeEventListener("resize", () => setResponsiveness());
		};
	}, []);
	return (
		<Box
			style={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				...(mobileView && {
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}),
				padding: "1rem",
				minHeight: "10vh",
				// position: "absolute",
				width: "100%",
				overflowY: "hidden",
			}}
		>
			<button
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					...(mobileView && {
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}),
				}}
				onClick={() => {
					navigate("/");
				}}
			>
				<img
					style={{
						...(!mobileView && {
							height: imageSize,
							width: imageSize,
						}),
						...(mobileView && {
							height: 200,
							width: 200,
						}),
						padding: 20,
					}}
					className='photo'
					src={logo}
					alt={"logo"}
				/>
				<h1>Sam Schmitt</h1>
				<Titles />
			</button>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					...(mobileView && {
						flexDirection: "column",
						justifyContent: "center",
					}),
					alignItems: "center",
				}}
			>
				<Contacts />
				<IconButton onClick={() => toggleColorMode()} variant='text'>
					{colorMode === "light" ? <FaMoon /> : <FaSun />}
				</IconButton>
			</div>
		</Box>
	);
};

export default Header;
