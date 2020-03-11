import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export default class LoginContainer extends Component {
  handleLoginPage = () => {
    console.log('*** clicked on login ***');
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handleLoginPage}>
          <Text> Home Page </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#f3f300',
    width: '150',
    height: '35',
  },
});
