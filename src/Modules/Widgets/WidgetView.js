import React from 'react';
import {StyleSheet, View, FlatList, Text, Image, ActivityIndicator} from 'react-native';
import { AppColors } from '@branding/';
import PropTypes from 'prop-types';
import {isEmpty, get, isNull } from 'lodash';
import  { BackIcon } from '@assets/';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import WidgetTable from './WidgetTable';
import WidgetCard from './WidgetCard';

const WidgetView = props => {

  const { widgets , onWidgetItemClick , apiLoading} = props;
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const openWidgetItem = (widgetItem) =>{
    onWidgetItemClick(widgetItem);
  }

  const renderList = (item) => {
    if (!isEmpty(item.viewType) && item.viewType == "CARD" ) {
      return <WidgetCard widgetData={item} openWidgetItem={openWidgetItem} />
    } else if (!isEmpty(item.viewType) && item.viewType == "TABLE" ) {
      return <WidgetTable widgetData={item} />
    }
  }

  let body = <ActivityIndicator style={styles.loader} animating = {apiLoading} size="large" color={AppColors.ninjaGreen} />

  if (!apiLoading){
    if(!isEmpty(widgets)){
      body = (<View style={styles.innerContainer}>
          {
            (!isEmpty(widgets)) &&
            <FlatList
              data={widgets}
              renderItem={({item}) =>
              renderList(item)
          }
          />}
        </View>)
    } else {
      body = <View style={styles.errorContainer}><Text style ={styles.dataError}>No Data Found</Text></View>;
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleBackPress} >
          <Image source={BackIcon} style={styles.backButton}/>
        </TouchableOpacity>
        <Text style={styles.headerText}>Your Widgets</Text>
      </View>
      { body }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.white,
    flex: 1,
  },
  headerContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText :{
    textAlign: 'center',
    fontSize: 20,
    flexGrow: 1,
    alignSelf:'center',
    marginRight: 40,
    fontWeight: 'bold',
  },
  widgetContent: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    color: AppColors.materialBlueColor,
  },
  widgetContextText:{
    color: AppColors.materialBlueColor,
    fontSize: 16,
  },
  backButton: {
     resizeMode: 'stretch',
     height: 25,
     width: 25,
     justifyContent:'flex-start',
     marginStart: 10,
  },
  backIconContainer: {
  },
  innerContainer:{
    marginBottom: 50,
  },
  loader:{
    flex:1,
    justifyContent:'center',
    alignContent: 'center',
  },
  dataError: {
    fontSize: 18,
    alignSelf: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent:"center"
  }
});

WidgetView.propTypes = {
  widgets : PropTypes.object,
  onWidgetItemClick : PropTypes.func,
  apiLoading : PropTypes.bool,
}

export default WidgetView;
