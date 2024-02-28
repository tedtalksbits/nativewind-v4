// tab one screen
import { vars, useColorScheme } from 'nativewind';
import { Pressable, Text, View, PressableProps } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import React from 'react';

const TabOneScreen = () => {
  return (
    <View className='bg-destructive flex-1 p-3'>
      <View className='flex-1 bg-background rounded-xl pt-6 items-center justify-center'>
        <Text className='text-2xl uppercase font-bold text-foreground text-center'>
          Nativewind v4 starter hello
        </Text>
      </View>
    </View>
  );
};

export default TabOneScreen;
