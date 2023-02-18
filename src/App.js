import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact name='Alex ' surname='Hacker ' email='alexhacker@gmail.com ' onlineStatus='true' />
    </div>
  );
}

export default App;
