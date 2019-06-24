import React, { useEffect, useState } from 'react';
// import { useActions, useStore } from 'easy-peasy';
import { useSelector, useStore, useDispatch } from 'react-redux';
import Job from './Job';
import { Layout, Row } from 'antd';

const { Content } = Layout;

const CentralContent = ({ match }) => {
  // const state = useStore(state => state.postsList.list);
  const state = useStore().getState();
  const { posts } = useSelector(state => state);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <Content style={{ padding: '0 50px', marginTop: '15px' }}>
      Posts
      <div style={{ background: '#fff', padding: 24 }}>
        <Row gutter={{ md: 0 }}>
          {/* {posts.map(data => data.map((job, i) => <Job key={i} data={job} />))} */}
          {posts.map((job, i) => (
            <Job key={i} data={job} />
          ))}
        </Row>
      </div>
    </Content>
  );
};

export default CentralContent;
