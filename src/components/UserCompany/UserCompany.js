import React from 'react';
import { withCompanyData } from '../../hocs/withCompanyData';

export function UserCompany({ loading, users }) {
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

UserCompany.defaultProps = {
  loading: true,
  users: []
};

const withCompany = withCompanyData(UserCompany);

export default withCompany;
