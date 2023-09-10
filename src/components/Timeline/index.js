import React, { useEffect, useRef, useState, useMemo } from "react";
import { Chrono } from "react-chrono";
import CustomCard from "../CustomCard";
import { Card } from "react-bootstrap";
import { events } from "./helpers";
import { Textfit } from "react-textfit";
import ReactFitText from "react-fittext";
import FitText from "@kennethormandy/react-fittext";

const Timeline = ({ containerHeight }) => {
	const ref = useRef(null);

	const [timelineWidth, setTimelineWidth] = useState(0);
	const [timelineHeight, setTimelineHeight] = useState(0);

	const [currentEntry, setCurrentEntry] = useState(events[-1]);

	useEffect(() => {
		setTimelineWidth(ref.current ? ref.current.offsetWidth : 0);
		setTimelineHeight(ref.current ? ref.current.offsetHeight : 0);
	}, [ref.current?.offsetHeight, ref.current?.offsetWidth, ref.current]);

	const changeContent = (info) => {
		setCurrentEntry(events[info.index]);
	};

	const allContent = events.map((currentEntry) => {
		return (
			<div style={{ display: "table", height: "100%" }}>
				{currentEntry?.media?.source?.url && (
					<div
						style={{
							float: currentEntry?.index % 2 == 0 ? "left" : "right",
							width: "35%",
							height: "100%",
							padding: "12px",
						}}
					>
						<div
							style={{
								width: "100%",
								height: "100%",
								backgroundImage: `url("${currentEntry?.media.source.url}")`,
								backgroundSize: "cover",
								borderRadius: "24px",
							}}
						></div>
					</div>
				)}
				<div
					style={{
						float: currentEntry?.index % 2 == 0 ? "right" : "left",
						width: currentEntry?.media?.source?.url ? "65%" : "100%",
						padding: "12px",
						height: "100%",
					}}
				>
					<div style={{ height: "15%" }}>
						<FitText vertical compressor={1}>
							<h1>{currentEntry?.cardTitle}</h1>
						</FitText>
					</div>
					<div style={{ height: "10%" }}>
						<FitText vertical compressor={0.3}>
							<h2>{currentEntry?.cardSubtitle}</h2>
						</FitText>
					</div>
					<div style={{ height: "10%" }}>
						<FitText vertical compressor={0.3}>
							<h4>{currentEntry?.dates}</h4>
						</FitText>
					</div>
					<div style={{ height: "35vh", display: "flex" }}>
						<Textfit mode="multi">{currentEntry?.cardDetailedText}</Textfit>
					</div>
				</div>
			</div>
		);
	});

	const divContent = useMemo(() => {
		return allContent[currentEntry?.index];
	}, [currentEntry]);

	return (
		<div style={{ width: "100%", height: "100%", display: "table" }}>
			<div
				ref={ref}
				style={{
					width: "100%",
					height: "100px",
					padding: "8px",
					display: "table-row",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				{timelineWidth && (
					<Chrono
						items={events}
						mode="HORIZONTAL"
						itemWidth={timelineWidth / events.length}
						lineWidth={1}
						allowDynamicUpdate={true}
						theme={{
							primary: "#00214D",
							secondary: "#00214D",
							cardBgColor: "white",
							titleColor: "black",
							titleColorActive: "white",
						}}
						activeItemIndex={events.length - 1}
						onItemSelected={changeContent}
						cardLess
					></Chrono>
				)}
			</div>
			<Card
				style={{
					width: "100%",
					borderRadius: "24px",
					height: "100%",
				}}
			>
				{divContent}
			</Card>
		</div>
	);
};

export default Timeline;
