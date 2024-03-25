import React, { CSSProperties } from 'react';
import Style from './Logo.module.scss';
import { LogoStyleDefault } from './LogoStyles';

interface LogoProps {
  style?: CSSProperties;
}

export const Logo = ({ style }: LogoProps) => {
  return (
    <div className={Style.logo} style={style ? style : LogoStyleDefault}>
      <h1>Amby</h1>
      <p>store</p>
    </div>
  );
};
