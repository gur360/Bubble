import React, { useEffect } from 'react';
import { Platform, SafeAreaView } from 'react-native';
import Main from './Main';
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Main />
    </SafeAreaView>
  );
}; 
 
export default App;