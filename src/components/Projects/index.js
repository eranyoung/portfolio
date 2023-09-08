import { Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import { Textfit } from "react-textfit";

import Timeline from "../Timeline";
import CustomCard from "../CustomCard";

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

	const containerRef = useRef(null);

	const [contRefHeight, setContRefHeight] = useState(0);

	useEffect(() => {
		setContRefHeight(
			containerRef.current ? containerRef.current.offsetHeight : 0
		);
	}, [containerRef.current]);

	return (
		<>
			<Container
				ref={ref}
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<div
					ref={containerRef}
					style={{
						width: "100%",
						height: "80%",
					}}
				>
					<CustomCard>
						<Timeline containerHeight={contRefHeight}></Timeline>
					</CustomCard>
				</div>
			</Container>
		</>
	);
};

export default Projects;
