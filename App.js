import React from 'react';
import { StyleSheet } from 'react-native';
import { StackNavigator, } from 'react-navigation';
import Home from './components/Home';
import Product from './components/Product';

import * as permissions from './config/permissions';

Promise.all(Object.values(permissions).map(v => v())).then(s => {});


const App = StackNavigator({
  Home: { screen: Home },
  Product: { screen: Product },
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;
