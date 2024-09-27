import React from 'react';
import palettes from './palettes'
import Palette from './components/Palette/palette'

const App = () => (
    <div className="container">
      <header>
        <h1>Barevné palety</h1>
      </header>
      <main>
        {palettes.map(palette => <Palette key={palette.name} paletteData={palette} />)}
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
)

export default App
