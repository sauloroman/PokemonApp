import React from "react";

import PokemoLettering from '../../assets/img/pokedex__title.png'

export const Bar: React.FC = () => {
  return (
    <div className="bar">
      <img src={PokemoLettering} className="bar__image" />
      <div className="bar__ball"></div>
      <div className="bar__black"></div>
    </div>
  );
};
