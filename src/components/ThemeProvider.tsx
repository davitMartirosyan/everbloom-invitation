import { createContext, useContext, useEffect, ReactNode } from 'react';

interface ThemeConfig {
  name: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  foregroundColor: string;
  customColors: {
    [key: string]: string;
  };
}

interface ThemeContextType {
  theme: ThemeConfig | null;
}

const ThemeContext = createContext<ThemeContextType>({ theme: null });

interface ThemeProviderProps {
  theme: ThemeConfig;
  children: ReactNode;
}

export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  useEffect(() => {
    // Apply theme colors to CSS variables
    const root = document.documentElement;
    
    root.style.setProperty('--primary', theme.primaryColor);
    root.style.setProperty('--secondary', theme.secondaryColor);
    root.style.setProperty('--accent', theme.accentColor);
    root.style.setProperty('--background', theme.backgroundColor);
    root.style.setProperty('--foreground', theme.foregroundColor);
    
    // Apply custom colors
    Object.entries(theme.customColors).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
    
    // Update gradients based on new colors
    root.style.setProperty('--gradient-romantic', `linear-gradient(135deg, hsl(${theme.customColors['rose-gold'] || theme.primaryColor}), hsl(${theme.customColors['champagne'] || theme.accentColor}))`);
    root.style.setProperty('--gradient-soft', `linear-gradient(180deg, hsl(${theme.customColors['blush'] || theme.secondaryColor}), hsl(${theme.backgroundColor}))`);
    
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};