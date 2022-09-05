import React from "react";
import styles from "./blogCard.module.css";
import { Button } from "@chakra-ui/react";

const BlogCard = ({ title, pubDate, link, description, thumbnail, d }) => {
	function cleanTitle(checkTitle) {
		checkTitle = checkTitle.replace("amp;", "");
		return checkTitle;
	}
	function truncateText(text, start, len) {
		return text.length > len ? text.slice(start, len) : text;
	}

	function convertDate(date) {
		let dateArray = date.slice(0, 10).split("-");
		let year = dateArray.shift();
		dateArray.push(year);
		return `${dateArray.join("/")}`;
	}

	return (
		<div className={styles.container}>
			<div sx={{ maxWidth: 345 }}>
				<h1 className={styles.title}>
					{truncateText(cleanTitle(title), 0, 1000)}
				</h1>
				<p className={styles.date}>{convertDate(pubDate)}</p>
				<img
					className={styles.image}
					src={thumbnail}
					height='400'
					alt='blog preview'
				/>
				<div className={styles.readMore}>
					<Button
						variant='primary'
						onClick={() => {
							window.open(link, "_blank");
						}}
					>
						Read More
					</Button>
				</div>
				<div style={{ display: "flex", flexWrap: "wrap", padding: 10 }}>
					{d.categories.map(function (d, idx) {
						return (
							<div
								style={{
									display: "flex",
									backgroundColor: "#738cff",
									padding: "4px 6px",
									margin: 2,
									borderRadius: 5,
								}}
							>
								<p>{d}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default BlogCard;
