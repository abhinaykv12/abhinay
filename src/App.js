import logo from './logo.svg';
import './App.css';
import Login from './components/Login';

import Appbar from './components/Appbar';
import Regis from './components/Regis';
import Statebasics from './components/Statebasics';
import Counter from './components/Counter';
import UseE from './components/UseE';

function App() {
  return (
    <div className="App">
      {/* <Login></Login> */}
  
<Appbar/>
<Regis/>
{/* <Statebasics/> */}
<Counter/>
<UseE/>


    </div>
  );
}

export default App;
