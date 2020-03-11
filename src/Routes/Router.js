import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthRoute from './AuthRoute';
// import RootRoute from './RootRouter';
function Router() {
  return (
    <NavigationContainer>
      <AuthRoute />
    </NavigationContainer>
  );
}

export default Router;
