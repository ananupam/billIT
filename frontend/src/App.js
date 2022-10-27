
import './App.css';
import Home from './components/home/Home';
import DisplayAll from './components/displayAll/DisplayAll';
import AddNew from './components/addNew/AddNew';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
          <Route exact path='/' element={<Home/>} />
        </Routes>
        <Routes>
          <Route path='/dispalyall' element={<DisplayAll/>} />
        </Routes>
        <Routes>
          <Route path='/addnew' element={<AddNew/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
