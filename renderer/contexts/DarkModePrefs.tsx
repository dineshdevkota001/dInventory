import { createTheme, ThemeProvider } from '@mui/material';
import { useDarkMode } from '@hooks/mediaQuery';
import { createContext, Dispatch, useContext, useMemo, useState } from 'react';

interface IDarkModePrefs {
  darkMode: boolean;
  setDarkMode?: Dispatch<boolean>;
}

const DarkModePrefsContext = createContext<IDarkModePrefs>({
  darkMode: false,
});

export const useUserPrefs = () => useContext(DarkModePrefsContext);

export default function DarkModePrefsProvider({ children }: IHaveChildren) {
  const systemDarkMode = useDarkMode();

  const [userDarkMode, setDarkMode] = useState<boolean | undefined>();

  const darkMode = userDarkMode ?? systemDarkMode;

  const value = useMemo(
    () => ({
      darkMode,
      setDarkMode,
    }),
    [darkMode, setDarkMode],
  );

  return (
    <DarkModePrefsContext.Provider value={value}>
      <ThemeProvider
        theme={createTheme({
          palette: {
            mode: darkMode ? 'dark' : 'light',
          },
        })}
      >
        {children}
      </ThemeProvider>
    </DarkModePrefsContext.Provider>
  );
}
