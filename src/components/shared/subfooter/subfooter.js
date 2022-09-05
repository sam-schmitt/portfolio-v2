import React from "react";

import Logo from "../../../assets/images/icon.png";
import Contacts from "../Contacts/Contacts";

export default function SubFooter() {
	const imageSize = 50;
	return (
		<div
			style={{
				display: "flex",
				padding: 10,
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
			}}
		>
			<img
				src={Logo}
				alt={""}
				style={{ height: imageSize, width: imageSize }}
			/>
			<h1 style={{ marginLeft: 10 }}>Sam Schmitt</h1>
			<p>2022</p>
			<Contacts />
		</div>
	);
}
