import { cn } from '@/utils';
import { View } from 'react-native';
import { Text } from './Text';

function Card({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof View>) {
  return (
    <View
      className={cn('rounded-3xl border border-border bg-card', className)}
      {...props}
    />
  );
}

function CardHeader({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof View>) {
  return <View className={cn('p-8', className)} {...props} />;
}

function CardTitle({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof View>) {
  return (
    <Text
      variant='title2'
      className={cn('text-foreground', className)}
      {...props}
    />
  );
}

function CardDescription({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof View>) {
  return (
    <Text
      variant='subhead'
      className={cn('text-muted-foreground', className)}
      {...props}
    />
  );
}

function CardContent({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof View>) {
  return <View className={cn('p-8 pt-0', className)} {...props} />;
}

function CardFooter({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof View>) {
  return (
    <View
      className={cn(className, 'flex flex-row items-center p-8 pt-0')}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};
