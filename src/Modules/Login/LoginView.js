import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Text, TextInput, StyleSheet, View, Image, Dimensions} from 'react-native';
import Strings from '../../Strings/Strings'
import { isEmpty } from 'lodash';
import {NinjacartLogo} from '@assets/';
import {AppColors} from '@branding/';

const {width} = Dimensions.get('window');

const LoginView = props => {
    const { onSubmit, error } = props;
    const [username, setUsername] = useState('');
    const [passWord, setPassWord] = useState('');

    const onSubmitOfDetails = () => {
        onSubmit(username, passWord);
    }

    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Image source={NinjacartLogo} style={styles.logoImage} />
          <Text style={{fontSize: 30, textAlign: 'center', color: AppColors.ninjaGreen, paddingRight: 10}}>
            {Strings.LOGIN_TITLE}
          </Text>
        </View>
        <View style={styles.middleContainer}>
          <TextInput
            placeholder={Strings.USERNAME_PLACEHOLDER}
            onChangeText={val => setUsername(val)}
            value={username}
            style={styles.textInput}
          />
          <TextInput
            placeholder={Strings.PWD_PLACEHOLDER}
            onChangeText={val => setPassWord(val)}
            value={passWord}
            secureTextEntry
            style={styles.textInput}
          />
          {
              !isEmpty(error) && <Text style={styles.errorMessage}>
              {error}
            </Text>
          }
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.submitButton} onPress={onSubmitOfDetails}>
            {Strings.SUBMIT}
          </Text>
          <Text style={styles.footer}>{Strings.FOOTER_TEXT}</Text>
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    topContainer: {
      flex: 1,
      paddingTop: 30,
      alignItems: 'center',
      justifyContent: 'center',
    },
    middleContainer: {
      flex: 3,
      justifyContent: 'center',
      alignSelf: 'stretch',
      paddingTop: 50,
      paddingHorizontal: 20,
    },
    middleContainerBlock: {
      flex: 1,
    },
    bottomContainer: {
      flex: 1,
      paddingHorizontal: 16,
      paddingTop: 60,
      alignSelf: 'stretch',
      justifyContent: 'center',
    },
    textInput: {
      height: 40,
      fontSize: 18,
      marginTop: 20,
      backgroundColor: AppColors.white,
      marginBottom: 5,
      borderColor: AppColors.mediumGreyVariant2,
      borderBottomWidth: 2,
      paddingLeft: 16,
    },
    loginContainer: {
      padding: 30,
    },
    logoImage: {
      width: 200,
      height: 55,
      resizeMode: 'stretch',
    },
    submitButton: {
      textAlign: 'center',
      borderRadius: 200,
      fontSize: 18,
      paddingTop: 15,
      paddingBottom: 15,
      alignSelf: 'stretch',
      backgroundColor: AppColors.ninjaGreen,
      color: AppColors.white,
    },
    footer: {
      alignSelf: 'stretch',
      paddingHorizontal: 20,
      textAlign: 'center',
      color: AppColors.white,
    },
    errorMessage : {
      fontSize: 14,
      marginTop: 10,
      textAlign: 'center',
      color: AppColors.red,
      paddingRight: 10
      }
  });

  LoginView.propTypes = {
    onSubmit: PropTypes.func,
    error: PropTypes.string,
  };

  export default LoginView;
