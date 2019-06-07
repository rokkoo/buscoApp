import React from 'react';
import { Layout, Menu, Icon, Avatar, Badge, Row, Col } from 'antd';

import { Route, Switch, Link } from 'react-router-dom';

import 'antd/dist/antd.css';
import './App.css';

import Job from './components/Job';

const { Header, Content, Footer } = Layout;

const MainHeader = () => {
  return (
    <Header
      he
      style={{ backgroundColor: '#fff', borderBottom: '1px solid #e8e8e8' }}
    >
      <Row>
        <Col xs={24} sm={16} lg={12}>
          <div className="logo" span={12} />
          <Badge dot>
            <Avatar shape="square" icon="bell" />
          </Badge>
        </Col>
        <Col
          xs={24}
          sm={8}
          lg={12}
          style={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          <Menu
            theme="white"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{
              lineHeight: '62px'
            }}
          >
            <Menu.Item key="1">
              <Link to="/fire">
                <Icon type="fire" theme="twoTone" twoToneColor="red" />
                Últimos
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/ofertas">
                <Icon type="percentage" />
                Ofertas
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/contrata">
                <Icon type="solution" />
                Contrata
              </Link>
            </Menu.Item>
            <Menu.Item key="alipay">
              <Link to="/login">
                <Icon type="login" />
                Login
              </Link>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Header>
  );
};

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

const JobDetails = () => {
  return (
    <Content style={{ padding: '0 50px', marginTop: '15px' }}>
      <div style={{ background: '#fff', padding: 24 }}>
        <Row gutter={{ md: 0 }}>
          <h1>Ofertas</h1>
        </Row>
      </div>
    </Content>
  );
};

function Container({ location }) {
  return (
    <section className="route-section">
      <Switch location={location}>
        <Route exact path="/fire" component={CentralContent} />
        <Route path="/ofertas" component={JobDetails} />
        {/* <Route path={`${location.path}/:topicId`} component={Topic} />
        <Route
          exact
          path={match.path}
          render={() => <h3>Please select a topic.</h3>}
        /> */}
      </Switch>
    </section>
  );
}

const MainFooter = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  );
};

function App() {
  return (
    <Layout className="layout" style={{}}>
      {/* <Switch>
        <Route exact path="/" component={MainHeader} />
        <Route path="/trabajo" component={CentralContent} />
        <Route path="/contact" component={Footer} />
      </Switch> */}
      <MainHeader />
      <Container />
      <MainFooter />
    </Layout>
  );
}

export default App;
