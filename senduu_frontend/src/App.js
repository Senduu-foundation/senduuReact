import './App.css';

function App() {
  const handleNameChange = () => {
    const name = ['Bob', 'Kevin', 'Dave'];
    const int = Math.floor(Math.random() * 3);
    return name[int];
;  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello {handleNameChange()}!
        </p>
        <a
          className="App-li nk"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
