import './App.css';
import Child1 from "./components/Child1/Child1.jsx"
import Child2 from "./components/Child2.jsx"

function App() {
  const grandchildStyle = {
    height: "100px",
    width: "300px",
    borderRadius: "100%",
    backgroundColor: "red",
    margin: "0 auto"
  }

  return (
    <div className="App">
      <h1>My annoying styled React app! 😂</h1>
      <Child1 stylesheet={grandchildStyle}/>
      <Child2 stylesheet={grandchildStyle}/>
    </div>
  );
}

export default App;
