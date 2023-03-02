import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import CreateTransaction from './components/CreateTransaction';
import EscrowContract from './components/EscrowContract';
import EscrowProcess from './components/EscrowProces';
import AccountPage from './components/AccountPage';
import SettingsPage from './components/SettingsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/account' element={<AccountPage/>} />
          <Route path='/transactions' element={<CreateTransaction/>}/>
          <Route path='/contract' element={<EscrowContract/>} />
          <Route path='/process' element={<EscrowProcess />}/>
          <Route path='/settings' element={<SettingsPage />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
