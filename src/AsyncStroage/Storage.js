import AsyncStorage from '@react-native-community/async-storage';
import {isArray, isEmpty} from 'lodash';
//import { Storage, StorageKeys as keys } from '@storage/';
class Storage {
  static setItem = (key, value, callback) => {
    if (key) {
      AsyncStorage.setItem(key, value).then(result => {
        callback(result);
      });
    } else {
      callback(new Error());
    }
  };

  static getItem = (key, callback) => {
    if (key) {
      AsyncStorage.getItem(key).then(result => {
        callback(result);
      });
    } else {
      callback(new Error());
    }
  };

  static removeItem = (key, callback) => {
    if (key) {
      AsyncStorage.removeItem(key);
    } else {
      callback(new Error());
    }
  };

  static getItemSync = async key => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (e) {
      return e;
    }
  };

  static setItemSync = async (key, value) => {
    try {
      return await AsyncStorage.setItem(key, value);
    } catch (e) {
      return e;
    }
  };

  static removeItemSync = async key => {
    if (key) {
      await AsyncStorage.removeItem(key);
    }
  };

  static setMultipleItems = keyAndValues => {
    if (isArray(keyAndValues) && !isEmpty(keyAndValues)) {
      AsyncStorage.multiSet(keyAndValues);
    } else {
      console.warn('error input is not an array'); // eslint-disable-line
    }
  };

  static getAllStorageItems = (allkeys, callback) => {
    if (isArray(allkeys) && !isEmpty(allkeys)) {
      AsyncStorage.multiGet(allkeys, (err, values) => {
        callback(err, values);
      });
    } else {
      console.warn('allkeys in not an array or empty'); // eslint-disable-line
    }
  };

  static removeMultipleItems = (allKeys, callback) => {
    if (isArray(allKeys) && !isEmpty(allKeys)) {
      AsyncStorage.multiRemove(allKeys, value => {
        if (callback) {
          callback(value);
        }
      });
    }
  };

  static clearAllStorage = () => {
    AsyncStorage.getAllKeys(allkeys => {
      Storage.removeMultipleItems(allkeys);
    });
  };
}

export default Storage;
