import { cn } from '@/lib/utils';
import {
  Dimensions,
  Modal,
  PanResponder,
  ScrollView,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import { Text } from './Text';
import { useRef, useState } from 'react';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { Button } from './Button';

type SelectOptions = {
  label: string;
  value: string;
  onSelect?: (value: string) => void;
  groupLabel?: string;
};
interface SelectProps extends React.ComponentPropsWithoutRef<typeof View> {
  defaultValue: string;
  options: SelectOptions[];
  children?: React.ReactNode;
  onSelect?: (value: string) => void;
  label?: string;
}

const Select = ({
  className,
  defaultValue,
  options,
  onSelect,
  label,
  ...props
}: SelectProps) => {
  const [selectedValue, setSelectedValue] = useState(
    defaultValue || options[0].value
  );
  const [showOptions, setShowOptions] = useState(false);
  const selectedClass = 'bg-primary text-primary-background rounded-xl';
  const handleSelect = (value: string) => {
    onSelect && onSelect(value);
    setSelectedValue(value);
  };

  return (
    <>
      {label && (
        <Text variant='subhead' className='text-muted-foreground'>
          {label}
        </Text>
      )}
      <View
        className={cn(
          'rounded-xl border border-border bg-background',
          className
        )}
        {...props}
      >
        <TouchableOpacity
          className='flex-row items-center justify-between'
          onPress={() => setShowOptions(!showOptions)}
        >
          <Text variant='subhead' className='p-4'>
            {options.find((option) => option.value === selectedValue)?.label ||
              defaultValue}
          </Text>
          <Text className='mr-3'>
            <FontAwesome
              name={showOptions ? 'chevron-up' : 'chevron-down'}
              size={20}
            />
          </Text>
        </TouchableOpacity>

        <SelectOptionsList
          label={label}
          setShowOptions={setShowOptions}
          options={options}
          selectedValue={selectedValue}
          setSelectedValue={handleSelect}
          selectedClass={selectedClass}
          showOptions={showOptions}
        />
      </View>
    </>
  );
};

interface SelectOptionProps
  extends React.ComponentPropsWithoutRef<typeof TouchableOpacity> {
  children: React.ReactNode;
}

const SelectOption = ({ children, className, ...props }: SelectOptionProps) => {
  return (
    <TouchableOpacity className={cn('p-2', className)} {...props}>
      <Text variant='body'>{children}</Text>
    </TouchableOpacity>
  );
};

interface SelectOptionsListProps {
  options: SelectOptions[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  selectedClass: string;
  setShowOptions?: (value: boolean) => void;
  showOptions: boolean;
  label?: string;
}

const SelectOptionsList = ({
  options,
  selectedValue,
  setSelectedValue,
  selectedClass,
  setShowOptions,
  showOptions,
  label,
}: SelectOptionsListProps) => {
  const displayedGroups = new Set<string>();
  // comment out the following code to allow the modal to be closed by swiping down
  // const panResponder = useRef(
  //   PanResponder.create({
  //     onStartShouldSetPanResponder: () => true,
  //     onMoveShouldSetPanResponder: () => true,
  //     onPanResponderMove: (evt, gestureState) => {
  //       // Check if the swipe is a downward swipe and exceeds 50 units
  //       if (gestureState.dy > 50) {
  //         setShowOptions && setShowOptions(false);
  //       }
  //     },
  //   })
  // ).current;
  return (
    <Modal
      visible={showOptions}
      transparent={true}
      animationType='slide'
      onRequestClose={() => setShowOptions && setShowOptions(false)}
      onDismiss={() => setShowOptions && setShowOptions(false)}

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
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
        onTouchEnd={() => setShowOptions && setShowOptions(false)}
      />
      <ScrollView
        stickyHeaderIndices={[0]}
        onScrollToTop={(e) => {
          console.log('scroll to top', e);
        }}
        style={{
          width: Dimensions.get('window').width,
          position: 'absolute',
          bottom: 20,
          flex: 1,
          maxHeight: Dimensions.get('window').height * 0.5,
        }}
        className='bg-accent rounded-xl px-4 pb-4'
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {label && (
          <View className='bg-accent py-4 justify-between flex-row items-center'>
            <Text variant='subhead' className='text-muted-foreground'>
              {label}
            </Text>
            <Button
              variant='ghost'
              onPress={() => setShowOptions && setShowOptions(false)}
            >
              <FontAwesome name='times' size={20} />
            </Button>
          </View>
        )}

        {options.map((option, index) => {
          // deter if we need to show the group label
          let showGroupLabel = false;
          if (option.groupLabel && !displayedGroups.has(option.groupLabel)) {
            showGroupLabel = true;
            displayedGroups.add(option.groupLabel);
          }
          return (
            <View
              key={index}
              className={cn(
                'border-b border-border w-full',
                showGroupLabel ? 'pt-2' : ''
              )}
            >
              {showGroupLabel && (
                <Text variant='subhead' className='text-muted-foreground my-2'>
                  {option.groupLabel}
                </Text>
              )}
              <SelectOption
                onPress={() => {
                  setSelectedValue(option.value);
                  setShowOptions && setShowOptions(false);
                }}
                className={cn(
                  selectedValue === option.value ? selectedClass : ''
                )}
              >
                {option.label}
                {selectedValue === option.value && (
                  <Text>
                    <MaterialCommunityIcons name='check' size={20} />
                  </Text>
                )}
              </SelectOption>
            </View>
          );
        })}
      </ScrollView>
    </Modal>
  );
};

export { Select };
