import React from 'react';
import { Provider } from 'react-redux';
import MainStackNavigator from './src/navigation/AppNavigator';
import store from './src/redux/store';

export default App = () =>{
  return( 
  <Provider store={store}>
    <MainStackNavigator/>
  </Provider>
  )
  
}