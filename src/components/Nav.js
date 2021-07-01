import React from 'react'
import Logo from "../img/logo.svg";
import "./Nav.scss"


class Nav extends React.Component {
	 render() { return (


		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div id="navCont" className="container">
				<div className="navbar-brand">
					<a className="navbar-item" href="#">
				    	<img width="120" src={Logo} alt=""/>
				    </a>

					<a role="button" className="navbar-burger burger nav-toggle" aria-label="menu" aria-expanded="false" data-target="mainNavbar"
					onClick={() => { let toggle = document.querySelector(".nav-toggle"); let menu = document.querySelector(".navbar-menu"); toggle.classList.toggle("is-active"); menu.classList.toggle("is-active"); }}>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</a>
				</div>

				<div id="mainNavbar" className="navbar-menu">
					<div className="navbar-start">
						<a className="navbar-item">
					        This
					    </a>

					    <a className="navbar-item">
					        That
					    </a>
					</div>

					<div className="navbar-end">
						<a className="navbar-item">
					        Other thing
					    </a>
						
					</div>
				</div>
			</div>
		</nav>

	)}
}

export default Nav