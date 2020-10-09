import React from 'react';
import { useLocation } from 'react-router-dom';

import './Error.scss';

function Error() {
  let location = useLocation();

  return (
    <div className="container">
      <h1
        className="error-block"
        data-text={`Invalid address ${
          location.pathname.length > 18
            ? location.pathname.substr(0, 17) + '...'
            : location.pathname
        }`}>
        Invalid address <br />
        <span>
          {location.pathname.length > 18
            ? location.pathname.substr(0, 17) + '...'
            : location.pathname}
        </span>
      </h1>
    </div>
  );
}

export default Error;
