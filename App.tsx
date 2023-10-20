import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet
} from 'react-native';


function App(): JSX.Element {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.heading} >Hello</Text>
    </View>
    </SafeAreaView>
  );
}

const styles  = StyleSheet.create({

  container:{
    backgroundColor  : "#ffffff",
  },
  heading : {
    color : '#000000',
    fontSize: 20
  }

});


export default App;
