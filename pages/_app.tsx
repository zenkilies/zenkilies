import React from 'react';

import "src/styles/app.scss";

export default ({Component, pageProps}) => {
  return (
    <React.Fragment>
      <Component {...pageProps} />
    </React.Fragment>
  );
};
