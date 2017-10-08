import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home/Home';
import UserAddress from './components/UserAddress/UserAddress';
import UserCompany from './components/UserCompany/UserCompany';
import { withGreeting } from './hocs/withGreeting';

const HomeWithGreeting = withGreeting(Home);

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">React Medellin / High Order Components</h1>
          </header>
        </div>
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/home-with-hoc">Home With HoC</Link></li>
              <li><Link to="/user-with-address">User With Address Info</Link></li>
              <li><Link to="/user-with-company">User With Company Info</Link></li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route exact path="/home-with-hoc" render={() => <HomeWithGreeting name="Meetup user!" />} />
            <Route path="/user-with-address" component={UserAddress} />
            <Route path="/user-with-company" component={UserCompany} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
