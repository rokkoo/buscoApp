import React from "react";
import Job from "./Job";
import { Layout, Row } from "antd";

const { Content } = Layout;

const Posts = [
  {
    id: 1,
    title: "Llevar un paquete",
    locations: { from: "calle X", to: "Calle N" },
    description: "desc",
    imgSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    price: 120,
    date: {
      // UTC Time
      start: 1,
      finish: 12
    }
  },
  {
    id: 2,
    title: "Llevar un paquete",
    locations: { from: "calle X", to: "Calle N" },
    description: "desc",
    imgSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    price: 120,
    date: {
      // UTC Time
      start: 1,
      finish: 12
    }
  },
  {
    id: 3,
    title: "Llevar un paquete",
    locations: { from: "calle X", to: "Calle N" },
    description: "desc",
    imgSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    price: 120,
    date: {
      // UTC Time
      start: 1,
      finish: 12
    }
  }
];

const CentralContent = ({ match }) => {
  return (
    <Content style={{ padding: "0 50px", marginTop: "15px" }}>
      Posts
      <div style={{ background: "#fff", padding: 24 }}>
        <Row gutter={{ md: 0 }}>
          {Posts.map((data, i) => {
            return <Job key={i} data={data} />;
          })}
        </Row>
      </div>
    </Content>
  );
};

export default CentralContent;
