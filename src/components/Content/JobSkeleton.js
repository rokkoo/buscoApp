import React from "react";
import { Skeleton, Switch, Card, Icon, Avatar, Col } from "antd";

const { Meta } = Card;

const JobSkeleton = (loading = true) => (
  <Col md={12} sm={12} xl={5}>
    <Card style={{ width: 350, margin: 50 }}>
      <Skeleton loading={loading} avatar active>
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title="Card title"
          description="This is the description"
        />
      </Skeleton>
    </Card>
  </Col>
);

export default JobSkeleton;
