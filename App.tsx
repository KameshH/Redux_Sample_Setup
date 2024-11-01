import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './src/screens/welcomeScreen';
import TabNavigator from './src/navigator/tabnavigator';
import MainNavigaitor from './src/navigator/MainNavigaitor';
import { Provider } from 'react-redux';
import store from './src/store';
import CategoriesScreen from './src/screens/categoriesScreen';





const App = () => {
  return (
    <Provider store={store}>
      {/* <MainNavigaitor /> */}
      <CategoriesScreen />
    </Provider>
  );

}





const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
