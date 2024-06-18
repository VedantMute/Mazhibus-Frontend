import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './components/HomePage';
import BootomNav from './components/BootomNav';
import Tickets from './components/Tickets';
import Accounts from './components/Accounts';
import BusSearch from './components/BusSearch';
import SeatSelect from './components/SeatSelect';
import Success from './components/Success';
import More from './components/More';
import GetStarted from './components/GetStarted';
import Tcard from './components/Tcard';


function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/selectBus" element={<BusSearch />} />
          <Route path="/seat" element={<SeatSelect />} />
          <Route path="/success" element={<Success />} />
          <Route path="/explore" element={<More />} />
          <Route path="/welcome" element={<GetStarted />} />
          <Route path="/v" element={<Tcard />} />
          {/* <Route path="/db" element={<SendData />} /> */}
          {/* <Route path="/dbdata" element={<DbData />} /> */}
          {/* <Route path="/t" element={<SeatSelector/>} /> */}
          {/* Final deploy */}

        </Routes>
        <ConditionalBottomBar />
      </div>
    </Router>
  );
}

function ConditionalBottomBar() {
  const location = useLocation();
  const hideBottomBar = location.pathname === '/welcome';

  return !hideBottomBar ? (
    <div className="fixed bottom-0 w-full">
      <BootomNav />
    </div>
  ) : null;
}

export default App;
