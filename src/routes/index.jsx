import React from 'react';
import { Router } from '@reach/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chat from '../routes/Chat';
import Dashboard from '../routes/Dashboard';
import Login from '../routes/Login';
import Signup from '../routes/Signup';

const Routes = () => {
  return (
    <>
      <Header />
      <Router>
        <Chat path='/chat' />
        <Dashboard path='/Dashboard' />
        <Login path='/Login' />
        <Signup path='/Signup' />
      </Router>
      <Footer />
    </>
  );
};

export default Routes;
