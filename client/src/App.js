// External Libraries
import 'bootstrap/dist/css/bootstrap.min.css';

// External Components
import './App.css';

import Home from './screens/Home/Home'
/*
import WritingSamples from './screens/WritingSamples/WritingSamples';
import Projects from './screens/Projects/Projects';
*/
import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';


function App() {

  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
