import { cn } from '@/utils';
import { type VariantProps, cva } from 'class-variance-authority';
import { TouchableOpacity } from 'react-native';
import { Text } from './Text';

const buttonVariants = cva(
  'flex flex-row items-center justify-center rounded-[9999px]',
  {
    variants: {
      variant: {
        default: 'bg-primary',
        secondary: 'bg-secondary',
        destructive: 'bg-destructive',
        ghost: 'bg-slate-700',
        link: 'text-primary underline-offset-4',
        outline: 'bg-transparent border border-border',
      },
      size: {
        default: 'h-12 px-6',
        sm: 'h-8 px-2',
        lg: 'h-12 px-8',
        icon: 'h-12 w-12 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const buttonTextVariants = cva('text-center capitalize', {
  variants: {
    variant: {
      default: 'text-primary-foreground',
      secondary: 'text-secondary-foreground',
      destructive: 'text-destructive-foreground',
      ghost: 'text-primary-foreground',
      link: 'text-primary-foreground underline',
      outline: 'text-primary-foreground',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof TouchableOpacity>,
    VariantProps<typeof buttonVariants> {
  label?: string;
  labelClasses?: string;
}
function Button({
  label,
  labelClasses,
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {label && (
        <Text
          variant='headline'
          className={cn(buttonTextVariants({ variant }), labelClasses)}
        >
          {label}
        </Text>
      )}
      {props.children}
    </TouchableOpacity>
  );
}

export { Button, buttonVariants, buttonTextVariants };
