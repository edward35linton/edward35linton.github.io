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
          <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
          <Route exact path={process.env.PUBLIC_URL + "/projects"} component={Projects} />
          <Route exact path={process.env.PUBLIC_URL + "/cv"} component={Cv} />
        </Switch>
      </Router>
      <footer>
      <Footer />
      </footer>
    </React.Fragment>
  );
}

export default App;
