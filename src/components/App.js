import React from 'react';
import Popular from './Popular';
import Nav from './Nav';
import Home from './Home';
import Battle from './Battle';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav/>
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route exact path='/battle' component={ Battle }/>
            <Route exact path='/popular' component={ Popular }/>
            <Route render={ function () {
              return <p> Not Found </p>
            }}/>
          </Switch>

        </div>
      </Router>

    )
  }
}

export default App;
