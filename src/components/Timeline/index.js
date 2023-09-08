import React, { useEffect, useRef, useState, useMemo } from "react";
import { Chrono } from "react-chrono";
import CustomCard from "../CustomCard";
import { Card } from "react-bootstrap";
import { events } from "./helpers";

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

	const divContent = useMemo(() => {
		console.log(currentEntry);
		return (
			<div style={{ display: "table", height: "100%" }}>
				<div
					style={{
						float: currentEntry?.index % 2 == 0 ? "left" : "right",
						width: "50%",
						height: "100%",
						padding: "12px",
					}}
				>
					<div
						style={{
							width: "100%",
							height: "100%",
							backgroundImage: `url(${currentEntry?.media.source.url})`,
							backgroundPostion: "center center",
							backgroundSize: "cover",
							borderRadius: "24px",
						}}
					></div>
				</div>
				<div style={{ float: "left", width: "50%", padding: "12px" }}>
					{currentEntry?.index}
				</div>
			</div>
		);
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
					display: "flex",
				}}
			>
				{divContent}
			</Card>
		</div>
	);
};

export default Timeline;
