import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';
import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useDarkModePrefs } from '@contexts/DarkModePrefs';

export default function DarkModeButton() {
  const { darkMode, setDarkMode } = useDarkModePrefs();

  return (
    <Box>
      <ListItemButton onClick={() => setDarkMode(!darkMode)}>
        <ListItem>
          <ListItemIcon>
            {darkMode ? (
              <DarkModeOutlined color="secondary" />
            ) : (
              <LightModeOutlined color="warning" />
            )}
          </ListItemIcon>
          <ListItemText primary={darkMode ? 'Dark Mode' : 'Light Mode'} />
        </ListItem>
      </ListItemButton>
    </Box>
  );
}
