import React, { useEffect } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { isEmpty } from 'lodash';
import { AppColors } from '@branding/';
import PropTypes from 'prop-types';


const WidgetCard = (props) => {

    const {widgetData} = props;
    const {openWidgetItem} = props;

    return (
    <TouchableOpacity style={styles.card} activeOpacity={0.5} onPress={()=>openWidgetItem(widgetData)}>
        <Text style={styles.widgetHeader} >{widgetData.widgetName}</Text>
        <View style={styles.widgetContent}>
          <Text style={styles.widgetContextText}>{isEmpty(widgetData.data.data) ? "No Data Available": widgetData.data.data}</Text>
        </View>
        <View>
        </View>
    </TouchableOpacity>)

}

const styles = StyleSheet.create({
    card : {
      borderRadius: 5,
      padding: 10,
      elevation: 10,
      marginHorizontal: 5,
      marginVertical: 5,
      backgroundColor: AppColors.white
    },
    widgetHeader: {
        fontSize: 16,
        fontWeight: 'bold'
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
});

WidgetCard.propTypes = {
    widgetData : PropTypes.object,
    openWidgetItem : PropTypes.func,
}

export default WidgetCard;