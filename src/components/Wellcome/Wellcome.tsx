import React from 'react';
import Style from './Wellcome.module.scss';

export const Wellcome = () => {
  return (
    <div className={Style.container}>
      <ul className={Style.top}>
        <li>BRAND IDENTITY</li>
        <li>FASHION 2024</li>
      </ul>
      <div className={Style.logo}>
        <h1>Amby</h1>
        <p>store</p>
      </div>

      <div className={Style.bottom}>BRAND OF WOMAN CLOTHING</div>
    </div>
  );
};
