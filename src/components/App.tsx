import React from 'react';
import './Reset.module.scss';
import Style from './App.module.scss';
import { Wellcome } from './Wellcome/Wellcome';
import { About } from './About/About';
import { Palete } from './Palete/Palete';

export const App = () => {
  return (
    <div className={Style.container}>
      <Wellcome />
      <About />
      <Palete />
    </div>
  );
};
