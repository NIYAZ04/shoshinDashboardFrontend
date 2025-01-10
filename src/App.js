import { BrowserRouter as Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './usablecomponents/Header/Header'
import Dashboard from './usablecomponents/DashboardComponent/Dashboard';
import Container from './usablecomponents/Content/Container';
function App() {
  return (
    <div className="App">
      <div className='application'>
        <div className='section1'>
          <Dashboard />
        </div>
        <div className='section2'>
          <div className='nav'>
            <Header />
          </div>
          <div className='cont'>
            <Container />
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
