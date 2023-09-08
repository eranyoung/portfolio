import React, { useEffect, useRef, useState, useMemo } from "react";
import { Chrono } from "react-chrono";
import CustomCard from "../CustomCard";
import { Card } from "react-bootstrap";

const Timeline = ({ containerHeight }) => {
	const ref = useRef(null);

	const [timelineWidth, setTimelineWidth] = useState(0);
	const [timelineHeight, setTimelineHeight] = useState(0);

	const divHeight = useMemo(() => {
		return containerHeight - timelineHeight - 32;
	}, [containerHeight, timelineHeight, ref.current]);

	useEffect(() => {
		setTimelineWidth(ref.current ? ref.current.offsetWidth : 0);
		setTimelineHeight(ref.current ? ref.current.offsetHeight : 0);
	}, [ref.current?.offsetHeight, ref.current?.offsetWidth, ref.current]);

	console.log(ref.current?.offsetHeight);

	const changeContent = (info) => {
		console.log(info);
	};

	const events = [
		{
			title: "May 1940",
			cardTitle: "Dunkirk",
			url: "http://www.history.com",
			cardSubtitle:
				"Men of the British Expeditionary Force (BEF) wade out to..",
			cardDetailedText:
				"Men of the British Expeditionary Force (BEF) wade out to..",
			media: {
				type: "IMAGE",
				source: {
					url: "http://someurl/image.jpg",
				},
			},
			index: 0,
		},
		{
			title: "May 1940",
			cardTitle: "Dunkirk",
			url: "http://www.history.com",
			cardSubtitle:
				"Men of the British Expeditionary Force (BEF) wade out to..",
			cardDetailedText:
				"Men of the British Expeditionary Force (BEF) wade out to..",
			media: {
				type: "IMAGE",
				source: {
					url: "http://someurl/image.jpg",
				},
			},
		},
		{
			title: "May 1940",
			cardTitle: "Dunkirk",
			url: "http://www.history.com",
			cardSubtitle:
				"Men of the British Expeditionary Force (BEF) wade out to..",
			cardDetailedText:
				"Men of the British Expeditionary Force (BEF) wade out to..",
			media: {
				type: "IMAGE",
				source: {
					url: "http://someurl/image.jpg",
				},
			},
		},
		{
			title: "May 1940",
			cardTitle: "Dunkirk",
			url: "http://www.history.com",
			cardSubtitle:
				"Men of the British Expeditionary Force (BEF) wade out to..",
			cardDetailedText:
				"Men of the British Expeditionary Force (BEF) wade out to..",
			media: {
				type: "IMAGE",
				source: {
					url: "http://someurl/image.jpg",
				},
			},
		},
		{
			title: "May 1940",
			cardTitle: "Dunkirk",
			url: "http://www.history.com",
			cardSubtitle:
				"Men of the British Expeditionary Force (BEF) wade out to..",
			cardDetailedText:
				"Men of the British Expeditionary Force (BEF) wade out to..",
			media: {
				type: "IMAGE",
				source: {
					url: "http://someurl/image.jpg",
				},
			},
		},
	];

	return (
		<>
			<div
				ref={ref}
				style={{
					width: "100%",
					padding: "8px",
					display: "flex",
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
					height: `${divHeight}px`,
				}}
			>
				{}
			</Card>
		</>
	);
};

export default Timeline;
