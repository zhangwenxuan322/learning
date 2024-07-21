import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react'


function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "One half pound bag of Coca Covered Almonds Unsalted"
    },
    {
      id: 2,
      checked: false,
      item: "Item 2"
    },
    {
      id: 3,
      checked: false,
      item: "Item 3"
    }
  ]);

  return (
    <div className="App">
      <Header title="Grocery List" />
      <Content
        items={items}
        setItems={setItems}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
