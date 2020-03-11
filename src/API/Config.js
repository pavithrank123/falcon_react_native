/*
  This class is intended only for Domains and Keys like secretkeys, oauth keys
  For paths use Paths.js
*/

const isProduction = false;

/* eslint-disable */
const Configurations = {
  /* Domains */
  falconSalesDomain: () => {
    let domain = 'http://staging.ninjacart.in/asgard/sales';
    if (isProduction) {
      domain = 'http://staging.ninjacart.in/asgard/sales';
    }
    return domain;
  },
  widgetsSalesDomain: () => {
    let domain = 'http://staging.ninjacart.in/salesdashboard/matrics';
    if(isProduction) {
      domain = 'http://staging.ninjacart.in/salesdashboard/matrics';
    }
    return domain;
  }
};

export default {
  ...Configurations,
};
