import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/screen/IndexSceeen';
import ShowScreen from './src/screen/ShowScreen';
import CreateScreen from './src/screen/CreateScreen';
import { Provider } from './src/context/BlogContext';
const Stack = createNativeStackNavigator();

 const  App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="posts">
        <Stack.Screen name="posts" component={IndexScreen} />
        <Stack.Screen name="show" component={ShowScreen} />
        <Stack.Screen name="create" component={CreateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const AppWrapper =  () => {
  return (
    <Provider>
      <App />
    </Provider>

  )
};

export default AppWrapper;