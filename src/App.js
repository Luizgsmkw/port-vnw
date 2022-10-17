import logo from './logo.svg';
import './App.css';
import { GlobalStyled } from './components/styles/GlobalStyled';
import Routes from './components/routes/Routes';
import Modal from 'react-modal'
Modal.setAppElement('#root')
function App() {
  return (
    <div >
      <GlobalStyled />
      <Routes />
    </div>
  );
}

export default App;
