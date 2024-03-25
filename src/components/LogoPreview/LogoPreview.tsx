import React from 'react';
import Style from './LogoPreview.module.scss';
import { Logo } from '../Logo/Logo';
import { LogoStyleBB, LogoStyleBG, LogoStyleWO } from '../Logo/LogoStyles';
export const LogoPreview = () => {
  return (
    <div className={Style.container}>
      <div className={Style.card}>
        <Logo style={LogoStyleWO} />
      </div>
      <div className={Style.card}>
        <Logo style={LogoStyleBG} />
      </div>
      <div className={Style.card}>
        <Logo style={LogoStyleBB} />
      </div>
    </div>
  );
};
