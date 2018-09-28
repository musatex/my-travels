import React from "react";

const Travel = ({destination, country, photo, distance}) => (
  <figure>
    <img src={photo} alt="Photo de méxico" />
    <figcaption>
      <blockquote>
      {country}
      </blockquote>
      <blockquote>
      {distance}
      </blockquote>
      <cite>Visite une {destination}</cite>
    </figcaption>
  </figure>
);

export default Travel;
