import { Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Gallery } from "react-grid-gallery";
import { imageCardInfo } from "../About/CardInfo";
import PhotoAlbum from "react-photo-album";
import { Textfit } from "react-textfit";

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

export default Contact;
