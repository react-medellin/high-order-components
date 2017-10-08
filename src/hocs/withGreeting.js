import React from 'react';

export const withGreeting = WrappedComponent => props => {

  const upperCasedName = props.name.toUpperCase();

  return (
    <WrappedComponent
      {...props}
      name={upperCasedName}
    />
  );
};
