import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { cn } from '@/utils';
interface ScreenLayoutProps
  extends React.ComponentPropsWithoutRef<typeof View> {
  children: React.ReactNode;
}
export const ScreenLayout = ({
  children,
  className,
  ...props
}: ScreenLayoutProps) => {
  return (
    <SafeAreaView className={cn('flex-1', className)} {...props}>
      {children}
      <StatusBar style='auto' />
    </SafeAreaView>
  );
};
