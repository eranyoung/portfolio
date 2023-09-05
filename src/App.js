import "./App.css";

import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
	Link,
} from "react-router-dom";

import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import CustomNavbar from "./components/CustomNavbar";
import Background from "./components/Background";

import { useRef, useState } from "react";

function App() {
	const homeRef = useRef();
	const aboutRef = useRef();
	const projectsRef = useRef();
	const contactRef = useRef();

	const [navClick, setNavClick] = useState(false);

	const [currRef, setCurrRef] = useState(homeRef);
	return (
		<>
			<CustomNavbar
				currRef={currRef}
				setCurrRef={setCurrRef}
				refs={{ homeRef, aboutRef, projectsRef, contactRef }}
				navClick={navClick}
				setNavClick={setNavClick}
			/>
			<div className="App">
				<Background>
					<div className="scroll-container">
						<div className="section" ref={homeRef} id="home-section">
							<Home
								setCurrRef={setCurrRef}
								ownRef={homeRef}
								navClick={navClick}
							/>
						</div>
						<div className="section" ref={aboutRef} id="about-section">
							<About
								setCurrRef={setCurrRef}
								ownRef={aboutRef}
								navClick={navClick}
							/>
						</div>
						<div className="section" ref={projectsRef} id="projects-section">
							<Projects
								setCurrRef={setCurrRef}
								ownRef={projectsRef}
								navClick={navClick}
							/>
						</div>
						<div className="section" ref={contactRef} id="contact-section">
							<Contact
								setCurrRef={setCurrRef}
								ownRef={contactRef}
								navClick={navClick}
							/>
						</div>
					</div>
				</Background>
			</div>
		</>
	);
}

export default App;
