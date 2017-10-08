import React from 'react';
import { withRemoteData } from '../../hocs/withRemoteData';
import { fakeResponseCompany } from '../../utils/fakeResponse';

export function UserCompany({ users }) {
  return(
    <div>
      <h1>User + Company</h1>
      <div>
        <pre>
          {JSON.stringify(users, null, 4)}
        </pre>
      </div>
    </div>
  );
}

UserCompany.defaultProps = {
  users: []
};

const withCompany = withRemoteData(UserCompany, fakeResponseCompany);

export default withCompany;
