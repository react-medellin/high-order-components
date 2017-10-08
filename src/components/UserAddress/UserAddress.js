import React from 'react';
import { withAddressData } from '../../hocs/withAddressData';

export function UserAddress({ loading, users }) {
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

UserAddress.defaultProps = {
  loading: true,
  users: []
};

const withAddress = withAddressData(UserAddress);

export default withAddress;
