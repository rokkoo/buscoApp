import React from 'react';
import { Card, Col } from 'antd';

const { Meta } = Card;

const Job = () => (
  <Col md={4} sm={12} xl={5}>
    <Card
      hoverable
      style={{ width: 200, margin: 50 }}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  </Col>
);

export default Job;
