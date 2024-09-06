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
import ScreenScrollView from '@/components/layouts/ScreenScrollView';
import { EmptyState } from '@/components/ui/EmptyState';
import { RadioGroup } from '@/components/ui/RadioGroup';
import { CollapseContent, CollapseTrigger } from '@/components/ui/Collapse';

const TabOneScreen = () => {
  const { toast } = useToast();
  const { toggleTheme, theme } = useTheme();
  const [isExpanded, setIsExpanded] = React.useState(false);
  return (
    <ScreenLayout>
      <ScreenScrollView>
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
          <TableRow title='Row One' />
          <TableRow title='Row Two' />
          <TableRow title='Row Three' />
        </Table>
        <EmptyState
          title='Empty State'
          description='No items to show'
          iconName='bed-empty'
        />
        <RadioGroup
          label='Radio Group'
          indicatorType='circle'
          options={[
            { label: 'Option One', value: 'option_one' },
            { label: 'Option Two', value: 'option_two' },
            { label: 'Option Three', value: 'option_three' },
          ]}
          defaultValue='option_one'
          onChange={(v) => console.log(v)}
        />

        <CollapseTrigger
          onToggle={() => setIsExpanded(!isExpanded)}
          expanded={isExpanded}
        >
          <Text>Hello</Text>
        </CollapseTrigger>
        <CollapseContent expanded={isExpanded}>
          <Text>World</Text>
        </CollapseContent>

        <View className='divide-y-2'>
          <Text>0</Text>
          <Text>1</Text>
          <Text>2</Text>
        </View>
      </ScreenScrollView>
    </ScreenLayout>
  );
};

export default TabOneScreen;
