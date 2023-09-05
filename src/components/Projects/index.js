import { Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Textfit } from "react-textfit";

const Projects = ({ setCurrRef, ownRef, navClick }) => {
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
		<>
			<Container ref={ref} style={{ width: "100%", height: "100%" }}>
				<Textfit
					style={{
						height: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<p style={{ fontWeight: "bold" }}>WIP</p>
				</Textfit>
			</Container>
		</>
	);
};

export default Projects;
