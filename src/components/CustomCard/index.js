import { Card, Container } from "react-bootstrap";

const CustomCard = ({ className = "" }) => {
	return (
		<Card className={className} style={{ "border-radius": "24px" }}>
			<Card.Header as="h5">Featured</Card.Header>
			<Card.Body>
				<Card.Title>Card Title</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
				<Card.Text>
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</Card.Text>
				<Card.Link href="#">Card Link</Card.Link>
				<Card.Link href="#">Another Link</Card.Link>
			</Card.Body>
		</Card>
	);
};

export default CustomCard;
