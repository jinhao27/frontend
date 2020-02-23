import React from 'react';
import { Router } from '@reach/router';

const Routes = () => {
  return (
    <>
      <Header />
      <Router>
        <Home path='/' />
      </Router>
    </>
  );
};

export default Routes;
