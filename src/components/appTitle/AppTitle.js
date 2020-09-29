import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './appTitle.css';

const AppTitle = () => {
  return (
    <CSSTransition
      appear={true}
      in={true}
      timeout={500}
      unmountOnExit
      classNames="AppTitle"
    >
      <h1 className="title">PhoneBook</h1>
    </CSSTransition>
  );
};
export default AppTitle;
