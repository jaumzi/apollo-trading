import React, { Suspense, memo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { RoutesConfig } from './RoutesConfig';

// import PrivateRoute from './PrivateRoute';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     RoutesConfig.map((rc, i) => {
//       const Component = rc.component;

//       return (
//         <Route
//           key={`route-${rc.path}-${i}`}
//           path={rc.path}
//           element={
//             <PrivateRoute permissions={rc.permissions}>
//               <Component />
//             </PrivateRoute>
//           }
//         />
//       )
//     })
//   )
// );


// const AppRoutes: ReactWithProps = () => {
//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
// }

const AppRoutesConfig = () => {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading</div>}>
          <Routes>
            {RoutesConfig.map((rc, i) => {
              const Component = rc.component;

              return (
                <Route
                  key={`route-${rc.path}-${i}`}
                  path={rc.path}
                  element={
                    // <PrivateRoute permissions={rc.permissions}>
                      <Component />
                    // </PrivateRoute>
                  }
                />
              )
            })}
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default memo(AppRoutesConfig);
