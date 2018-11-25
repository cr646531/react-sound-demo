import React, { Fragment, Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Nav from './Nav';

class App extends Component {
  

  render() {
    return (
      <Router>
        <Fragment>
          <Route path="/" component={ Nav } />
        </Fragment>
      </Router>
    )
  }

}



export default App;
