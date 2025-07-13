import { useRef, useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import { useColorScheme } from 'nativewind';
import OnboardingItem from 'components/onboarding';

const { width } = Dimensions.get('window');

export default function Onboarding() {
  const { colorScheme } = useColorScheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<ScrollView>(null);

  const data = [
    {
      image: `${colorScheme !== 'dark' ? require('../assets/images/Onboarding.jpg') : require('../assets/images/Onboarding-dark.png')}`,
      text: 'Activate your location, Order food around you quickly',
      imageWidth: 311,
      imageHeight: 322,
    },
    {
      image: require('../assets/images/Onboarding2.jpg'),
      text: 'Activate your location, order food around you quickly',
      imageWidth: 375,
      imageHeight: 321,
    },
    {
      image: `${colorScheme !== 'dark' ? require('../assets/images/Onboarding3.jpg') : require('../assets/images/Onboarding3-dark.png')}`,
      text: 'Activate your location, order food around you quickly',
      imageWidth: 375,
      imageHeight: 345,
    },
  ];

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  return (
    <View className="relative flex-1 overflow-hidden">
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={handleScroll}>
        {data.map((item, index) => (
          <OnboardingItem key={index} item={item} width={width} />
        ))}
      </ScrollView>
      <View className="absolute bottom-60 left-0 right-0 flex-row items-center justify-center gap-2">
        {data.map((_, index) => (
          <View
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-primary' : 'bg-gray-300'}`}
          />
        ))}
      </View>
    </View>
  );
}
