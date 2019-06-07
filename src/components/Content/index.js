import React from 'react';
import { Router } from '@reach/router';

import Jobs from './Jobs';
import JobDetail from './JobDetail';

const Main = () => {
  return (
    <Router primary={false}>
      <Jobs path="/" />
      <JobDetail path="/ofertas" />
    </Router>
  );
};

export default Main;
