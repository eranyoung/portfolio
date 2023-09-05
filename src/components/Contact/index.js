import { Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Gallery } from "react-grid-gallery";
import { imageCardInfo } from "../About/CardInfo";
import PhotoAlbum from "react-photo-album";

const Contact = ({ setCurrRef, ownRef, navClick }) => {
	const { ref, inView, entry } = useInView({
		/* Optional options */
		threshold: 1,
	});

	useEffect(() => {
		if (inView && !navClick) {
			setCurrRef(ownRef);
		}
	}, [inView]);

	const slides = imageCardInfo[2].images;

	return (
		<>
			<Container ref={ref}>
				<div>Contact</div>
				<PhotoAlbum photos={slides} layout="masonry"></PhotoAlbum>
			</Container>
		</>
	);
};

export default Contact;
