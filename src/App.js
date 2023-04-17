
import { useSelector } from 'react-redux';
import './App.css';
import Home from './Home';

function App() {

  const {c} = useSelector((state) => state.custom);

  return (
    <>
      <h1>{c}</h1>
     <Home/>
    </>
  );
}

export default App;
