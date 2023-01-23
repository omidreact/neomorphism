import * as React from 'react';
import { Text,View, StyleSheet } from 'react-native';
import {  NeomorphBox } from 'react-native-neomorph-shadows';

export default class App extends React.PureComponent {

  render() {

    return (
      <View style={{flex:1,backgroundColor:"#ECF0F3",justifyContent:"center",alignItems:"center"}}>
         <NeomorphBox style={styles.neomorph2}></NeomorphBox>
         <Text></Text>
         <NeomorphBox style={styles.neomorph3}></NeomorphBox>
         <Text></Text>
         <NeomorphBox style={styles.neomorph4}></NeomorphBox>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  neomorph2: {
    shadowRadius: 10,
    borderRadius: 50,
    backgroundColor: '#ECF0F3',
    width:200,
    height:100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  neomorph3: {
    shadowRadius: 20,
    borderRadius: 80,
    backgroundColor: '#ECF0F3',
    width:200,
    height:200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  neomorph4: {
    shadowRadius: 20,
    borderRadius: 100,
    backgroundColor: '#ECF0F3',
    width:200,
    height:200,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
