import React from 'react';
import { useProtectedPath } from './useProtectedPath';
import { Redirect } from 'react-router';

export const PrivatePage = () => {
  const accessGrant = useProtectedPath();

  if (!accessGrant) {
    return <Redirect to='/authorize' />;
  }

  return (
    <div>
      <h1>Private page</h1>
      <p>Wake up, Neo...</p>
    </div>
  );
};
