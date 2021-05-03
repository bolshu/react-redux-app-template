import React from 'react';

import './styles.scss';

const Main: React.FC = ({ children }) => (
  <main className="main">
    {children}
  </main>
);

export default Main;
