import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';

import { StatusBar } from 'expo-status-bar';
interface ScreenLayoutProps {
  children: React.ReactNode;
}
export default function ScreenLayout({ children }: ScreenLayoutProps) {
  return (
    <SafeAreaView className='flex-1'>
      {children}
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}
