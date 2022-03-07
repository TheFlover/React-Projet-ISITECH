import './App.css';

function Welcome(props) {
  return <h1>Bonjour, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Nicolas" />
      <Welcome name="Florian" />
    </div>
  );
}

export default App;
