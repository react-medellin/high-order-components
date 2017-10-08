import React from 'react';

export function Home({ name, age }) {
  return(
    <div>
      Hey from Home component {name} / age: {age}
    </div>
  );
}

Home.defaultProps = {
  name: 'John Doe',
  age: 35
};
