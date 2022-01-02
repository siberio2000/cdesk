import React from "react";

import { Card, Button } from "react-bootstrap";

const BlogCard = ({ data }) => {
  const { text, imageUrl, date, link } = data;

  return (
    <>
      <Card>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Text>{date}</Card.Text>
          <Card.Title>{text}</Card.Title>
          <Button href={link} variant="primary">
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default BlogCard;
