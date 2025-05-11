import React from 'react';
import shadowImage from '../../assets/img/shadow.png'
import image404 from '../../assets/img/pokebola.png'
import { ReturnButton } from '../../shared/components';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="error__page shadow">
      <h2>UPS!</h2>

      <div className="error__imageBox">
        <div className="error__imageContainer">
          <p>4</p>
          <img src={image404} alt="404 Image" />
          <p>4</p>
        </div>
        <div className="error__imageShadow">
          <img src={shadowImage} alt="Shadow image" />
        </div>
      </div>

      <p className="error__text">No se encontraron resultados</p>

      <div className="animate__animated animate__bounce animate__infinite">
        <ReturnButton>&larr; Regresar</ReturnButton>
      </div>
    </div>
  );
};
