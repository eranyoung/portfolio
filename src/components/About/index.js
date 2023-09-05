import { Container, Row, Col } from "react-bootstrap";
import CustomCard from "../CustomCard";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import CardDeck from "../CardDeck";
import ScaleText from "react-scale-text";
import "../CardDeck/index.css";
import { textCardInfo, imageCardInfo } from "./CardInfo";
import { Textfit } from "react-textfit";

const About = ({ setCurrRef, ownRef, navClick }) => {
	const { ref, inView, entry } = useInView({
		/* Optional options */
		threshold: 0.5,
	});

	const textCards = textCardInfo
		.map((e) => {
			return (
				<div id="card-text-container" style={{ height: "100%", width: "100%" }}>
					{e.hasTitle && (
						<div style={{ height: "15%" }}>
							<Textfit
								style={{
									height: "100%",
								}}
							>
								<p style={{ fontWeight: "bold" }}>{e.title}</p>
							</Textfit>
						</div>
					)}

					<div style={{ height: e.footnote && e.hasTitle ? "70%" : "100%" }}>
						<Textfit
							style={{ height: "100%", display: "flex", alignItems: "center" }}
							mode="multi"
						>
							{e.text}
						</Textfit>
					</div>
					{e.footnote && (
						<div style={{ height: "15%" }}>
							<Textfit
								style={{
									height: "100%",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
								mode="multi"
								max={16}
							>
								<i>{e.footnote}</i>
							</Textfit>
						</div>
					)}
				</div>
			);
		})
		.reverse(); //card deck will stack them so the first item is on the bottom, need to reverse the array

	const imageCards = imageCardInfo.map((e) => e).reverse();

	useEffect(() => {
		if (inView && !navClick) {
			setCurrRef(ownRef);
		}
	}, [inView]);

	return (
		<>
			<Container className="d-flex h-100" ref={ref} fluid>
				<Container className="d-flex h-100 align-items-center">
					<CardDeck cards={textCards} deckType="vertical"></CardDeck>
				</Container>
				<Container className="d-flex h-100 align-items-center">
					<CardDeck cards={imageCards} deckType="horizontal"></CardDeck>
				</Container>
			</Container>
		</>
	);
};

export default About;
