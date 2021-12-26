import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Doctors from './Pages/Pacient/Doctors/Doctors';
import Homepage from './Pages/Pacient/Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Sidebar />

      {/* landing page */}
      {/* <FrontPage /> */}

      {/* Pacient Side */}
      {/* <Homepage /> */}
      {/* <Appointments /> */}
      {/* <Billing /> */}
      <Doctors />


    </div>
  );
}

export default App;
