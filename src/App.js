import React, { useEffect } from "react";
import { StoreProvider } from "easy-peasy";
import { useDispatch } from "react-redux";
import { Layout, ske } from "antd";

// import { Route, Switch, Link } from 'react-router-dom';
import { Router, Link } from "@reach/router";

import "antd/dist/antd.css";
import "./App.css";

import Header from "./components/Header/Header";
import Content from "./components/Content/Routes";
import Footer from "./components/Footer";

const posts = [
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
      finishTime: new Date()
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
      finishTime: new Date()
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
      finishTime: new Date()
    }
  }
];

const serverFetch = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([...posts]);
    }, 10);
  });
};

function App() {
  //store.dispatch.postsList.loadList();
  const dispatch = useDispatch();

  const getPosts = async () =>
    dispatch({
      type: "LOAD_PAGE",
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
