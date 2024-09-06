import { Dimensions, Modal, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/Button';
import { AntDesign } from '@expo/vector-icons';
import { cn } from '@/lib/utils';
import { Picker } from '@react-native-picker/picker';
import { useTheme } from '@/hooks/theme/useTheme';
import { pickerDates } from '@/utils/picker-dates';
import RNDateTimePicker, {
  IOSNativeProps,
  AndroidNativeProps,
  WindowsNativeProps,
} from '@react-native-community/datetimepicker';

// Define common props manually or use utility types to extract them
type CommonPickerProps = Omit<
  IOSNativeProps & AndroidNativeProps & WindowsNativeProps,
  'mode' | 'display'
>;

interface DateTimePickerWrapperProps extends CommonPickerProps {
  label?: string;
}

export const SimpleDayMonthPicker = ({
  ...props
}: DateTimePickerWrapperProps) => {
  const { colors } = useTheme();

  const [showPicker, setShowPicker] = useState(false);

  const togglePickerVisibility = () => {
    setShowPicker(!showPicker);
  };

  return (
    <>
      <TouchableOpacity
        onPress={togglePickerVisibility}
        className='flex-1 py-4'
      >
        <Text>
          {props?.value ? props?.value.toDateString() : 'Select a date'}
        </Text>
      </TouchableOpacity>
      <Modal
        visible={showPicker}
        transparent={true}
        animationType='slide'
        onRequestClose={() => setShowPicker(false)}
        onDismiss={() => setShowPicker(false)}

        // close modal when clicking outside
      >
        <View
          className='bg-overlay'
          // {...panResponder.panHandlers}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1,
            backgroundColor: 'rgba(0,0,0,0.9)',
          }}
          onTouchEnd={() => setShowPicker(false)}
        />
        <View
          style={{
            width: Dimensions.get('window').width,
            position: 'absolute',
            bottom: 20,
            flex: 1,
            maxHeight: Dimensions.get('window').height * 0.5,
          }}
          className='bg-accent rounded-xl px-4 pb-4'
        >
          <View className='bg-accent py-4 justify-between flex-row items-center'>
            <Text variant='subhead' className='text-muted-foreground'>
              {props.label ? props.label : 'Select an option'}
            </Text>
            <Button
              className='ml-auto'
              variant='ghost'
              onPress={() => setShowPicker(false)}
            >
              <AntDesign name='close' size={20} />
            </Button>
          </View>
          <Button
            className='ml-auto'
            label='Today'
            variant='link'
            onPress={() => {
              console.log('Set to Today');
            }}
          />
          <View
            onTouchStart={(e) => e.stopPropagation()}
            className='bg-accent rounded-t-[40px] max-[200px]:'
          >
            <RNDateTimePicker {...props} />
          </View>
          <Button
            className='mt-4'
            label='Done'
            onPress={() => setShowPicker(false)}
          />
        </View>
      </Modal>
    </>
  );
};
