import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Layout, Row, Carousel, Col } from 'antd';

const { Content } = Layout;

const JobDetail = props => {
  // TODO: Posible refactor por performace
  const [job] = useSelector(({ posts }) =>
    posts.filter(({ id }) => id == props.jobId)
  );

  const { imgSrc, title, locations, price, description } = job || {};

  // TODO: Scheleton?
  return job ? (
    <Content style={{ padding: '0 50px', marginTop: '15px' }}>
      <div style={{ background: '#fff', padding: 24 }}>
        <Row gutter={{ md: 0 }}>
          <h1>{title}</h1>
        </Row>
        <Row
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
          }}
        >
          <Col md={12}>
            <Carousel dotPosition="top">
              <div>
                <img src={imgSrc} alt="" />
              </div>
              <div>
                <img src={imgSrc} alt="" />
              </div>
            </Carousel>
          </Col>
          <Col>{description}</Col>
        </Row>
      </div>
    </Content>
  ) : (
    <h3>Nothing</h3>
  );
};

export default JobDetail;
