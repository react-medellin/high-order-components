import React, { Component } from 'react';

export function withRemoteData(WrappedComponent, fetcher) {
  class WithCompanyDataWrapper extends Component {
    constructor() {
      super();

      this.state = {
        loading: true,
        users: []
      };
    }

    async componentDidMount() {
      console.log('fetching user data...');
      const response = await fetcher();

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
            <WrappedComponent users={users} />
          }
        </div>
      );
    }
  }

  return WithCompanyDataWrapper;
}
