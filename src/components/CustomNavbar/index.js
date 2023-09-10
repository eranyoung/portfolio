import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./index.css";

const CustomNavbar = ({ currRef, setCurrRef, refs, navClick, setNavClick }) => {
	const handleRefChange = (event) => {
		setNavClick(true);
		const name = event.target.id;
		switch (name) {
			case "home":
				setCurrRef(refs.homeRef);
				break;
			case "about":
				setCurrRef(refs.aboutRef);
				break;
			case "projects":
				setCurrRef(refs.projectsRef);
				break;
			case "contact":
				setCurrRef(refs.contactRef);
				break;
		}
	};

	useEffect(() => {
		if (currRef !== refs.current) {
			scrollSmoothHandler(currRef);
		}
	}, [currRef, refs.current]);

	const scrollSmoothHandler = (ref) => {
		ref.current.scrollIntoView({ behavior: "smooth" });
		setTimeout(() => {
			setNavClick(false);
		}, 500);
	};

	return (
		<Navbar
			expand="lg"
			className="bg-body-tertiary sticky-top"
			style={{ height: "5vh" }}
		>
			<Container className="justify-content-center">
				<Navbar.Toggle className="border-0" aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="m-auto align-items-center">
						<Nav.Link>
							<div
								className={
									currRef == refs.homeRef ? "nav-link-selected" : "nav-link"
								}
								id="home"
								onClick={handleRefChange}
							>
								Home
							</div>
						</Nav.Link>
						<Nav.Link>
							<div
								className={
									currRef == refs.aboutRef ? "nav-link-selected" : "nav-link"
								}
								id="about"
								onClick={handleRefChange}
							>
								About Me
							</div>
						</Nav.Link>
						<Nav.Link>
							<div
								className={
									currRef == refs.projectsRef ? "nav-link-selected" : "nav-link"
								}
								id="projects"
								onClick={handleRefChange}
							>
								Projects/Experience
							</div>
						</Nav.Link>
						<Nav.Link>
							<div
								className={
									currRef == refs.contactRef ? "nav-link-selected" : "nav-link"
								}
								id="contact"
								onClick={handleRefChange}
							>
								Contact
							</div>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default CustomNavbar;
