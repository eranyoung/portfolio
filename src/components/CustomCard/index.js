import { Card, Container } from "react-bootstrap";

const CustomCard = ({ className = "", header = "", children }) => {
	return (
		<Card
			className={className}
			style={{
				borderRadius: "24px",
				width: "100%",
				height: "100%",
			}}
		>
			{header && <Card.Header as="h5">{header}</Card.Header>}
			<Card.Body>{children}</Card.Body>
		</Card>
	);
};

export default CustomCard;
