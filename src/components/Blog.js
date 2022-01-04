import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import BlogCard from "./BlogCard";
import SearchContent from "./SearchContent";

/**
 * blogContent is an array with the blog data.
 * For full optimisation can be potentially done as separate file, or contents can be pulled from the outside with API call
 */

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
  /**
   * We use useState hook for dynamic change of content where blogContent array is a default state
   */

  const [cards, setCards] = useState(blogContent);

  /**
   * This will show all available data in the console
   */

  // console.log(blogContent);

  const onChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      setCards(blogContent);
    } else {
      setCards(
        blogContent.filter((card) => card.text.toLowerCase().includes(value))
      );
    }
  };

  /**
   * We dynamically mapping through cards data fetched from blogContent array.
   */
  return (
    <>
      <Container
        style={{
          backgroundColor: "var(--bs-light-grey)",
          padding: "10rem 2rem"
        }}
      >
        <Row className="d-flex justify-content-around cd-blog-group">
          <Col md={8} className="cd-title-font text-center">
            BLOG
          </Col>
          <SearchContent onChange={onChange} />
          <Col md={8} className="d-flex justify-content-around text-center pt-5">
            <Row>
              {cards.map((card) => (
                <Col key={card.id} md={12} lg={4}>
                  <BlogCard data={card} />
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
