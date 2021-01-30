import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';
import OnboardingViewController from '../screens/OnboardingViewController';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import {createStackNavigator} from '@react-navigation/stack';
import SignUpViewController from '../screens/SignUpViewController.js';
import LoginViewController from '../screens/LoginViewController.js';

const Stack = createStackNavigator();


const AuthStack = ({navigation}) => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(nulll);

    let routename;

    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then((value) => {
            if(value==null) {
                AsyncStorage.setItem('alreadyLaunched', 'true');
                setIsFirstLaunch(true);
            }else{
                setIsFirstLaunch(false);
            }
        });

        
    }, []);

    if (isFirstLaunch==null){
        return null;
    } else if (isFirstLaunch==true) {
        routeName='Onboarding';
    } else {
        routeName="Login";
    }

    return(
        <Stack.Navigator initialRouteName={routeName}>
            <Stack.Screen 
                name="Onboarding"
                component={OnboardingViewController}
                options={{header: () => null}}
            />
            <Stack.Screen 
                name="Login"
                component={LoginViewController}
                options={{header: () => null}}
            />
            <Stack.Screen 
                name="Sign Up"
                component={SignUpViewController}
                options={{header: () => null}}
            />
        </Stack.Navigator>
    );
}

export default AuthStack;