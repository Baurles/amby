import React from 'react';
import './Reset.module.scss';
import Style from './App.module.scss';
import { Wellcome } from './Wellcome/Wellcome';
import { About } from './About/About';
import { Palete } from './Palete/Palete';
import { LogoPreview } from './LogoPreview/LogoPreview';
import { FontPreview } from './FontPreview/FontPreview';
import { Mockup } from './Mockup/Mockup';
import { History } from './History/History';

export const App = () => {
  return (
    <div className={Style.container}>
      <Wellcome />
      <About />
      <Palete />
      <LogoPreview />
      <FontPreview />
      <Mockup />
      <History />
    </div>
  );
};
