// screen where admins can change things about the group
import React, { useState, useEffect } from "react";
import BlogCard from "../../components/cardComponents/BlogCard/BlogCard";
import Header from "../../components/homeComponents/header/header";
import SubFooter from "../../components/shared/subfooter/subfooter";
import SubHeader from "../../components/shared/subheader/subheader";

import "../home/home.scss";

export default function Blog(props) {
	const [blogs, setBlogs] = useState([]);

	const rss2json =
		"https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40samuelgschmitt";

	useEffect(() => {
		fetch(rss2json)
			.then((res) => res.json())
			.then((data) => {
				setBlogs(data.items);
			});
	}, [rss2json]);

	return (
		<body>
			<Header />
			<div className='container'>
				{blogs.map(function (d, idx) {
					return (
						<section>
							{idx === 0 && <SubHeader />}
							<BlogCard
								title={d.title}
								link={d.link}
								pubDate={d.pubDate}
								description={d.description}
								thumbnail={d.thumbnail}
								d={d}
							/>
						</section>
					);
				})}
				{blogs.length > 0 && (
					<section>
						<SubFooter />
					</section>
				)}
			</div>
		</body>
	);
}
