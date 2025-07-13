import { View, ScrollView, Text } from 'react-native';
import Button from 'components/button/button';
import { useColorScheme } from 'nativewind';
import { useNavigation } from '@react-navigation/native';

export default function BaseComponents() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const navigation = useNavigation();

  return (
    <ScrollView className="flex-1 p-4 dark:bg-dark">
      <View className="flex-col items-center gap-4">
        {/* Theme Toggle Section */}
        <View className="border-border w-full rounded-lg border border-gray-500 p-4 dark:bg-dark">
          <Text className="mb-2 text-lg font-semibold dark:text-white">Theme Settings</Text>
          <Text className="mb-4 dark:text-white">Current theme: {colorScheme}</Text>
          <Button
            title={`Switch to ${colorScheme === 'dark' ? 'Light' : 'Dark'} Mode`}
            onPress={toggleColorScheme}
            size="md"
          />
        </View>

        {/* Button Examples */}
        <View className="border-border w-full rounded-lg border p-4 dark:border-gray-500">
          <Text className="mb-4 text-lg font-semibold dark:text-white">Button Components</Text>
          <View className="flex-col items-center gap-2">
            <Button title="Click me" onPress={() => alert('Button pressed')} size="xxsm" />
            <Button title="Click me" onPress={() => alert('Button pressed')} size="xsm" />
            <Button title="Click me" onPress={() => alert('Button pressed')} size="sm" />
            <Button title="Click me" onPress={() => alert('Button pressed')} size="xmd" />
            <Button
              title="Click me"
              onPress={() => alert('Button pressed')}
              variant="outline"
              size="md"
            />
            <Button title="Click me" onPress={() => alert('Button pressed')} size="lg" />
            <Button
              title="Click me"
              onPress={() => navigation.navigate('Onboarding' as never)}
              variant="outline"
              size="xlg"
            />
            <Button
              title="Click me"
              onPress={() => navigation.navigate('Onboarding' as never)}
              variant="text"
              size="text"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
