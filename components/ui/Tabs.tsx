import { cn } from '@/lib/utils';
import { Touchable, TouchableOpacity, View } from 'react-native';
import { Text } from './Text';
import { useEffect, useState } from 'react';
import * as Haptics from 'expo-haptics';

interface TabProps extends React.ComponentPropsWithRef<typeof View> {
  defaultTab: string;
  tabs: Record<string, React.ReactNode>;
  tabTriggerProps?: React.ComponentPropsWithRef<typeof Text>;
  tabListProps?: React.ComponentPropsWithRef<typeof View>;
  onTabChange?: (tab: string) => void;
}

export const Tabs = ({
  defaultTab,
  tabs,
  tabListProps,
  tabTriggerProps,
  onTabChange,
  ...props
}: TabProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  async function handleTabChange(tab: string) {
    onTabChange && onTabChange(tab);
    setActiveTab(tab);
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  }

  useEffect(() => {
    setActiveTab(defaultTab);
    console.log('defaultTab', defaultTab);
  }, [defaultTab]);

  return (
    <View {...props}>
      <View
        className={cn(
          'flex flex-row justify-between rounded-xl overflow-hidden gap-2 mb-4 bg-muted w-[300px] mx-auto p-1',
          tabListProps?.className
        )}
        {...tabListProps}
      >
        {Object.keys(tabs).map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={(e) => {
              handleTabChange(tab);
              tabTriggerProps?.onPress && tabTriggerProps.onPress(e);
            }}
            className={cn(
              'p-2 w-[48%] cursor-pointer rounded-xl overflow-hidden',
              activeTab === tab && 'bg-foreground/50',
              tabTriggerProps?.className
            )}
            {...tabTriggerProps}
          >
            <Text className={cn('text-white text-lg font-bold text-center')}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {tabs[activeTab]}
    </View>
  );
};
