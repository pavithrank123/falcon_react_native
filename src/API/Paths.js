/* eslint-disable */
import configs from './Config';

const {
  falconSalesDomain
} = configs;

const {
  widgetsSalesDomain
} = configs;

const AllPaths = {
  loginPath: `${falconSalesDomain()}/user/login/app`,
  getWidgets: `${(widgetsSalesDomain())}`

};

export default {
  ...AllPaths
};
