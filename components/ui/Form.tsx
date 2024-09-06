import { cn } from '@/lib/utils';
import { View } from 'react-native';
import { Text } from './Text';
import React from 'react';

interface FormProps extends React.ComponentPropsWithoutRef<typeof View> {}
const Form = ({ className, style, ...props }: FormProps) => {
  const enhancedChildren = React.Children.map(props.children, (child, i) => {
    const isLastChild = i === React.Children.count(props.children) - 1;
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        // @ts-ignore
        isLastChild,
      });
    }
    return child;
  });

  return (
    <View
      className={cn('flex-col bg-muted px-6 rounded-xl', className)}
      style={style}
      {...props}
    >
      {enhancedChildren}
    </View>
  );
};

interface FormRowProps extends React.ComponentPropsWithoutRef<typeof View> {
  isLastChild?: boolean;
}
const FormRow = ({ className, style, ...props }: FormRowProps) => {
  return (
    <View
      className={cn('flex-row justify-between items-center', className, {
        'border-b border-border': !props.isLastChild,
      })}
      style={style}
      {...props}
    />
  );
};

interface LabelProps extends React.ComponentPropsWithoutRef<typeof Text> {}
const Label = ({ className, style, ...props }: LabelProps) => {
  return <Text className={cn('', className)} style={style} {...props} />;
};

interface FormHeaderProps extends React.ComponentPropsWithoutRef<typeof Text> {}

const FormHeader = ({ children, className, ...props }: FormHeaderProps) => {
  return (
    <Text
      variant={props.variant || 'caption1'}
      className={cn('text-muted-foreground mt-8 mb-4 uppercase', className)}
      {...props}
    >
      {children}
    </Text>
  );
};

export { Form, FormRow, Label, FormHeader };
