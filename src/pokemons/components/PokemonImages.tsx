import React from 'react';

interface PokemonImagesProps {
  images: (string | undefined)[];
  type: string[],
}

export const PokemonImages: React.FC<PokemonImagesProps> = ({ images, type }) => {
  return (
    <>
      {images.map((img) => (
        <figure
          className={`background-${type[0]} pokemon__gallery-box`}
        >
          <img src={img} alt="Pokemon image" />
        </figure>
      ))}
    </>
  );
};
