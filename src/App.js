import "./App.css";
import Purchase from "./components/Purchase";
import Cart from "./components/Cart";
import Total from "./components/Total";
import Users from "./components/Users";
function App() {
  return (
    <div className="App">
      <h1>Redux</h1>
      <Users /> <Purchase />
      <Cart />
      <Total />
    </div>
  );
}

export default App;
