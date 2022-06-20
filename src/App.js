import './App.css';
import Header from './pages/Header/Header';
import NoteList from './pages/NoteList/NoteList';

function App() {
  return (
    <div className="App">
      <h1>Hello Note with in React.js</h1>

      <Header></Header>
      <NoteList></NoteList>
    </div>
  );
}

export default App;
