import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '@src/screens/home';

import { Swipper } from '@src/components/swipper/swipper';
import { NAVIGATION_ROUTES } from '@src/utils/constants';
import { MovieList } from '@src/screens/movie-list';
import { Search } from '@src/screens/search';

const Stack = createStackNavigator();

export const Navigation = ({ firstLaunchFlag }) => {

    const initialRoute = firstLaunchFlag ? NAVIGATION_ROUTES.ONBOARDING : NAVIGATION_ROUTES.HOME;

    return (
        <Stack.Navigator
            initialRouteName={initialRoute}
        >
            <Stack.Screen
                name={NAVIGATION_ROUTES.HOME}
                component={HomeScreen}
                options={{ title: 'HOME' }}
                options={{ gestureEnabled: false, headerShown: false }}
            />
            <Stack.Screen
                name={NAVIGATION_ROUTES.ONBOARDING}
                component={Swipper}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={NAVIGATION_ROUTES.VIEW_ALL}
                component={MovieList}
                options={{ headerTitle: null }}
            />
            <Stack.Screen
                name={NAVIGATION_ROUTES.SEARCH}
                component={Search}
                options={{ headerTitle: null }}
            />
        </Stack.Navigator>
    );
}