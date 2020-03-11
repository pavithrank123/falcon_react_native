import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {StyleSheet, View,ActivityIndicator} from 'react-native';
import LoginView from './LoginView';
import LoginActions from '../../Store/Modals/Login/Actions';
import { isEmpty, get } from 'lodash';
import { AppColors } from '@branding/'

// const NINJACART_LOGO = require('../../../assets/ninjacart_logo.png');

const LoginContainer = props => {
  const dispatch = useDispatch()
  const loginUserDetails = useSelector(state => get(state, "login.loginData"));
  const loginError = useSelector(state => get(state, "login.error"));
  //const isLoading = useSelector(state => get(state, "login.isLoading"));

  if( !isEmpty(loginUserDetails)){
    const { navigation } = props;
    navigation.navigate('navDrawer')
  }

  const handleLogin = (userName, password) => {
    const userCredentials = {
      password,
      userName,
    };
    dispatch(LoginActions.handleLoginRequest(userCredentials))
  };

  return (
    <View style={styles.container}>
        <LoginView onSubmit={handleLogin} error={loginError}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.white,
    flex: 1,
  },
});

export default LoginContainer;
