import React from 'react';
import Style from './Palete.module.scss';

export const Palete = () => {
  return (
    <div className={Style.container}>
      <span>COLOR PALETTE</span>
      <div className={Style.palete}>
        <div className={Style.card}>
          <div></div>
          <p>364BBC</p>
        </div>
        <div className={Style.card}>
          <div></div>
          <p>E36F3D</p>
        </div>
        <div className={Style.card}>
          <div></div>
          <p>E2D7CA</p>
        </div>
        <div className={Style.card}>
          <div></div>
          <p>000000</p>
        </div>
      </div>
    </div>
  );
};
