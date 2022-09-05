import React from "react";
import { FiChevronRight } from "react-icons/fi";
import styles from "./projectCard.module.css";

const ProjectCard = ({
	title,
	link,
	linkName,
	description,
	image,
	tools,
	sections,
	mobileView,
}) => {
	return (
		<div className={styles.page}>
			<a href={link} rel='noreferrer' target='_blank' className={styles.title}>
				<h1 className={styles.titleText}>
					{title}
					{link && <FiChevronRight />}
				</h1>
			</a>

			<div
				className={styles.content}
				style={{
					display: "flex",
					...(mobileView && { flexDirection: "column" }),
				}}
			>
				<img src={image} alt={""} className={styles.imageContainer} />
				{description && (
					<div className={styles.sectionsContainer}>
						<p>{description}</p>
					</div>
				)}
				{sections && (
					<div className={styles.sectionsContainer}>
						{sections.description && (
							<div className={styles.section}>
								<p className={styles.sectionText}>{sections.description}</p>
							</div>
						)}
						{sections.problem && (
							<div className={styles.section}>
								<h3 className={styles.sectionHeader}>The Problem</h3>
								<p className={styles.sectionText}>{sections.problem}</p>
							</div>
						)}
						{sections.solution && (
							<div className={styles.section}>
								<h3 className={styles.sectionHeader}>The Solution</h3>
								<p className={styles.sectionText}>{sections.solution}</p>
							</div>
						)}
						{sections.product && (
							<div className={styles.section}>
								<h3 className={styles.sectionHeader}>The Product</h3>
								<p className={styles.sectionText}>{sections.product}</p>
							</div>
						)}
						<div style={{ display: "flex", flexWrap: "wrap" }}>
							{tools.map(function (item, index) {
								return (
									<div
										style={{
											backgroundColor: "#738cff",
											padding: "4px 6px",
											margin: 2,
											borderRadius: 5,
										}}
									>
										<p>{item}</p>
									</div>
								);
							})}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default ProjectCard;
