// import logo from './logo.svg';
import './App.css';
import { choice, remove } from "./helpers";
import fruits from './food.js'

function App() {
  const selectedFruit = choice(fruits);

  return (
    <div className="App">
      <p>I'd like one {selectedFruit}, please</p>
      <p>Here you go: { remove(fruits, selectedFruit) }</p>
      <p>May I have another?</p>
      <p>I'm sorry, we're all out. We have {fruits.length} other types though.</p>
    </div>
  );
}

export default App;
