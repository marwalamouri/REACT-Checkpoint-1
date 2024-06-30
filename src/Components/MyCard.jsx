import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const MyCard = ({ product }) => {
  const { name, description, price, image } = product;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
