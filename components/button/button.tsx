import { Pressable, Text } from 'react-native';
import { twMerge } from 'tailwind-merge';

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'outline' | 'text';
  size?: 'text' | 'xxsm' | 'xsm' | 'sm' | 'md' | 'xmd' | 'lg' | 'xlg';
};

export default function Button({ title, onPress, variant = 'primary', size = 'md' }: ButtonProps) {
  const className = twMerge(
    'rounded-lg justify-center items-center w-full',
    variant === 'primary' && 'bg-primary',
    variant === 'outline' && 'bg-transparent border border-primary',
    variant === 'text' && 'bg-transparent',
    size === 'text' && 'p-0 w-auto',
    size === 'xxsm' && 'p-2 w-[100px] h-[33px]',
    size === 'xsm' && 'p-2 w-[136px] h-[38px]',
    size === 'sm' && 'p-2 w-[166px] h-[40px]',
    size === 'xmd' && 'p-2 w-[182px] h-[40px]',
    size === 'md' && 'p-4 w-[295px] h-[54px]',
    size === 'lg' && 'w-[325px] h-[50px]',
    size === 'xlg' && 'w-[333px] h-[59px]'
  );

  const textClassName = twMerge(
    'font-bold',
    variant === 'primary' && 'text-white',
    variant === 'outline' && 'text-primary',
    variant === 'text' && 'text-blue-500',
    size === 'text' &&
      'text-blue-500 font-regular                                                                                                           ',
    size === 'xxsm' && 'text-[14px] font-regular',
    size === 'xsm' && 'text-[14px] font-medium',
    size === 'sm' && 'text-[14px] font-medium',
    size === 'xmd' && 'text-[14px] font-medium',
    size === 'md' && 'text-[18px] font-medium',
    size === 'lg' && 'text-[16px] font-medium',
    size === 'xlg' && 'text-[18px] font-semibold'
  );

  return (
    <Pressable onPress={onPress} className={className}>
      <Text className={textClassName}>{title}</Text>
    </Pressable>
  );
}
