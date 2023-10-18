import React from 'react';

import {
  Navigate
} from 'react-router-dom';

import {useAuth} from '../hooks/useAuth';

type OwnProps = {
  children: JSX.Element
};


export const Protected = (props: OwnProps) => {

  const { children }: {children: JSX.Element} = props;

  const [ isLogin ] = useAuth();

  console.log(`ifigenia protected isLogin = `, isLogin);
  return (
    () => {
      if (isLogin) {
        return children;
      } else {
        return <Navigate to='/login' replace />;
      }
    }
  )();
};



