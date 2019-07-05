import React, { useEffect } from 'react';
import { StoreProvider } from 'easy-peasy';
import { useDispatch } from 'react-redux';
import { Layout, ske } from 'antd';

// import { Route, Switch, Link } from 'react-router-dom';
import { Router, Link } from '@reach/router';

import 'antd/dist/antd.css';
import './App.css';

import Header from './components/Header/Header';
import Content from './components/Content/Routes';
import Footer from './components/Footer';

const s = 56;

// TODO: In backend relation with user who do it
const posts = [
  {
    id: 1,
    title: 'Llevar un paquete',
    locations: { from: 'calle X', to: 'Calle N' },
    description: 'desc',
    imgSrc: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    price: 120,
    date: {
      // UTC Time
      start: 3000,
      finishTime: new Date(`Mon Jun 24 2019 18:${s}:10 GMT+0200`)
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
      start: 6000,
      finishTime: new Date(`Mon Jun 24 2019 18:${s}:20 GMT+0200`)
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
      start: 12000,
      finishTime: new Date(`Mon Jun 24 2019 18:${s}:30 GMT+0200`)
    }
  },
  {
    id: 4,
    title: 'Llevar un paquete',
    locations: { from: 'calle X', to: 'Calle N' },
    description: 'Personal description',
    imgSrc: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    price: 120,
    date: {
      // UTC Time
      start: 16000,
      finishTime: new Date(`Mon Jun 24 2019 18:${s}:30 GMT+0200`)
    }
  }
];

const serverFetch = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([...posts]);
    }, 0);
  });
};

function App() {
  //store.dispatch.postsList.loadList();
  const dispatch = useDispatch();

  const getPosts = async () =>
    dispatch({
      type: 'LOAD_PAGE',
      posts: await serverFetch()
    });

  useEffect(() => {
    // Get server posts
    getPosts();
  }, []);

  return (
    <Layout className="layout" style={{}}>
      {/* <Switch>
        <Route exact path="/" component={MainHeader} />
        <Route path="/trabajo" component={CentralContent} />
        <Route path="/contact" component={Footer} />
      </Switch> */}
      <Header />
      <Content />
      <Footer />
    </Layout>
  );
}

export default App;
