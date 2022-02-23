
import './App.css';
import LandingPage from './LandingPage/LandingPage';
import DisplayEvent from './DisplayEvent/DispalyEvent';
import CreateEvent from './CreateEvent/CreateEvent';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <LandingPage></LandingPage>
    // <Router>
    //   <div exact className="App">
    //     <Routes>
    //       <Route exact path="/" component={LandingPage}> </Route>
    //       <Route exact path="/create" component={DisplayEvent}></Route>
    //       <Route exact path="/event" component={CreateEvent}></Route>
    //     </Routes>
    //   </div>
    // </Router>
  );
}

export default App;
