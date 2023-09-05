import * as React from "react";

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "../../assets/pictures/cable-car.jpg";

const Gallery = ({ slides }) => {
	const [index, setIndex] = React.useState(-1);

	return (
		<>
			<PhotoAlbum
				layout="rows"
				photos={slides}
				targetRowHeight={300}
				onClick={({ index: current }) => setIndex(current)}
			/>
		</>
	);
};

export default Gallery;
