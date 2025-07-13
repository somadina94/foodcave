import BaseComponents from 'screens/base-components';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import './global.css';
import { useColorScheme } from 'nativewind';

import Onboarding from 'screens/onboarding';

const Stack = createNativeStackNavigator();

function WelcomeStack() {
  const { colorScheme } = useColorScheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colorScheme === 'dark' ? '#1C1C1E' : '#ffffff',
        },
        headerTintColor: colorScheme === 'dark' ? '#ffffff' : '#1C1C1E',
        headerTitleStyle: {
          color: colorScheme === 'dark' ? '#ffffff' : '#1C1C1E',
        },
        headerShown: false,
      }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="BaseComponents" component={BaseComponents} />
    </Stack.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <WelcomeStack />
    </NavigationContainer>
  );
}

export default function App() {
  return <Navigation />;
}
