import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home/Home';
import { UserAddress } from './components/UserAddress/UserAddress';
import { UserCompany } from './components/UserCompany/UserCompany';
import { fakeResponseCompany } from './utils/fakeResponse';
import { fakeResponseAddress } from './utils/fakeResponse';

class App extends Component {
  constructor() {
    super();

    this.state = {
      loadingCompany: true,
      loadingAddress: true,
      userCompany: [],
      userAddress: []
    };
  }
  async componentDidMount() {
    console.log('Loading companies...');
    console.log('Loading address...');
    const company = await fakeResponseCompany();
    const address = await fakeResponseAddress();

    this.setState(() => {
      return {
        loadingAddress: false,
        loadingCompany: false,
        userCompany: company,
        userAddress: address
      };
    });
  }
  render() {
    const {
      loadingAddress,
      loadingCompany,
      userCompany,
      userAddress
    } = this.state;

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
              <li><Link to="/user-with-address">User With Address Info</Link></li>
              <li><Link to="/user-with-company">User With Company Info</Link></li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/user-with-address" render={() => <UserAddress loading={loadingAddress} users={userAddress} />} />
            <Route path="/user-with-company" render={() => <UserCompany loading={loadingCompany} users={userCompany} />} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
