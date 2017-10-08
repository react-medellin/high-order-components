import React, { Component } from 'react';
import { fakeResponseCompany } from '../../utils/fakeResponse';

export class UserCompany extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      loading: true
    };
  }

  async componentDidMount() {
    console.log('loading company data...');
    const response = await fakeResponseCompany(2000);
    console.log('company data: ', response);

    this.setState(prevState => {
      return {
        loading: false,
        users: response
      }
    });
  }

  render() {
    const {
      loading,
      users
    } = this.state;

    return(
      <div>
        <h1>User + Company</h1>
        {loading && <h1>Loading...</h1>}
        {!!users.length &&
          <div>
            <pre>
              {JSON.stringify(users, null, 4)}
            </pre>
          </div>
        }
      </div>
    );
  }
}
