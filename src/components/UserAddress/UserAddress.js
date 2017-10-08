import React, { Component } from 'react';

export class UserAddress extends Component {
  render() {
    const {
      loading,
      users
    } = this.props;

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
