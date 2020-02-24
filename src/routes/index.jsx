import React from 'react';
import { Router } from '@reach/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chat from './Chat';
import Dashboard from './Dashboard';
import Signup from './Signup';
import Login from './Login';

const Routes = () => {
  return (
    <>
      <Header />
      <Router>
        <Chat path='/chat' />
        <Dashboard path='/dashboard' />
        <Login path='/login' />
        <Signup path='/signup' />
      </Router>
      <Footer />
    </>
  );
};

export default Routes;
