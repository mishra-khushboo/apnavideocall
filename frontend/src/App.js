import './App.css';
import {Route, BrowserRouter as Router,Routes} from 'react-router-dom'
import LandingPage from './pages/landing';
function App() {
  return (
    <>
      <Router>
        
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
        </Routes>
    </Router>
    </>
  );
}

export default App;
