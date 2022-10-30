import './App.css';
import RouterConfig from './routes/RouterConfig';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Navbar/>
          <RouterConfig />
        </div>
    </BrowserRouter>
  );
}

export default App;
