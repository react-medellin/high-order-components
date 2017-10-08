import React, { Component } from 'react';
import { fakeResponseAddress } from '../../utils/fakeResponse';

export class UserAddress extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      loading: true
    };
  }

  async componentDidMount() {
    console.log('loading address data...');
    const response = await fakeResponseAddress(2000);
    console.log('address data: ', response);

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
        <h1>User + Address</h1>
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
