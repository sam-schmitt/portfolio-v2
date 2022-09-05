import React from "react";
import styles from "./titles.module.css";

const Titles = () => {
	const data = ["Entrepreneur", "Founder", "Engineer", "Developer", "Student"];
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				flexWrap: "wrap",
				padding: 10,
				justifyContent: "center",
				alignSelf: "center",
			}}
		>
			{data.map(function (text, index) {
				return <p className={styles.title}>{text}</p>;
			})}
		</div>
	);
};

export default Titles;
