import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Modules/Login/LoginContainer';
import DrawerRoute from '../Routes/DrawerRoute';
import RouteKeys from './RouteKeys';
import WidgetContainer from '../Modules/Widgets/WidgetContainer';

const Stack = createStackNavigator();
function AuthRoute() {
  return (
    <Stack.Navigator
      initialRouteName={RouteKeys.drawerRoute.LOGIN}
      headerMode={'none'}>
      <Stack.Screen name={RouteKeys.authRoute.LOGIN} component={Login} />
      <Stack.Screen name={RouteKeys.drawerRoute.NAVDRAWER} component={DrawerRoute} />
      <Stack.Screen name={RouteKeys.widgetRoute.WIDGETS} component={WidgetContainer} />
    </Stack.Navigator>
  );
}

export default AuthRoute;
