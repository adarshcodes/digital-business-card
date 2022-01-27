import React from "react";
import "../App.css";

class About extends React.Component {
	render() {
		return (
			<div className="about">
				<h4 className="about-heading">About</h4>
				<p className="about-text">
					I am a frontend developer with a particular interest in making things
					simple and automating daily tasks. I try to keep up with security and
					best practices, and am always looking for new things to learn.
				</p>
			</div>
		);
	}
}

export default About;
