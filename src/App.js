import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Appointments from './Pages/Pacient/Appointments/Appointments';

function App() {
  return (
    <div className="App">
      <Sidebar />

      {/* landing page */}
      {/* <FrontPage /> */}

      {/* Homepage Pacient */}
      {/* <Homepage /> */}

      {/* Appointments Pacient */}
      <Appointments />

    </div>
  );
}

export default App;
