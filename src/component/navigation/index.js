import './_navigation.scss';
import React from 'react';
import {Link} from 'react-router-dom';

import StyleSheet from '../style-sheet';

class Navigation extends React.Component{
  render(){
    return (
      <section className="navigation">
        <h2>Navigation</h2>
        <ul>
          <li><Link to="/">Link to Landing</Link> </li>
          <li><Link to="/login">Link to Login</Link> </li>
          <li><Link to="/home">Link to Home</Link></li>
          <li><Link to="/styleSheet">Link to styleSheet</Link></li>

        </ul>
      </section>);
  }
}

export default Navigation;
