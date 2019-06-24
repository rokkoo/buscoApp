import React, { useEffect } from "react";
import { Router, Link } from "@reach/router";
import { Card, Col } from "antd";
import Countdown from "react-countdown-now";

const { Meta } = Card;

const Post = data => {
  console.log(data);
  const { id, title, description, imgSrc, price, date } = data;
  const goTo = `trabajo/${id}`;

  return (
    <Col md={6} sm={12} xl={5}>
      <Link to={goTo} data={data}>
        <Card
          hoverable
          style={{ width: 200, margin: 50 }}
          cover={<img alt={title} src={imgSrc} />}
        >
          <Meta title={title} description={description} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "#34495e",
              fontWeight: 600,
              opacity: "0.7"
            }}
          >
            <div>Precio: {price}</div>
            <div>{price}</div>
          </div>
        </Card>
      </Link>
    </Col>
  );
};

const Job = ({ data }) => {
  const { id, title, description, imgSrc, price, date } = data;
  const { finishTime } = date;
  finishTime.setSeconds(5);
  // const fTime = new Date(finishTime).now();
  const goTo = `trabajo/${id}`;

  useEffect(() => {
    // console.log(finishTime);
  }, []);

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <div>Finished</div>;
    } else {
      // Render a countdown
      return (
        <Col md={6} sm={12} xl={5}>
          <Link to={goTo} data={data}>
            <Card
              hoverable
              style={{ width: 200, margin: 50 }}
              cover={<img alt={title} src={imgSrc} />}
            >
              <Meta title={title} description={description} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "#34495e",
                  fontWeight: 600,
                  opacity: "0.7"
                }}
              >
                <div>Precio: {price}</div>
                <div>
                  {hours}
                  {minutes}:{seconds}
                </div>
              </div>
            </Card>
          </Link>
        </Col>
      );
    }
  };

  return <Countdown date={Date.now() + 5000} renderer={renderer} />;
};

export default Job;
