import Navbar from './Navbar';
import AppSwitch from './AppSwitch';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <main>
        <AppSwitch/>
      </main>
    </BrowserRouter>
  );
}

export default App;
