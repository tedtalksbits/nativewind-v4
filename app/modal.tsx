import { Text, View } from 'react-native';

export default function Modal() {
  return (
    <View className='bg-background flex-1 p-3'>
      <View className='flex-1 rounded-xl pt-6 items-center justify-center'>
        <Text className='text-2xl uppercase font-bold text-foreground text-center'>
          Modal
        </Text>
      </View>
    </View>
  );
}
