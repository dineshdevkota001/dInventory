import { createTheme, ThemeProvider } from '@mui/material';
import theme from 'constants/mui/theme';
import { useDarkMode } from 'hooks/mediaQuery';
import {
  createContext,
  Dispatch,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

interface IUserPrefs {
  darkMode: boolean;
  setDarkMode?: Dispatch<boolean>;
}

const UserPrefsContext = createContext<IUserPrefs>({
  darkMode: false,
});

export const useUserPrefs = () => useContext(UserPrefsContext);

export default function UserPrefsProvider({ children }: IHaveChildren) {
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
    <UserPrefsContext.Provider value={value}>
      <ThemeProvider
        theme={createTheme({
          palette: {
            mode: darkMode ? 'dark' : 'light',
          },
        })}
      >
        {children}
      </ThemeProvider>
    </UserPrefsContext.Provider>
  );
}
