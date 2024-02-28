import { Appearance, useColorScheme } from 'react-native';

export function useTheme() {
  const colorScheme = useColorScheme() ?? 'light';
  const toggleTheme = () => {
    Appearance.setColorScheme(colorScheme === 'light' ? 'dark' : 'light');
  };

  return {
    theme: colorScheme,
    toggleTheme,
  };
}
