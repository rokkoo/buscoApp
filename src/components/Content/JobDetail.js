import React from "react";

import { Layout, Row } from "antd";

const { Content } = Layout;

const JobDetail = props => {
  return (
    <Content style={{ padding: "0 50px", marginTop: "15px" }}>
      <div style={{ background: "#fff", padding: 24 }}>
        <Row gutter={{ md: 0 }}>
          <h1>Job Details : {props.jobId}</h1>
        </Row>
      </div>
    </Content>
  );
};

export default JobDetail;
