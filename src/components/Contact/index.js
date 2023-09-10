import { Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Gallery } from "react-grid-gallery";
import { imageCardInfo } from "../About/CardInfo";
import PhotoAlbum from "react-photo-album";
import { Textfit } from "react-textfit";
import { Card } from "react-bootstrap";

const Contact = ({ setCurrRef, ownRef, navClick }) => {
	const { ref, inView, entry } = useInView({
		/* Optional options */
		threshold: 0.5,
	});

	useEffect(() => {
		if (inView && !navClick) {
			setCurrRef(ownRef);
		}
	}, [inView]);

	const slides = imageCardInfo[2].images;

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
				<Card
					style={{
						width: "50%",
						height: "30%",
						padding: "16px",
						borderRadius: "24px",
					}}
				>
					<Textfit mode="multi" style={{ height: "100%" }}>
						<h1>Contact Me</h1>
						<hr></hr>
						<p>
							<a href="mailto: eranyoung1@gmail.com">eranyoung1@gmail.com</a>
						</p>
						<p>
							<a
								href="https://www.linkedin.com/in/eran-young-244832191/"
								target="_blank"
								rel="noopener noreferrer"
							>
								LinkedIn
							</a>
						</p>
						<p>
							<a
								href="https://github.com/eranyoung"
								target="_blank"
								rel="noopener noreferrer"
							>
								Github
							</a>
						</p>
					</Textfit>
				</Card>
			</Container>
		</>
	);
};

export default Contact;
