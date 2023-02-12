import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home'
const Stack = createStackNavigator();

function MyStackNavigation() {
  return (

    <Stack.Navigator>
        
      <Stack.Screen name="Home" component={Home} />



    </Stack.Navigator>

  );
}
const HNavigation = () => {
  return (
    <NavigationContainer>
      <MyStackNavigation></MyStackNavigation>
    </NavigationContainer>
  )
};
export default HNavigation;
