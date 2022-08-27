// import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux'
// import Counter from './counter';
import { Routes, Route, NavLink } from 'react-router-dom';
import CountComponent from './CountComponent';
import './timer.css'
// import Timer from './Timer'
import Routs from './Routes/Routes';
function App() {
  const dispatch = useDispatch()
  return (
    <div className="App">
      <div className='container'>
        <div className='seletor d-flex justify-content-center'>
          <NavLink to='/Counter' className='px-2'>Counter</NavLink>
          <NavLink to='/Timer'>Timer</NavLink>
        </div>
        <Routs />
      </div>
    </div>
  );
}

export default App;
