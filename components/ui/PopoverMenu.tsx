// PopoverMenu.tsx
import React, { useState } from 'react';
import { View, StyleSheet, Pressable, Dimensions } from 'react-native';
import { Text } from './Text';
import { cn } from '@/lib/utils';
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Card, CardContent } from './Card'; // Assuming Card components are exported from Card.tsx
import { Button } from './Button';
import * as Haptics from 'expo-haptics';

interface TogglerProps extends React.ComponentPropsWithoutRef<typeof Button> {}
interface PopoverMenuProps
  extends React.ComponentPropsWithoutRef<typeof View> {}
interface PopoverMenuProps {
  options: { label: string; onPress: () => void }[];
  togglerProps?: TogglerProps;
  menuProps?: PopoverMenuProps;
  className?: string;
  optionProps?: PopoverMenuOptionProps;
}

// Include only className and style props from TouchableOpacity
type PopoverMenuOptionProps = Pick<
  React.ComponentPropsWithoutRef<typeof TouchableOpacity>,
  'className' | 'style'
>;

const PopoverMenu: React.FC<PopoverMenuProps> = ({
  className,
  style,
  togglerProps,
  menuProps,
  optionProps,
  options,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const scale = useSharedValue(0);
  const yValue = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      opacity: scale.value,
      translateY: yValue.value,
    };
  });

  const toggleMenu = async () => {
    setIsOpen(!isOpen);
    scale.value = withTiming(isOpen ? 0 : 1, { duration: 300 });
    yValue.value = withTiming(isOpen ? 0 : 10, { duration: 300 });
    await lightHapic();
  };
  const lightHapic = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  return (
    <GestureHandlerRootView
      className={cn('relative', className)}
      style={{
        elevation: 2,
        zIndex: 9999,
      }}
    >
      <Button
        onPress={(e) => {
          toggleMenu();
          togglerProps?.onPress && togglerProps?.onPress(e);
        }}
        // {...togglerProps}
      >
        {togglerProps?.children || 'Menu'}
      </Button>
      <View
        className={cn('overlay', { hidden: !isOpen })}
        style={styles.overlay}
        onTouchStart={() => setIsOpen(false)}
      >
        <Animated.View
          className={cn('bg-accent', menuProps?.className)}
          style={[styles.menu, animatedStyle, menuProps?.style]}
          {...menuProps}
        >
          <View className='shadow-lg' style={styles.menuContainer}>
            <View className='flex flex-col'>
              {options.map((option, index) => (
                <Pressable
                  className={cn('w-full bg-accent p-4', optionProps?.className)}
                  style={optionProps?.style}
                  key={index}
                  onPress={async () => {
                    option.onPress();
                    setIsOpen(false);
                    await lightHapic();
                  }}
                >
                  <Animated.Text>
                    <Text>{option.label}</Text>
                  </Animated.Text>
                </Pressable>
              ))}
            </View>
          </View>
        </Animated.View>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  menu: {
    position: 'absolute',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    top: 50,
    right: 0,
    zIndex: 9999,
    width: 200,
    borderRadius: 10,
    overflow: 'hidden',
  },
  menuContainer: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 9998,
  },
});

export default PopoverMenu;
