import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Feather } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme, Platform } from 'react-native';
import Colors from '@/constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Feather>['name'];
  color: string;
}) {
  return <Feather size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tabIconDefault,
        tabBarStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background,
          // borderTopWidth: 0,
          borderTopColor: Colors[colorScheme ?? 'light'].borderColor,
        },
        headerStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background,
          // borderBottomWidth: 0,
          borderColor: Colors[colorScheme ?? 'light'].borderColor,
          ...Platform.select({
            ios: {
              shadowColor: Colors[colorScheme ?? 'light'].borderColor,
            },
            android: {
              elevation: 4,
            },
          }),
        },
        headerTitleAlign: 'left', // 'center' | 'left' | 'right
        headerTintColor: Colors[colorScheme ?? 'light'].text,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name='home' color={color} />,
          headerRight: () => (
            <Link href='/modal' asChild>
              <Pressable>
                {({ pressed }) => (
                  <Feather
                    name='info'
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name='two'
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='settings' color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
