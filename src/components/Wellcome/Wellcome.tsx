import React from 'react';
import Style from './Wellcome.module.scss';
import { Logo } from '../Logo/Logo';

export const Wellcome = () => {
  return (
    <div className={Style.container}>
      <ul className={Style.top}>
        <li>BRAND IDENTITY</li>
        <li>FASHION 2024</li>
      </ul>
      <Logo />

      <div className={Style.bottom}>BRAND OF WOMAN CLOTHING</div>
    </div>
  );
};
