import React from "react";
import { Router, Link } from "@reach/router";
import { Card, Col } from "antd";

const { Meta } = Card;

const Job = ({ data }) => {
  const { id, title, description, imgSrc } = data;
  const goTo = `trabajo/${id}`;
  return (
    <Col md={12} sm={12} xl={5}>
      <Link to={goTo} data={data}>
        <Card
          hoverable
          style={{ width: 200, margin: 50 }}
          cover={<img alt={title} src={imgSrc} />}
        >
          <Meta title={title} description={description} />
        </Card>
      </Link>
    </Col>
  );
};

export default Job;
