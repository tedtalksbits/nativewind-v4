import React, { Component } from 'react';
import { ScreenLayout } from '@/components/layouts/ScreenLayout';
import ScreenView from '@/components/layouts/ScreenView';
import { Text } from '@/components/ui/Text';
import { ProgressChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  data: [0.2, 0.45, 0.28, 0.8, 0.99, 0.43],
};
const screenWidth = Dimensions.get('window').width;
const chartConfig = {
  // backgroundGradientFrom: '#1E2923',
  // backgroundGradientFromOpacity: 0,
  // backgroundGradientTo: '#08130D',
  // backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
};
const ChartsScreen = () => {
  return (
    <ScreenLayout>
      <ScreenView className='px-0'>
        <Text>Charts</Text>
        <ProgressChart
          data={data}
          width={screenWidth}
          height={220}
          strokeWidth={16}
          radius={32}
          chartConfig={chartConfig}
          hideLegend={false}
        />
      </ScreenView>
    </ScreenLayout>
  );
};

export default ChartsScreen;
