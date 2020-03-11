import React from 'react';
import Home from '../Modules/Home/HomeContainer';
import Widgets from '../Modules/Widgets/WidgetContainer'
import RouteKeys from './RouteKeys';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppColors } from '@branding/';

const Drawer = createDrawerNavigator();

function DrawerRoute() {
  return (
    <Drawer.Navigator drawerContentOptions={drawerStyles}>
      <Drawer.Screen name={RouteKeys.appRoute.HOME} component={Home} />
      <Drawer.Screen name={RouteKeys.widgetRoute.WIDGETS} component={Widgets} />
    </Drawer.Navigator>
  );
}

const drawerStyles = { activeTintColor: AppColors.ninjaGreen}

export default DrawerRoute;
