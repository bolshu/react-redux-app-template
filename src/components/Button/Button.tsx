import React from 'react';

import './styles.scss';

type TProps = {
  onClick: () => void;
}

const Button: React.FC<TProps> = ({
  onClick,
  children,
}) => (
  <button className="button" onClick={onClick} type="button">
    {children}
  </button>
);

export default Button;
