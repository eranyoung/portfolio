import { Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Projects = ({ setCurrRef, ownRef, navClick }) => {
	const { ref, inView, entry } = useInView({
		/* Optional options */
		threshold: 1,
	});

	useEffect(() => {
		if (inView && !navClick) {
			setCurrRef(ownRef);
		}
	}, [inView]);

	return (
		<>
			<Container ref={ref}>
				<div>Projects</div>
			</Container>
		</>
	);
};

export default Projects;
