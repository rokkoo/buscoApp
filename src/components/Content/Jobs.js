import React, { useEffect, useState } from "react";
import { useSelector, useStore, useDispatch } from "react-redux";

import { Job, JobSkeleton } from "./";
import { Layout, Row, Spin, Col } from "antd";

const { Content } = Layout;

const CentralContent = ({ match }) => {
  const state = useStore().getState();
  const { posts } = useSelector(state => state);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <Content style={{ padding: "0 50px", marginTop: "15px" }}>
      Posts
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          background: "#fff",
          padding: 24
        }}
      >
        {posts.length > 0 ? (
          <Row gutter={{ md: 0 }}>
            {/* {posts.map(data => data.map((job, i) => <Job key={i} data={job} />))} */}
            {posts.map((job, i) => (
              <Job key={i} data={job} />
            ))}
          </Row>
        ) : (
          // TODO: Mostrar un skeleton
          <Row gutter={{ md: 0 }}>
            <JobSkeleton />
            <JobSkeleton />
            <JobSkeleton />
          </Row>
        )}
      </div>
    </Content>
  );
};

export default CentralContent;
