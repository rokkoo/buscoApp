import React, { useEffect } from 'react';
import { useActions, useStore } from 'easy-peasy';
import Job from './Job';
import { Layout, Row } from 'antd';

const { Content } = Layout;

const Posts = [
  {
    id: 1,
    title: 'Llevar un paquete',
    locations: { from: 'calle X', to: 'Calle N' },
    description: 'desc',
    imgSrc: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    price: 120,
    date: {
      // UTC Time
      start: 1,
      finish: 12
    }
  },
  {
    id: 2,
    title: 'Llevar un paquete',
    locations: { from: 'calle X', to: 'Calle N' },
    description: 'desc',
    imgSrc: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    price: 120,
    date: {
      // UTC Time
      start: 1,
      finish: 12
    }
  },
  {
    id: 3,
    title: 'Llevar un paquete',
    locations: { from: 'calle X', to: 'Calle N' },
    description: 'desc',
    imgSrc: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    price: 120,
    date: {
      // UTC Time
      start: 1,
      finish: 12
    }
  }
];

const CentralContent = ({ match }) => {
  const state = useStore(state => state.postsList.list);

  useEffect(() => {
    // console.log(state);
  }, [state]);

  return (
    <Content style={{ padding: '0 50px', marginTop: '15px' }}>
      Posts
      <div style={{ background: '#fff', padding: 24 }}>
        <Row gutter={{ md: 0 }}>
          {state.map(data => data.map((job, i) => <Job key={i} data={job} />))}
        </Row>
      </div>
    </Content>
  );
};

export default CentralContent;
