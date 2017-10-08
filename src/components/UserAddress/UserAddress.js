import React from 'react';
import { withRemoteData } from '../../hocs/withRemoteData';
import { fakeResponseAddress } from '../../utils/fakeResponse';

export function UserAddress({ users }) {
  return(
    <div>
      <h1>User + Address</h1>
      <div>
        <pre>
          {JSON.stringify(users, null, 4)}
        </pre>
      </div>
    </div>
  );
}

UserAddress.defaultProps = {
  users: []
};

const withAddress = withRemoteData(UserAddress, fakeResponseAddress);

export default withAddress;
