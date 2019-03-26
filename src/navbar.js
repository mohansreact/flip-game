import React from 'react';
import PropTypes from 'prop-types';
import './navbar.css';

const navbar = ({onNewGame}) => (
  <header>
    <h2><a>Flip Game</a></h2>
    <nav>
        <li><a>New Game</a></li>
    </nav>
  </header>
);

navbar.propTypes ={
    
};

export default navbar;