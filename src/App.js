import './App.css';
import Home from './components/Home/Home/Home';
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Navbar from './components/SharedComponents/Navbar/Navbar';
import AirTicket from './components/AirTicket/AirTicket';
import HotelRoom from './components/HotelRoom/HotelRoom';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/air-ticket">
          <AirTicket></AirTicket>
        </Route>
        <Route path="/hotel-room">
          <HotelRoom></HotelRoom>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
