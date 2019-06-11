import React from 'react';
import { StoreProvider } from 'easy-peasy';
import { Layout } from 'antd';

// import { Route, Switch, Link } from 'react-router-dom';
import { Router, Link } from '@reach/router';

import 'antd/dist/antd.css';
import './App.css';

import store from './store';

import Header from './components/Header/Header';
import Content from './components/Content/';
import Footer from './components/Footer';

function App() {
  store.dispatch.postsList.loadList();
  return (
    <StoreProvider store={store}>
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
    </StoreProvider>
  );
}

export default App;
