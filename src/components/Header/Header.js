import React from "react";
import { Layout, Row, Col, Icon, Avatar, Badge, Menu } from "antd";
import { Link } from "@reach/router";

const { Header } = Layout;

const MainHeader = () => {
  return (
    <Header
      he
      style={{ backgroundColor: "#fff", borderBottom: "1px solid #e8e8e8" }}
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
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Menu
            theme="white"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{
              lineHeight: "62px"
            }}
          >
            <Menu.Item key="1">
              <Link to="/">
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
              <Icon type="solution" />
              Contrata
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

export default MainHeader;
