// External Libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';

// External Components
import './App.css';

import Home from './screens/Home/Home'
import Books from './screens/Books/Books'
import WritingSamples from './screens/WritingSamples/WritingSamples';
import Projects from './screens/Projects/Projects';
import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';


function App() {

  return (
    <div className="App">
      <Header />
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/writing">
        <WritingSamples />
      </Route>
      <Route path="/books">
        <Books />
      </Route>

    </div>
  );
}

export default App;
