// tab one screen
import { vars, useColorScheme } from 'nativewind';
import {
  Pressable,
  Text,
  View,
  PressableProps,
  TouchableOpacity,
} from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import React from 'react';
import { useToast } from '@/providers/toaster/toaster';
import ScreenLayout from '@/components/layouts/ScreenLayout';
import { useTheme } from '@/hooks/theme/useTheme';

const TabOneScreen = () => {
  const { toast } = useToast();
  const { toggleTheme, theme } = useTheme();
  return (
    <ScreenLayout>
      <View className='bg-background flex-1'>
        <View className='flex-1 bg-accent pt-6 items-center justify-center'>
          <Text className='text-2xl uppercase font-bold text-foreground text-center'>
            Nativewind v4 starter
          </Text>
          <TouchableOpacity
            className='bg-destructive rounded-md p-3 mt-3'
            onPress={() => {
              toast.info({
                title: 'Success',
                description: 'You clicked the button!',
              });
            }}
          >
            <Text className='text-center text-foreground'>Get started</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className='bg-destructive border rounded-md p-3 mt-3'
            onPress={() => toggleTheme()}
          >
            <Text className='text-center text-foreground'>
              Toggle theme current: {theme}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenLayout>
  );
};

export default TabOneScreen;
