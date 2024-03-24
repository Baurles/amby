import React from 'react';
import Style from './About.module.scss';

export const About = () => {
  return (
    <div>
      <div className={Style.container}>
        <div className={Style.info}>
          <h2>PRIMARY LOGO</h2>
          <p>
            Целевая аудитория:
            <br />
            Женщины возраста от 25 до 45 лет, ценящие стиль, качество и комфорт.
            Активные, творческие личности, стремящиеся открывать и выражать свой
            уникальный стиль.
          </p>
          <div className={Style.collections}>
            <p>Коллекции:</p>
            <ol>
              <li>
                &quot;Urban Chic&quot; - стильные и современные повседневные
                образы для городской жизни.
              </li>
              <li>
                &quot;Boho Vibes&quot; - легкие и воздушные образы с этническими
                мотивами для свободных и креативных личностей.
              </li>
              <li>
                &quot;Classic Elegance&quot; - элегантные и утонченные образы
                для особых случаев и деловых встреч.
              </li>
            </ol>
          </div>
        </div>
        <img src="" alt="" className="logo" />
      </div>
    </div>
  );
};
