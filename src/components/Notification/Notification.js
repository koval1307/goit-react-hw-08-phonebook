import React from 'react';
import { CSSTransition } from 'react-transition-group';

import './notification.css';

export default Notification = () => {
  return (
    <CSSTransition>
      <p className="notification">This contact is already exists</p>
    </CSSTransition>
  );
};
