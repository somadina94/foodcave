import Button from 'components/button';
import { View, Text, Image, ImageSourcePropType } from 'react-native';

interface OnboardingItemProps {
  item: {
    image: ImageSourcePropType;
    text: string;
    imageWidth: number;
    imageHeight: number;
  };
  width: number;
}

export default function OnboardingItem({ item, width }: OnboardingItemProps) {
  return (
    <View className="bg-light flex-1 items-center py-16 dark:bg-dark" style={{ width }}>
      <Image
        source={item.image}
        width={item.imageWidth}
        height={item.imageHeight}
        className="rounded-2xl"
        resizeMode="contain"
      />
      <Text className="mx-[80px] mt-12 text-center text-2xl font-semibold capitalize dark:text-white">
        {item.text}
      </Text>
      <View className="mt-auto gap-4">
        <Button title="Take me to Cavefood" onPress={() => {}} size="xlg" />
        <View className="flex-row items-center justify-center gap-2">
          <Text className="text-sm font-medium dark:text-white">Don&apos;t have an account?</Text>
          <Button title="Create one" onPress={() => {}} variant="text" size="text" />
        </View>
      </View>
    </View>
  );
}
