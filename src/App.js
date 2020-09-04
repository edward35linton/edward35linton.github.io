import React from 'react';
import {HashRouter, Route, Link} from 'react-router-dom';
import NavigationBar from './components/NavigationBar'
import Home from './views/Home'
import Projects from './views/Projects'
import Cv from './views/Cv'
import Footer from './components/Footer'

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <HashRouter basename='/'>
      		<Route exact path="/" component={Home} />
         	<Route path="/projects" component={Projects} />
          	<Route path="/cv" component={Cv} />
      </HashRouter>
      <footer>
      <Footer />
      </footer>
    </React.Fragment>
  );
}

export default App;
