import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Router, Link } from "@reach/router";
import { Card, Col } from "antd";
import Countdown from "react-countdown-now";

const { Meta } = Card;

const Job = ({ data }) => {
  const { id, title, description, imgSrc, price, date } = data;
  const p = id == 3 ? 0 : 0;
  const dispatch = useDispatch();
  const { finishTime } = date;

  console.log(finishTime);
  // const fTime = new Date(finishTime).now();
  const goTo = `trabajo/${id}`;

  useEffect(() => {
    // console.log(finishTime);
  }, []);

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      dispatch({
        type: "DELETE_POST",
        id
      });
      console.log(id);
      return null;
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
                <div>Precio: {id}</div>
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

  return <Countdown date={finishTime} renderer={renderer} />;
};

export default Job;
