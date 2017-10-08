import React, { Component } from 'react';
import { fakeResponseAddress } from '../utils/fakeResponse';

export function withAddressData(WrappedComponent) {
  class WithAddressWrapper extends Component {
    constructor() {
      super();

      this.state = {
        loading: true,
        users: []
      };
    }

    async componentDidMount() {
      console.log('fetching user + address data...');
      const response = await fakeResponseAddress();

      this.setState(() => {
        return {
          loading: false,
          users: response
        };
      });
    }

    render() {
      const {
        loading,
        users
      } = this.state;

      return (
        <div>
          {
            loading &&
            <h1>Loading...</h1>
          }
          {
            !!users.length &&
            <WrappedComponent users={users} loading={loading} />
          }
        </div>
      );
    }
  }

  return WithAddressWrapper;
}
