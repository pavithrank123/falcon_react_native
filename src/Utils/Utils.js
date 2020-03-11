import {Alert, Dimensions, Platform} from 'react-native';
// import uuidv1 from 'uuid/v4';

class Utils {
  static alertWithoutOptions(title, message) {
    this.showAlert(title, message, [], null);
  }

  static alertWithOptions(title, message, buttonToShow = [], callback) {
    this.showAlert(title, message, buttonToShow, callback);
  }

  static showAlert(title, message = ' ', buttonsToShow = [], callback) {
    let buttonCallBacks = null;
    if (buttonsToShow.length > 0) {
      buttonCallBacks = [];
      buttonsToShow.forEach(item => {
        buttonCallBacks.push({
          text: item,
          onPress: () => callback(item),
        });
      });
    }
    Alert.alert(title, message, buttonCallBacks, {cancelable: false});
  }

  // static clearAsyncStorage = () => {
  //   const allKeys = [
  //     keys.SCM_TOKEN,
  //     keys.API_TOKEN,
  //     keys.USER_PROFILE_TRACKED,
  //     keys.REFERRAL_POP_UP,
  //     keys.DND_MODAL,
  //   ];
  //   Storage.removeMultipleItems(allKeys, () => {});
  // };

  // static constructUrl(params, baseUrl) {
  //   /* eslint-disable */
  //   let queryParams = [];
  //   Object.keys(params).forEach(key => {
  //     if (params[key] === 0 || (params[key] && params[key] !== null)) {
  //       queryParams = [
  //         ...queryParams,
  //         encodeURIComponent(key) + '=' + encodeURIComponent(params[key]),
  //       ];
  //     }
  //   });
  //   const query = queryParams.join('&');
  //   return `${baseUrl}${query}`;
  // }

  static isX() {
    const d = Dimensions.get('window');
    return !!(Platform.OS === 'ios' && (d.height > 800 || d.width > 800));
  }

  static isAndroid = () => {
    if (Platform.OS === 'android') {
      return true;
    }
    return false;
  };
}

export default Utils;
