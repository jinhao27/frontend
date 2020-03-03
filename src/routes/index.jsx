import React from 'react';
import { Router } from '@reach/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chat from './Chat';
import Dashboard from './Dashboard';
import Signup from './Signup';
import Login from './Login';
import About from './About';
import Event from './Event';
import Home from '../components/Home';

const Routes = () => {
  return (
    <>
      <Header />
      <Router>
        <Home path='/' />
        <Chat path='/chat' />
        <Dashboard path='/dashboard' />
        <Login path='/login' />
        <Signup path='/signup' />
        <About path='/about' />
        <Event path='/event' />
      </Router>
      <Footer />
    </>
  );
};

export default Routes;
