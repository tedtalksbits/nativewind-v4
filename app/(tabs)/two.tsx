import { ScreenLayout } from '@/components/layouts/ScreenLayout';
import ScreenView from '@/components/layouts/ScreenView';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Text } from '@/components/ui/Text';
import { useState } from 'react';
import { ActionSheetIOS, View } from 'react-native';
import { Switch } from 'react-native';

export default function TabTwoScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [value, setValue] = useState('one');
  const showActionSheet = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'Apple', 'Banana', 'Orange'],
        cancelButtonIndex: 0,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          console.log('Cancel');
        } else if (buttonIndex === 1) {
          console.log('Apple');
        } else if (buttonIndex === 2) {
          console.log('Banana');
        } else if (buttonIndex === 3) {
          console.log('Orange');
        }
      }
    );

  return (
    <ScreenLayout>
      <ScreenView>
        <View className='flex flex-col gap-4'>
          <Switch onValueChange={toggleSwitch} value={isEnabled} />
          <Input placeholder='Type here to translate!' />
          <Select
            label='Select one of the following options'
            defaultValue={value}
            options={[
              { label: 'One', value: 'one' },
              { label: 'Two', value: 'two' },
              { label: 'Three', value: 'three' },
              { label: 'Toyota', value: 'toyota', groupLabel: 'Cars' },
              { label: 'Honda', value: 'honda', groupLabel: 'Cars' },
              { label: 'BMW', value: 'bmw', groupLabel: 'Cars' },
              { label: 'Audi', value: 'audi', groupLabel: 'Cars' },
              { label: 'Tesla', value: 'tesla', groupLabel: 'Cars' },
              { label: 'Apple', value: 'apple', groupLabel: 'Fruits' },
              { label: 'Banana', value: 'banana', groupLabel: 'Fruits' },
              { label: 'Orange', value: 'orange', groupLabel: 'Fruits' },
              { label: 'Grapes', value: 'grapes', groupLabel: 'Fruits' },
              { label: 'Pineapple', value: 'pineapple', groupLabel: 'Fruits' },
              { label: 'Mango', value: 'mango', groupLabel: 'Fruits' },
            ]}
            onSelect={(value) => {
              setValue(value);
            }}
          />
          <Text>You have selected: {value}</Text>
          <Button label='Show Action Sheet' onPress={showActionSheet} />
        </View>
      </ScreenView>
    </ScreenLayout>
  );
}
