// import React, { ReactElement, ReactNode } from 'react';
// import { Route, Navigate, useLocation } from 'react-router-dom';
// import { ROUTES } from './RoutesConfig';
// import { SNACKBAR_VARIANTS } from '../constants/Snackbar';

// metodo para pegar a permissão dentro do obj user
// const getUserPermission = (user) => user?.permission;

// function canPermit(user, aplicationInit, permissions) {
//   const userPermission = getUserPermission(user);

//   if (!aplicationInit) {
//     // como é redirecionamento espera aplicacao iniciar para ter certeza do valor em user
//     return true;
//   }

//   if (aplicationInit && (
//     permissions.length === 0 ||
//     (permissions.length > 0 && !!user && permissions.includes(userPermission))
//   )) {
//     return true;
//   }

//   return false;
// }

const PrivateRoute = (props: { children: any; }) => {
  const {
    children,
    // permissions = []
  } = props;

  // const { aplicationInit, snackbar } = AppContextSelector();
  // const { user } = UserContextSelector();
  // const location = useLocation();

  // const permit = canPermit(user, aplicationInit, permissions);

  // console.log(permit);
  // if (!permit) {
  //   console.log("redirect");
  //   snackbar.createNotification({ title: 'Acesso negado!', variant: SNACKBAR_VARIANTS.ERROR });
  //   return <Navigate to={ROUTES.LOGIN.src()} state={location} replace />
  // }

  return children;
};

export default PrivateRoute;
