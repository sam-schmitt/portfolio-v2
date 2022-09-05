import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import Logo from "../../../assets/images/icon.png";

export default function SubHeader() {
	const navigate = useNavigate();
	const imageSize = 50;
	return (
		<div
			onClick={() => {
				navigate("/");
			}}
			style={{
				display: "flex",
				padding: 10,
				alignItems: "center",
				cursor: "pointer",
			}}
		>
			<FiChevronLeft style={{ height: 20 }} />
			<img
				src={Logo}
				alt={""}
				style={{ height: imageSize, width: imageSize }}
			/>
			<h1 style={{ marginLeft: 10 }}>Sam Schmitt</h1>
		</div>
	);
}
