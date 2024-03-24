import { View } from 'react-native-reanimated/lib/typescript/Animated';

interface ExpandableProps extends React.ComponentPropsWithoutRef<typeof View> {
  children: React.ReactNode;
}
