import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {StyleSheet, View} from 'react-native';
import {AppColors} from '@branding/';
import RootRoute from './src/Routes/Router';
import configureStore from './src/Store/Store';

const {store, persiststore} = configureStore();

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persiststore}>
      <View style={styles.container}>
        <RootRoute />
      </View>
    </PersistGate>
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.appSecondaryColor,
  },
});

export default App;
