import React from "react";
import "../App.css";

class Footer extends React.Component {
	render() {
		return (
			<footer className="footer">
				<ul className="footer-icon-list">
					<li className="footer-icon">
						<a href="https://twitter.com/ideallyadarsh">
							<i class="fab fa-twitter-square"></i>
						</a>
					</li>
					<li className="footer-icon">
						<a href="#null">
							<i class="fab fa-facebook-square"></i>
						</a>
					</li>
					<li className="footer-icon">
						<a href="https://www.instagram.com/officiallyadarsh/">
							<i class="fab fa-instagram-square"></i>
						</a>
					</li>
					<li className="footer-icon">
						<a href="https://www.github.com/adarshcodes">
							<i class="fab fa-github-square"></i>
						</a>
					</li>
				</ul>
			</footer>
		);
	}
}

export default Footer;
