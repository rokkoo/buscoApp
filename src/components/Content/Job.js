import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Router, Link } from '@reach/router';
import { Card, Col } from 'antd';
import Countdown from 'react-countdown-now';

const { Meta } = Card;

const Job = ({ data }) => {
  const { id, title, description, imgSrc, price, date } = data;
  const dispatch = useDispatch();
  const { start: finishTime } = date;

  const goTo = `trabajo/${id}`;

  useEffect(() => {
    // console.log(finishTime);
  }, []);

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      // dispatch({
      //   type: 'DELETE_POST',
      //   id
      // });
      return <></>;
    } else {
      // Render a countdown
      return (
        <Col md={24} sm={12} xl={6}>
          <Link to={goTo} data={data}>
            <Card
              hoverable
              style={{ width: 200, margin: 50 }}
              cover={<img alt={title} src={imgSrc} />}
            >
              <Meta title={title} description={description} />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  color: '#34495e',
                  fontWeight: 600,
                  opacity: '0.7'
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

  return <Countdown date={Date.now() + finishTime} renderer={renderer} />;
};

export default Job;
