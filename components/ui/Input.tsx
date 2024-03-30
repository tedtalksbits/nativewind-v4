import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { TextInput } from 'react-native';

const inputVariants = cva(
  'flex text-foreground w-full px-3 py-1 placeholder:text-muted-foreground focus-visible:outline-none disabled:opacity-50 py-4',
  {
    variants: {
      variant: {
        default: 'rounded-md border border-input bg-background',
        ghost: 'bg-transparent border-none',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
interface InputProps
  extends React.ComponentPropsWithoutRef<typeof TextInput>,
    VariantProps<typeof inputVariants> {
  error?: string;
}

export const Input = ({ className, style, variant, ...props }: InputProps) => {
  return (
    <TextInput
      className={cn(inputVariants({ variant }), className)}
      style={[{ fontSize: 18 }, style]}
      {...props}
    />
  );
};
