import { VariantProps, cva } from 'class-variance-authority';
import { View } from 'react-native';
import { Text } from './Text';
import { cn } from '@/lib/utils';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@/hooks/theme/useTheme';
import ScreenView from '../layouts/ScreenView';

const emptyStateVariants = cva('', {
  variants: {
    variant: {
      default: 'text-primary',
      transparent: 'text-primary',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface EmptyStateProps
  extends React.ComponentPropsWithoutRef<typeof View>,
    VariantProps<typeof emptyStateVariants> {
  title: string;
  description: string;
  // Icon name from MaterialCommunityIcons
  iconName: IconProps['name'];
}

interface IconProps
  extends React.ComponentPropsWithoutRef<typeof MaterialCommunityIcons> {}

export const EmptyState = ({
  title,
  description,
  iconName,
  variant,
  className,
  ...props
}: EmptyStateProps) => {
  const { colors } = useTheme();

  return (
    <ScreenView>
      <View
        className={cn(emptyStateVariants({ variant, className }))}
        {...props}
      >
        <View className='flex flex-col gap-2'>
          {iconName && (
            <MaterialCommunityIcons
              className='text-center mb-4'
              name={iconName}
              size={64}
              color={colors['--muted-foreground']}
            />
          )}
          <Text variant='title2' className='text-center font-bold'>
            {title}
          </Text>
          <Text variant='subhead' className='text-center text-foreground/50'>
            {description}
          </Text>
        </View>
      </View>
    </ScreenView>
  );
};
