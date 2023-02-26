import React from 'react';
import './style.css';
import SchemeColor from '../../components/SchemeColor';
import { palettes } from '../../palettes.js';

const Palette = ({ paletteData}) => {
  
  const directionClass = paletteData.direction === "horizontal" ? "palette-scheme palette-scheme--horizontal" : "palette-scheme palette-scheme--vertical";

  return (
    <div className="palette">
    <div className={directionClass}>
      <img className="scheme-image" src={paletteData.image} alt="Mimosa Retreat" />
      <div className="scheme-colors">
        {paletteData.colors.map((color) => (
          <SchemeColor
            color={color}
            key={color}
          />
        ))}
      </div>
    </div>
    <div className="palette-info">
      <h2>{paletteData.name}</h2>
      <p>{paletteData.description}</p>

      <p>Photo by <a href={paletteData.attribution.url} target="_blank">{paletteData.attribution.name}</a>.</p>
    </div>
  </div>
  );
};



export default Palette;