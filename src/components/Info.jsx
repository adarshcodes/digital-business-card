import React from "react";
// import "../App.css";

class Info extends React.Component {
	render() {
		return (
			<div className="info-content">
				<div className="profile-picture"></div>
				<div className="profile-details">
					<h3 className="profile-name">Adarsh Pratap</h3>
					<h4 className="role">Frontend Developer</h4>
					<p className="site">
						<a href="https://github.com/adarshcodes">officiallyAdarsh.com</a>
					</p>
				</div>

				<div className="contact">
					<div className="contact-button button-light">
						<i class="fas fa-envelope"></i>
						<p>
							<a href="mailto:adarshpratapofficial@gmail.com">Email</a>
						</p>
					</div>
					<div className="contact-button button-dark">
						<i class="fab fa-linkedin"></i>
						<p>
							<a href="https://www.linkedin.com/in/adarsh-pratap-singh-338928194/">
								Linkedin
							</a>
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Info;
