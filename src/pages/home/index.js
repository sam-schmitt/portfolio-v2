import React, { useEffect, useState } from "react";
import SubFooter from "../../components/shared/subfooter/subfooter.js";
import Cover from "../../components/homeComponents/cover/cover.js";
import projectsArray from "../../data/projects.js";
import ProjectCard from "../../components/cardComponents/ProjectCard/ProjectCard.js";
import "./home.scss";

export default function Home() {
	const [state, setState] = useState({ mobileView: false });
	const { mobileView } = state;
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
		<body>
			<div className='container'>
				<section>
					<Cover mobileView={mobileView} />
				</section>
				{projectsArray.map(function (d, idx) {
					return (
						<section>
							<ProjectCard
								link={d.link}
								linkName={d.linkName}
								title={d.title}
								description={d.description}
								image={d.image}
								tools={d.tools}
								sections={d.sections}
								mobileView={mobileView}
							/>
						</section>
					);
				})}
				<section>
					<SubFooter />
				</section>
			</div>
		</body>
	);
}
