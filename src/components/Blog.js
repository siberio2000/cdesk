import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import BlogCard from './BlogCard'

import SearchContent from "./SearchContent";


const blogContent = [
  {
    id: 1,
    text: "Employee equity today: six trends you need to know about",
    imageUrl:
      "https://f.hubspotusercontent20.net/hub/2303724/hubfs/Featured-trends-min.jpg?width=380&name=Featured-trends-min.jpg",
    date: "December 2, 2021",
    link: "https://blog.capdesk.com/employee-equity-six-trends",
  },
  {
    id: 2,
    text: "How Capdesk gave YuLife's cap table a new lease of life",
    imageUrl: "https://blog.capdesk.com/hubfs/Featured_yulife-min.jpg",
    date: "November 17, 2021",
    link: "https://blog.capdesk.com/yulife-testimonial",
  },
  {
    id: 3,
    text: "Employee liquidity: the most important trend in equity",
    imageUrl:
      "https://f.hubspotusercontent20.net/hub/2303724/hubfs/featured-liquidity.jpg?width=380&name=featured-liquidity.jpg",
    date: "September 21, 2021",
    link: "https://blog.capdesk.com/employee-liquidity-trend",
  },
];


const Blog = () => {

  const [cards, setCards] = useState(blogContent)

  console.log(blogContent)

  const onChange = (e) => {
    const value = e.target.value;
    if(value === '') {
      setCards(blogContent)
    } else {
      setCards(blogContent.filter(card => card.text.toLowerCase().includes(value)))
    }
  }

  return (
    <>
      <Container>
        <Row className="d-flex justify-content-around cd-blog-group">
          <Col md={8} className="cd-title-font text-center">
            BLOG
          </Col>
          <SearchContent onChange={onChange} />
          <Col
            md={8}
            className="d-flex justify-content-center text-center pt-5"
          >
            <Row>
              {cards.map(card => (
                <Col key={card.id} xs={12} lg={4}>
                  <BlogCard data={card}/>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Blog;
