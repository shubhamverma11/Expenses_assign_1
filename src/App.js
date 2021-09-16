// import logo from './logo.svg';
import "./App.css";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 7, 14),
    },
    {
      id: "e2",
      title: "Food",
      amount: 500.0,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e3",
      title: "Electricity",
      amount: 100.0,
      date: new Date(2021, 8, 15),
    },
  ];
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>    
      </header> */}
      <Expenses items={expenses}></Expenses>

    </div>
  );
}

export default App;
