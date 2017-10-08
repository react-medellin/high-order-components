import React, { Component } from 'react';
import { fakeResponseCompany } from '../utils/fakeResponse';

export function withCompanyData(WrappedComponent) {
  class WithCompanyDataWrapper extends Component {
    constructor() {
      super();

      this.state = {
        loading: true,
        users: []
      };
    }

    async componentDidMount() {
      console.log('fetching user + company data...');
      const response = await fakeResponseCompany();

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

  return WithCompanyDataWrapper;
}
