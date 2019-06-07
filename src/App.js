import React from 'react';
import { Layout } from 'antd';

// import { Route, Switch, Link } from 'react-router-dom';
import { Router, Link } from '@reach/router';

import 'antd/dist/antd.css';
import './App.css';

import Header from './components/Header/Header';
import Content from './components/Content/';
import Footer from './components/Footer';

function App() {
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
