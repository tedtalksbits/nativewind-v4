// tab one screen
import { vars, useColorScheme } from 'nativewind';
import { View, ScrollView } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import React from 'react';
import { useToast } from '@/providers/toaster/toaster';
import { ScreenLayout } from '@/components/layouts/ScreenLayout';
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
import { Table, TableRow } from '@/components/ui/Table';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ScreenView from '@/components/layouts/ScreenView';

const TabOneScreen = () => {
  const { toast } = useToast();
  const { toggleTheme, theme } = useTheme();
  return (
    <ScreenLayout>
      <ScreenView>
        <View className='flex-1 pt-6'>
          <Text variant='callout' className='text-muted-foreground'>
            Welcome back 👋
          </Text>
          <Text variant='largeTitle'>Tedtalks Bits⚙️</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingVertical: 20,
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 20,
            }}
          >
            <Button
              label='Show Toast!'
              onPress={() => {
                toast.info({
                  title: 'Info',
                  description: 'You clicked the button!',
                  icon: <MaterialCommunityIcons name='information' size={24} />,
                });
              }}
            />

            <Button
              label={`Toggle Theme: ${theme}`}
              onPress={() => toggleTheme()}
              variant='secondary'
            />
            <Button
              size='icon'
              variant='destructive'
              onPress={() => {
                toast.destructive({
                  title: 'Destructive',
                  description: 'You clicked the button!',
                });
              }}
            >
              <MaterialCommunityIcons
                color={'white'}
                name='delete-forever'
                size={24}
              />
            </Button>
            <Button
              size='icon'
              variant='secondary'
              onPress={() => {
                toast.destructive({
                  title: 'Destructive',
                  description: 'You clicked the button!',
                });
              }}
            >
              <MaterialCommunityIcons name='line-scan' size={24} />
            </Button>
            <Button variant='ghost' label='Ghost' />
            <Button variant='outline' label='Outline' />
          </ScrollView>
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
        <Table header='Table Header' headerClassName='mt-4'>
          <TableRow
            title='Title'
            elementRight={
              <MaterialCommunityIcons
                color={'white'}
                name='chevron-right'
                size={24}
              />
            }
          />

          <TableRow
            title='Title'
            elementRight={
              <MaterialCommunityIcons
                color={'white'}
                name='chevron-right'
                size={24}
              />
            }
          />
          <TableRow
            title='Title'
            elementRight={
              <MaterialCommunityIcons
                color={'white'}
                name='chevron-right'
                size={24}
              />
            }
          />
        </Table>
      </ScreenView>
    </ScreenLayout>
  );
};

export default TabOneScreen;
