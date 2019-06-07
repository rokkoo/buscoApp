import React from 'react';
import Job from './Job';
import { Layout, Row } from 'antd';

const { Content } = Layout;

const CentralContent = ({ match }) => {
  return (
    <Content style={{ padding: '0 50px', marginTop: '15px' }}>
      <div style={{ background: '#fff', padding: 24 }}>
        <Row gutter={{ md: 0 }}>
          <Job />
          <Job />
          <Job />
          <Job />
          <Job />
          <Job />
        </Row>
      </div>
    </Content>
  );
};

export default CentralContent;
