import React from 'react';
import { Table, Row, Rows } from 'react-native-table-component';
import {StyleSheet, View, Text,ScrollView} from 'react-native';
import { AppColors } from '@branding/';
import PropTypes from 'prop-types';
import {isEmpty} from 'lodash';



const WidgetTable = (props) => {

    const {widgetData} = props;

    var tableData = ( <Text style={styles.widgetContextText}>{"No Data Available"}</Text> );

    if(!isEmpty(widgetData.data.rows) && !isEmpty(widgetData.data.columns)){
        tableData = (
            <Table borderStyle={styles.tableBorder}>
                <Row data={widgetData.data.columns} width={100} style={styles.tableHead} textStyle={styles.tableText}/>
                <Rows data={widgetData.data.rows}  width={100} textStyle={styles.tableText}/>
            </Table>
        )
    }

    return (
        <View style={styles.card} activeOpacity={0.5}>
           <Text style={styles.widgetHeader} >{widgetData.widgetName}</Text>
           <View style={styles.tableCard}>
              <ScrollView horizontal={true}>
                { tableData }
             </ScrollView>
            </View>
       </View>

    )

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
    tableBorder:{
      borderWidth: 2,
      borderColor: AppColors.mediumGreyVariant5,
    },
    tableText: {
      margin: 5 ,
    },
    tableCard:{
      marginTop: 10
    },
    tableHead: {
      height: 40,
      backgroundColor: AppColors.mediumGreyVariant1,
    },
    widgetContextText:{
        color: AppColors.materialBlueColor,
        fontSize: 16,
        alignSelf: 'flex-end'
    },

});

WidgetTable.propTypes = {
    widgetData : PropTypes.object,
}

export default WidgetTable;