import { Container } from "react-bootstrap";
import Typewriter from "../helpers";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import "./index.css";

const Home = ({ setCurrRef, ownRef, navClick }) => {
	const { ref, inView, entry } = useInView({
		/* Optional options */
		threshold: 0.5,
	});

	useEffect(() => {
		if (inView && !navClick) {
			setCurrRef(ownRef);
		}
	}, [inView]);

	return (
		<Container ref={ref}>
			<div className="display-1 fade-in-text">Hi</div>
			<div className="display-2">
				<Typewriter
					text={"I'm Eran."}
					delay={250}
					initialDelay={1500}
					infinite={false}
				/>
			</div>
		</Container>
	);
};

export default Home;
