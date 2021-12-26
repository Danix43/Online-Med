import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Billing from './Pages/Pacient/Billing/Billing';
import Homepage from './Pages/Pacient/Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Sidebar />

      {/* landing page */}
      {/* <FrontPage /> */}

      {/* Homepage Pacient */}
      {/* <Homepage /> */}

      {/* Appointments Pacient */}
      {/* <Appointments /> */}

      <Billing />

    </div>
  );
}

export default App;
