import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppColors } from '@branding/'
import {get,isNull} from 'lodash';
import WidgetView from './WidgetView';
import WidgetActions from '../../Store/Modals/Widget/Actions';
import { useFocusEffect } from '@react-navigation/native';

const WidgetContainer = props => {

    const loginUserDetails = useSelector(state => get(state, "login.loginData.id"));
    const asgardUserId = loginUserDetails;
    const dispatch = useDispatch();
    const widgetData = useSelector(state => get(state, "widget.widgetData"));
    const apiLoading = useSelector(state => get(state, "widget.isLoading"));

    useFocusEffect( React.useCallback(() => {
        const id  = get(props,"route.params.id");
        const widgetTreeId = get(props,'route.params.widgetTreeId');
        const payLoad = { asgardUserId, id, widgetTreeId };
        dispatch(WidgetActions.handleFetchWidgetRequest(payLoad));
    },[]));


    const handleWidgetClick = (widgetItem) => {
      const {clickable} = widgetItem;
      if(!isNull(clickable) && clickable){
        const {navigation} = props;
        const {id} = widgetItem;
        const {widgetTreeId} = widgetItem;
        navigation.push('widgets',{id,widgetTreeId})
      }
    };

  return (
    <View style={styles.container}>
        <WidgetView widgets={widgetData} onWidgetItemClick={handleWidgetClick} apiLoading={apiLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.white,
    flex: 1,
  },
});

export default WidgetContainer;
