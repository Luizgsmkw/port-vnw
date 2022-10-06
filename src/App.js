import logo from './logo.svg';
import './App.css';
import { GlobalStyled } from './components/styles/GlobalStyled';
import Routes from './components/routes/Routes';
function App() {
  return (
    <div >
      <GlobalStyled />
      <Routes />
    </div>
  );
}

export default App;
