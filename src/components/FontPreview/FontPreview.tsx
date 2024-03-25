import React from 'react';
import Style from './FontPreview.module.scss';

export const FontPreview = () => {
  return (
    <div className={Style.container}>
      <span className={Style.label}>FONT</span>
      <div className={Style.fonts}>
        <div>
          <span>Garamond</span>
          <span>a b c d e f g h i j k l m n o p q r s t u y w</span>
        </div>
        <div>
          <span>Ambidexter</span>
          <span>a b c d e f g h i j k l m n o p q r s t u y w</span>
        </div>
      </div>
    </div>
  );
};
