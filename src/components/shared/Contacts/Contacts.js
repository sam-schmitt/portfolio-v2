import React from "react";
import {
	FaTwitterSquare,
	FaFacebookSquare,
	FaInstagramSquare,
	FaLinkedin,
	FaGithubSquare,
} from "react-icons/fa";

const Contacts = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				padding: 10,
				justifyContent: "center",
			}}
		>
			<a
				href='https://twitter.com/samschmiitt'
				target='_blank'
				rel='noreferrer'
			>
				<FaTwitterSquare size={50} />
			</a>
			<a
				href='https://www.facebook.com/SamSchmitt703'
				target='_blank'
				rel='noreferrer'
			>
				<FaFacebookSquare size={50} />
			</a>
			<a
				href='https://www.instagram.com/sam.schmiitt/'
				target='_blank'
				rel='noreferrer'
			>
				<FaInstagramSquare size={50} />
			</a>
			<a
				href='https://www.linkedin.com/in/samuel-schmitt-008805189/'
				target='_blank'
				rel='noreferrer'
			>
				<FaLinkedin size={50} />
			</a>
			<a href='https://github.com/sam-schmitt' target='_blank' rel='noreferrer'>
				<FaGithubSquare size={50} />
			</a>
		</div>
	);
};

export default Contacts;
