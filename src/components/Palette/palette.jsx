import React from 'react';
import "./palette.css"
import SchemeColor from "../SchemeColor/schemeColor"

const Palette = ({paletteData}) => (
  <div className="palette">
    <div className={`palette-scheme palette-scheme--${paletteData.direction}`}>
      <img className="scheme-image" src={paletteData.image} alt="Mimosa Retreat" />
      <div className="scheme-colors">
        {paletteData.colors.map(item => <SchemeColor key={item} color={item} />)}      
      </div>
    </div>
    <div className="palette-info">
      <h2>{paletteData.name}</h2>
      <p>{paletteData.description}</p>
      <p>Photo by <a href={paletteData.attribution.url} target="_blank">{paletteData.attribution.name}</a>.</p>
    </div>
  </div>
)

export default Palette