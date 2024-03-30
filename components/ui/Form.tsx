import { cn } from '@/lib/utils';
import { View } from 'react-native';
import { Text } from './Text';

interface FormProps extends React.ComponentPropsWithoutRef<typeof View> {}
const Form = ({ className, style, ...props }: FormProps) => {
  return (
    <View
      className={cn('flex-col bg-foreground/5 px-6 rounded-xl', className)}
      style={style}
      {...props}
    />
  );
};

interface FormRowProps extends React.ComponentPropsWithoutRef<typeof View> {}
const FormRow = ({ className, style, ...props }: FormRowProps) => {
  return (
    <View
      className={cn(
        'flex-row justify-between items-center border-b border-white/5',
        className
      )}
      style={style}
      {...props}
    />
  );
};

interface LabelProps extends React.ComponentPropsWithoutRef<typeof Text> {}
const Label = ({ className, style, ...props }: LabelProps) => {
  return (
    <Text className={cn('font-semibold', className)} style={style} {...props} />
  );
};

export { Form, FormRow, Label };
