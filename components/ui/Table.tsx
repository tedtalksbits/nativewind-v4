import { cn } from '@/utils';
import { TouchableOpacity, View } from 'react-native';
import { Text } from './Text';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface TableProps extends React.ComponentPropsWithoutRef<typeof View> {
  header?: string;
  headerClassName?: string;
}

function Table({ children, className, headerClassName, ...props }: TableProps) {
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
        className={cn(
          'rounded-xl bg-muted py-2 px-4 [&>.row-content]:last:border-b-0 table',
          className
        )}
        {...props}
      >
        {children}
      </View>
    </>
  );
}

// create type for TableRow omiting children and adding the following props: title, elementLeft, elementRight, description

interface TableRowProps
  extends React.ComponentPropsWithoutRef<typeof TouchableOpacity> {
  title: string;
  elementLeft?: React.ReactNode;
  elementRight?: React.ReactNode;
  description?: string;
}
function TableRow({ className, ...props }: TableRowProps) {
  return (
    <TouchableOpacity
      {...props}
      className={cn('flex flex-row items-center justify-between', className)}
    >
      {props.elementLeft && <View>{props.elementLeft}</View>}
      <View className='p-2 flex-1 border-b border-border flex flex-col justify-between row-content'>
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
}

export { Table, TableRow };
