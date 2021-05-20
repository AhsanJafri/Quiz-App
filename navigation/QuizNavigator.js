import React from 'react';
import Colors from '../constants/Colors';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import UserFormScreen from '../screens/UserFormScreen';
import Quiz from '../screens/Quiz';
import Splash from '../screens/Splash';

const Stack = createStackNavigator();

const QuizNavigator = () => {
    return (
        <>
            <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{
                    headerStyle: {
                        backgroundColor: Colors.primary
                    },
                    headerTintColor: 'white',
                }}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="UserFormScreen"
          component={UserFormScreen}
          options={{
            headerShown: true,
            
          }}
        />
        <Stack.Screen
          name="Quiz"
          component={Quiz}
          
        />
      
       
      </Stack.Navigator>
    </NavigationContainer>
        </>
    );
}

export default QuizNavigator;

