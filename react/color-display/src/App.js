import ColorDisplay from "./ColorDisplay";
import Input from "./Input";
import { useState } from 'react';

function App() {
  const [colorName, setColorName] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [isDarkText, setIsDarkText] = useState(true)

  return (
    <div className="App">
      <ColorDisplay
        colorName={colorName}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <Input
        colorName={colorName}
        setColorName={setColorName}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
