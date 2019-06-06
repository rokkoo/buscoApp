import React from 'react';
import {
  Layout, Menu, Icon, Avatar, Badge, Row, Col,
} from 'antd';

import 'antd/dist/antd.css';
import './App.css';

import Job from './components/Job';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout" style={{}}>
      <Header he style={{ backgroundColor: '#fff', borderBottom: '1px solid #e8e8e8' }}>
        <Row>
          <Col xs={24} sm={16} lg={12}>
            <div className="logo" span={12} />
            <Badge dot>
              <Avatar shape="square" icon="bell" />
            </Badge>
          </Col>
          <Col xs={24} sm={8} lg={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Menu
              theme="white"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{
                lineHeight: '62px',
              }}
            >
              <Menu.Item key="1">
                <Icon type="fire" theme="twoTone" twoToneColor="red" />
                Últimos
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="percentage" />
                Ofertas
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="solution" />
                Contrata
              </Menu.Item>
              <Menu.Item key="alipay">
                <Icon type="login" />
                Login
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Header>
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
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}

export default App;
