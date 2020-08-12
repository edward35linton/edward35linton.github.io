import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavigationBar from './components/NavigationBar'
import Home from './views/Home'
import Projects from './views/Projects'
import Cv from './views/Cv'
import Footer from './components/Footer'

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/cv" component={Cv} />
        </Switch>
      </Router>
      <footer>
      <Footer />
      </footer>
    </React.Fragment>
  );
}

export default App;
