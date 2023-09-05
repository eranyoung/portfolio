import { useState, useEffect } from "react";

const Typewriter = ({
	text = "",
	delay = 100,
	initialDelay = 0,
	infinite = false,
}) => {
	const [currentText, setCurrentText] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isDelayed, setIsDelayed] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsDelayed(false);
		}, initialDelay);
	}, []);

	useEffect(() => {
		let timeout;
		if (!isDelayed) {
			if (currentIndex < text.length) {
				timeout = setTimeout(() => {
					setCurrentText((prevText) => prevText + text[currentIndex]);
					setCurrentIndex((prevIndex) => prevIndex + 1);
				}, delay);
			} else if (infinite) {
				// ADD THIS CHECK
				setCurrentIndex(0);
				setCurrentText("");
			}
		}

		return () => clearTimeout(timeout);
	}, [currentIndex, delay, isDelayed, infinite, text]);

	return <span>{currentText}</span>;
};

export default Typewriter;
