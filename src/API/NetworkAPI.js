import axios from 'axios';
// import {Storage, StorageKeys as keys} from '@storage/';
import Strings from '../Strings/Strings';

const API = {
  requesttimeout: 20000,

  getDefaultHeaders: () => {
    const defaultHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    return defaultHeaders;
  },

  getHeaders: async () => {
    /*
        Need to get the Username and passwor on each API call
    */

    const headers = {
      ...API.getDefaultHeaders(),
    };
    return headers;
  },

  get: (route, headers) => {
    const getPromise = new Promise((resolve, reject) => {
      API.prepareConfig(route, null, 'get', headers, (err, res) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(res);
      });
    });
    return getPromise;
  },

  post: (route, params, headers) => {
    const postPromise = new Promise((resolve, reject) => {
      API.prepareConfig(route, params, 'post', headers, (err, res) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(res);
      });
    });
    return postPromise;
  },

  put: (route, params, headers, callback) =>
    API.prepareConfig(route, params, 'put', headers, callback),

  delete: (route, headers) => {
    const getPromise = new Promise((resolve, reject) => {
      API.prepareConfig(route, null, 'delete', headers, (err, res) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(res);
      });
    });
    return getPromise;
  },

  patch: (route, params, headers) => {
    const getPromise = new Promise((resolve, reject) => {
      API.prepareConfig(route, params, 'patch', headers, (err, res) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(res);
      });
    });
    return getPromise;
  },

  prepareConfig: async (routeurl, params, methodType, headers, callback) => {
    const config = {
      method: methodType,
      url: routeurl,
      data: params,
      headers: headers || API.getDefaultHeaders(),
      timeout: API.requesttimeout,
    };
    API.call(config, callback);
  },

  /*
    * This method will take URL path as string for "routeurl"
    * params will take body: {key: value}, note: not stringify
    * Header:  {key: value}, note: not stringify
    * callback will give us two params (error, responseJson),
      so check for error not equal to null then process json
      else throw alert in your UI by using error parameter.
  */

  call: (config, callback) => {
    axios(config)
      .then(response => {
        callback(null, response.data);
      })
      .catch(error => {
        callback(error, null);
      });
  },

  validateErrors: error => {
    if (error.message === 'Network Error') {
      // Network Error means devices is offline not connected to internet axios will thorw this
      return Strings.network_error;
    }
    if (error.message === 'ECONNABORTED') {
      return Strings.ECONNABORTED;
    }
    return Strings.something_went_wrong;
  },
};
module.exports = API;
