import { cn } from '@/lib/utils';
import { TextInput } from 'react-native';

interface InputProps extends React.ComponentPropsWithoutRef<typeof TextInput> {
  error?: string;
}

export const Input = ({ className, style, ...props }: InputProps) => {
  return (
    <TextInput
      className={cn(
        'flex text-lg text-foreground w-full rounded-md border border-input bg-background px-3 py-1 placeholder:text-muted-foreground focus-visible:outline-none disabled:opacity-50',
        className
      )}
      style={[{ height: 50 }, style]}
      {...props}
    />
  );
};
