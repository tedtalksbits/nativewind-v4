import { cn } from '@/utils';
import { TouchableOpacity, View } from 'react-native';
import { Text } from './Text';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';

interface TableProps extends React.ComponentPropsWithoutRef<typeof View> {
  header?: string;
  headerClassName?: string;
  children: React.ReactNode | React.ReactNode[];
}

const Table = ({
  children,
  className,
  headerClassName,
  ...props
}: TableProps) => {
  const enhancedChildren = React.Children.map(children, (child, i) => {
    const isLastChild = i === React.Children.count(children) - 1;
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        // @ts-ignore
        isLastChild,
      });
    }
    return child;
  });
  return (
    <>
      {props.header && (
        <Text
          variant='subhead'
          className={cn('text-muted-foreground mb-4', headerClassName)}
        >
          {props.header}
        </Text>
      )}

      <View
        className={cn('rounded-xl bg-muted py-2 px-4', className)}
        {...props}
      >
        {enhancedChildren}
      </View>
    </>
  );
};

// create type for TableRow omiting children and adding the following props: title, elementLeft, elementRight, description

interface TableRowProps
  extends React.ComponentPropsWithoutRef<typeof TouchableOpacity> {
  title: string;
  elementLeft?: React.ReactNode;
  elementRight?: React.ReactNode;
  description?: string;
  isLastChild?: boolean;
}
const TableRow = ({ className, isLastChild, ...props }: TableRowProps) => {
  return (
    <TouchableOpacity
      {...props}
      className={cn('flex flex-row items-center justify-between', className)}
    >
      {props.elementLeft && <View>{props.elementLeft}</View>}
      <View
        className={`p-2 flex-1 border-border flex flex-col justify-between row-content ${
          !isLastChild && 'border-b'
        }`}
      >
        <View>
          <Text variant='headline' className='text-foreground'>
            {props.title}
          </Text>
        </View>
        {props.description && (
          <View>
            <Text variant='subhead' className='text-muted-foreground'>
              {props.description}
            </Text>
          </View>
        )}
      </View>
      {props.elementRight ? (
        <View>{props.elementRight}</View>
      ) : (
        <Text>
          <MaterialCommunityIcons name='chevron-right' size={24} />
        </Text>
      )}
    </TouchableOpacity>
  );
};

export { Table, TableRow };
