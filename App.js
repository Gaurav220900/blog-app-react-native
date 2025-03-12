import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/screen/IndexSceeen';
import ShowScreen from './src/screen/ShowScreen';
import CreateScreen from './src/screen/CreateScreen';
import EditScreen from './src/screen/EditScreen';
import { TouchableOpacity } from "react-native";
import { Feather, EvilIcons } from "@expo/vector-icons";
import { Provider } from './src/context/BlogContext';
const Stack = createNativeStackNavigator();

 const  App = () => {
 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="posts">
        <Stack.Screen 
        name="posts" 
        component={IndexScreen} 
        options={({navigation}) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('create')}>
                <Feather name="plus" size={30} style={{ marginRight: 15 }} />
              </TouchableOpacity>
            ),
          })} />
        <Stack.Screen 
        name="show" 
        component={ShowScreen}
        options={({ navigation, route }) => ({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('edit', { id: route.params?.id })}>
              <EvilIcons name="pencil" size={30} style={{ marginRight: 15 }} />
            </TouchableOpacity>
          ),
        })}
        />
        <Stack.Screen name="create" component={CreateScreen} />
        <Stack.Screen name="edit" component={EditScreen} />
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