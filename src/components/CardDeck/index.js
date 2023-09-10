import React, { useState } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "react-use-gesture";
import { Container } from "react-bootstrap";

import styles from "./index.css";
import PhotoAlbum from "react-photo-album";

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i) => ({
	x: 0,
	y: i * -4,
	scale: 1,
	rot: -10 + Math.random() * 20,
	delay: i * 100,
});
const from = (i) => ({ x: 0, rot: 0, scale: 1.5, y: 0 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) =>
	`perspective(3000px) rotateX(30deg) rotateY(${
		r / 10
	}deg) rotateZ(${r}deg) scale(${s})`;

const CardDeck = ({ cards = [], deckType = "vertical" }) => {
	const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
	const [props, api] = useSprings(cards.length, (i) => ({
		...to(i),
		from: from(i),
	})); // Create a bunch of springs using the helpers above
	// Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
	const bind = useDrag(
		({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
			const trigger = velocity > 0.2; // If you flick hard enough it should trigger the card to fly out
			const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
			if (!down && trigger) gone.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
			api.start((i) => {
				if (index !== i) return; // We're only interested in changing spring-data for the current spring
				const isGone = gone.has(index);
				const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
				const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
				const scale = down ? 1.1 : 1; // Active cards lift up a bit
				return {
					x,
					rot,
					scale,
					delay: undefined,
					config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
				};
			});
			if (!down && gone.size === cards.length)
				setTimeout(() => {
					gone.clear();
					api.start((i) => to(i));
				}, 600);
		}
	);
	// Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
	return (
		<>
			{props.map(({ x, y, rot, scale }, i) => (
				<animated.div
					className={
						deckType == "vertical" ? "deck-vertical" : "deck-horizontal"
					}
					key={i}
					style={{ x, y }}
				>
					{/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
					{deckType == "vertical" ? (
						<animated.div
							{...bind(i)}
							style={{
								transform: interpolate([rot, scale], trans),
								padding: "3%",
							}}
						>
							<div style={{ height: "100%", width: "100%" }}>{cards[i]}</div>
						</animated.div>
					) : (
						<animated.div
							{...bind(i)}
							style={{
								transform: interpolate([rot, scale], trans),
								padding: "3%",
								display: "flex",
								alignItems: "flex-center",
							}}
						>
							<Container style={{ overflow: "clip" }}>
								<PhotoAlbum
									layout="masonry"
									photos={cards[i].images}
									columns={cards[i].images.length / 2}
									renderContainer={({
										containerRef,
										containerProps,
										children,
									}) => (
										<div
											ref={containerRef}
											{...containerProps}
											style={{
												display: "flex",
												flexFlow: "row",
												justifyContent: "space-between",
												height: "100%",
											}}
										>
											{children}
										</div>
									)}
									renderPhoto={({
										photo,
										wrapperStyle,
										renderDefaultPhoto,
									}) => (
										<div
											style={{
												borderRadius: "20px",
												position: "relative",
												overflow: "hidden",
												...wrapperStyle,
											}}
										>
											{renderDefaultPhoto({ wrapped: true })}
										</div>
									)}
								/>
							</Container>
						</animated.div>
					)}
				</animated.div>
			))}
		</>
	);
};

export default CardDeck;
