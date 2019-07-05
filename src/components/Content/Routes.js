import React from 'react';
import { Router } from '@reach/router';

import Jobs from './Jobs';
import JobDetail from './JobDetail';

const Routes = () => {
  return (
    <Router primary={false}>
      <Jobs path="/" />
      <JobDetail path="/trabajo/:jobId" />
      {/* <JobDetail path="/ofertas" /> */}
    </Router>
  );
};

export default Routes;
