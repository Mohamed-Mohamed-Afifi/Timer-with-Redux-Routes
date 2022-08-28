// import logo from './logo.svg';
import './App.css';
import './timer.css'
// import { useDispatch } from 'react-redux'
import { Routes, Route, NavLink } from 'react-router-dom';
import NotFound from './NotFound'
// import Routs from './Routes/Routes';
import Home from './Home';
import Counter from './Counter';
import Timer from './Timer.';
import { Fragment } from 'react';
import Routers from './route';
import Shardlayout from './Shardlayout';
import Timertype from './Timertype';
function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home />} >
          {/* <Route index element={<Shardlayout />} /> */}
          <Route path='Counter' element={<Counter />} />
          <Route path='Timer' element={<Timer />} />
          <Route path='Timer/:Timertype' element={<Timertype />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
