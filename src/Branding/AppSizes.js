import {Dimensions} from 'react-native';

const window = Dimensions.get('window');

const {height, width} = window;

const devicesizes = {
  deviceWidth: width,
  deviceHeight: height,
  devicehalfwidth: width / 2,
  devicehalfheight: height / 2,
  devicequaterwidth: width / 4,
  devicequaterheight: height / 4,
};

const uicomponentsizes = {
  gridborderwidth: 13,
  gridheight: 380,
  flatlistheight: 189,
  navBarHeight: 44,
  buttonheight: 50,
  buttonborderradius: 10,
  tabBarHeight: 50,
};

export default {
  ...devicesizes,
  ...uicomponentsizes,
};
