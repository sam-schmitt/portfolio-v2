import React from "react";
import TypewriterComponent from "typewriter-effect";
import theme from "../../../styles/theme";
import styles from "./cover.module.css";
import logo from "../../../assets/images/icon.png";
import Links from "../links/links";
import Header from "../header/header";

const Cover = ({ mobileView }) => {
	const list = [
		"Software",
		"Web",
		"Blockchain",
		"React.js",
		"Node.js",
		"OAuth",
		"React Native",
		"Express.js",
		"JavaScript",
		"Python",
		"C++",
		"Firebase",
		"Expo",
		"CSS",
		"JWT",
		"MongoDB",
		"Mongoose",
		"SQL",
		"Electron",
		"Next.js",
	];
	const imageSize = 500;

	return (
		<div
			style={{
				display: "flex",
				width: "100%",
				justifyContent: "space-between",
				flexDirection: "column",
				minHeight: "100vh",
			}}
		>
			<Header mobileView={mobileView} />
			<div
				style={{
					display: "flex",
					width: "100%",
					justifyContent: "space-around",
					...(mobileView && { flexDirection: "column" }),
				}}
			>
				<div className={styles.nameContainer}>
					<p className={styles.name} style={{ textAlign: "center" }}>
						Samuel Schmitt
					</p>
					<p
						style={{
							backgroundColor: theme.card,
							borderRadius: 5,
							paddingRight: 4,
							paddingLeft: 4,
							paddingTop: 1,
							paddingBottom: 1,
							marginRight: 4,
							// minWidth: 200,
							display: "flex",
							fontSize: 20,
						}}
					>
						<TypewriterComponent
							options={{
								strings: list,
								autoStart: true,
								loop: true,
								delay: 150,
							}}
						/>
					</p>
					<p
						className={styles.sub}
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							...(mobileView && { textAlign: "center" }),
						}}
					>
						Developer
					</p>
				</div>
				<div
					style={{
						display: "flex",
						padding: 10,
						justifyContent: "center",
						alignItems: "center",
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
				</div>
			</div>
			<Links />
		</div>
	);
};

export default Cover;
