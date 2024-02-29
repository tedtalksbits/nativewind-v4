import { Text as TextComponent } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks/theme/useTheme';
import { cn } from '@/utils';
import { VariantProps, cva } from 'class-variance-authority';
const textVariants = cva('text-base text-foreground', {
  variants: {
    variant: {
      largeTitle: 'text-[41px] font-normal leading-[51px]',
      title1: 'text-[33px] font-normal leading-[41px]',
      title2: 'text-[25px] font-normal leading-[32px]',
      title3: 'text-[23px] font-normal leading-[29px]',
      headline: 'text-[19px] font-semibold leading-[25px]',
      body: 'text-[19px] font-normal leading-[25px]',
      callout: 'text-[17px] font-normal leading-[22px]',
      subhead: 'text-[15px] font-normal leading-[20px]',
      footnote: 'text-[13px] font-normal leading-[18px]',
      caption1: 'text-[12px] font-normal leading-[16px]',
      caption2: 'text-[11px] font-normal leading-[13px]',
      link: 'text-blue-500 underline',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});
interface TextProps
  extends React.ComponentPropsWithoutRef<typeof TextComponent>,
    VariantProps<typeof textVariants> {}

function Text({ children, className, variant, ...props }: TextProps) {
  return (
    <TextComponent
      className={cn(textVariants({ variant }), className)}
      {...props}
    >
      {children}
    </TextComponent>
  );
}
/*
  ========================================
  ALTERNAIVE IMPLEMENTATION
  ========================================
*/

// function H1({ style, children, className, ...props }: TextProps) {
//   const { themeColors } = useTheme();
//   const { foreground } = themeColors;
//   return (
//     <TextComponent
//       className={cn('text-4xl font-bold', className)}
//       style={[style, { color: foreground() }]}
//       {...props}
//     >
//       {children}
//     </TextComponent>
//   );
// }

// function H2({ style, children, className, ...props }: TextProps) {
//   const { themeColors } = useTheme();
//   const { foreground } = themeColors;
//   return (
//     <TextComponent
//       className={cn('text-3xl font-bold', className)}
//       style={[style, { color: foreground() }]}
//       {...props}
//     >
//       {children}
//     </TextComponent>
//   );
// }

// function H3({ style, children, className, ...props }: TextProps) {
//   const { themeColors } = useTheme();
//   const { foreground } = themeColors;
//   return (
//     <TextComponent
//       className={cn('text-2xl font-bold', className)}
//       style={[style, { color: foreground() }]}
//       {...props}
//     >
//       {children}
//     </TextComponent>
//   );
// }

// function H4({ style, children, className, ...props }: TextProps) {
//   const { themeColors } = useTheme();
//   const { foreground } = themeColors;
//   return (
//     <TextComponent
//       className={cn('text-xl font-bold', className)}
//       style={[style, { color: foreground() }]}
//       {...props}
//     >
//       {children}
//     </TextComponent>
//   );
// }

// function H5({ style, children, className, ...props }: TextProps) {
//   const { themeColors } = useTheme();
//   const { foreground } = themeColors;
//   return (
//     <TextComponent
//       className={cn('text-lg font-bold', className)}
//       style={[style, { color: foreground() }]}
//       {...props}
//     >
//       {children}
//     </TextComponent>
//   );
// }

// function H6({ style, children, className, ...props }: TextProps) {
//   const { themeColors } = useTheme();
//   const { foreground } = themeColors;
//   return (
//     <TextComponent
//       className={cn('text-base font-bold', className)}
//       style={[style, { color: foreground() }]}
//       {...props}
//     >
//       {children}
//     </TextComponent>
//   );
// }

// // create a paragraph component

// function P({ style, children, className, ...props }: TextProps) {
//   const { themeColors } = useTheme();
//   const { foreground } = themeColors;
//   return (
//     <TextComponent
//       className={cn('text-base', className)}
//       style={[style, { color: foreground() }]}
//       {...props}
//     >
//       {children}
//     </TextComponent>
//   );
// }

// Text.H1 = H1;
// Text.H2 = H2;
// Text.H3 = H3;
// Text.H4 = H4;
// Text.H5 = H5;
// Text.H6 = H6;
// Text.P = P;

export { Text };
