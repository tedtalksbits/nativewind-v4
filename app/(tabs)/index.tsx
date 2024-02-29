// tab one screen
import { vars, useColorScheme } from 'nativewind';
import {
  Pressable,
  View,
  PressableProps,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import React from 'react';
import { useToast } from '@/providers/toaster/toaster';
import ScreenLayout from '@/components/layouts/ScreenLayout';
import { useTheme } from '@/hooks/theme/useTheme';
import { Text } from '@/components/ui/Text';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const TabOneScreen = () => {
  const { toast } = useToast();
  const { toggleTheme, theme } = useTheme();
  return (
    <ScreenLayout>
      <ScrollView className='bg-background flex-1 px-4 '>
        <View className='flex-1 pt-6'>
          <Text variant='largeTitle'>Nativewind v4 starter</Text>
          <View className='flex flex-row items-center justify-between gap-4'>
            <Button
              label='Get started'
              onPress={() => {
                toast.success({
                  title: 'Success',
                  description: 'You clicked the button!',
                });
              }}
            />

            <Button
              label={`Toggle Theme: ${theme}`}
              onPress={() => toggleTheme()}
              variant='secondary'
            />
          </View>
        </View>
        <Card className='mt-6'>
          <CardHeader>
            <CardTitle>Card title</CardTitle>
            <CardDescription>
              Card description lorem ipsum dolor sit amet
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              quo omnis eum vel eaque accusantium tempora, commodi veniam
              exercitationem laboriosam animi laborum nulla placeat
              reprehenderit, numquam doloremque asperiores. Officia, quibusdam.
              Nam blanditiis earum doloremque ad hic accusantium repudiandae
              minus impedit!
            </Text>
          </CardContent>
        </Card>
        <Card className='mt-6'>
          <CardHeader>
            <CardTitle>Card title</CardTitle>
            <CardDescription>
              Card description lorem ipsum dolor sit amet
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              quo omnis eum vel eaque accusantium tempora, commodi veniam
              exercitationem laboriosam animi laborum nulla placeat
              reprehenderit, numquam doloremque asperiores. Officia, quibusdam.
              Nam blanditiis earum doloremque ad hic accusantium repudiandae
              minus impedit!
            </Text>
          </CardContent>
        </Card>
      </ScrollView>
    </ScreenLayout>
  );
};

export default TabOneScreen;
