import React from 'react';
import Style from './Mockup.module.scss';
import Bage from './assets/Bage.png';
import Bag from './assets/Bag.png';

export const Mockup = () => {
  return (
    <div className={Style.container}>
      <img src={Bag} alt="" />
      <img src={Bage} alt="" />
    </div>
  );
};
