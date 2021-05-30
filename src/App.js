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
import AdminPanel from './components/AdminPanel/AdminPanel/AdminPanel';
import AddAirTicket from './components/AdminPanel/AddAirTicket/AddAirTicket';
import AddHotelRoom from './components/AdminPanel/AddHotelRoom/AddHotelRoom';
import BookedAitTicket from './components/AdminPanel/BookedAirTicket/BookedAitTicket';
import BookedHotelRoom from './components/AdminPanel/BookedHotelRoom/BookedHotelRoom';
function App() {
  return (
    <Router>
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
        <Route path="/admin-panel">
          <AdminPanel></AdminPanel>
        </Route>
        <Route path="/admin/add-air-tickets">
          <AddAirTicket></AddAirTicket>
        </Route>
        <Route path="/admin/add-hotel-rooms">
          <AddHotelRoom></AddHotelRoom>
        </Route>
        <Route path="/admin/booked-air-tickets">
          <BookedAitTicket></BookedAitTicket>
        </Route>
        <Route path="/admin/booked-hotel-rooms">
          <BookedHotelRoom></BookedHotelRoom>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
