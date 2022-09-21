import { useTheme } from '@mui/system';
import {
  Box,
  Divider,
  ListItemButton,
  ListItemText,
  Switch,
  Toolbar,
} from '@mui/material';
import { Drawer, List, ListItem, ListItemIcon } from '@mui/material';
import { sidebarItems } from 'constants/generative/sidebar';
import Link from 'next/link';
import { useDarkMode } from 'hooks/mediaQuery';
import { useUserPrefs } from 'contexts/UserPrefs';
import { DarkModeRounded, LightModeRounded } from '@mui/icons-material';

interface ISidebarProps {
  open?: boolean;
}

export default function Sidebar({ open }: ISidebarProps) {
  const theme = useTheme();
  const { darkMode, setDarkMode } = useUserPrefs();

  return (
    <Drawer
      open={open}
      hideBackdrop
      variant={open ? 'permanent' : 'temporary'}
      ModalProps={{ disablePortal: true }}
      elevation={5}
      sx={{
        width: theme.spacing(32),
      }}
      PaperProps={{
        sx: {
          width: theme.spacing(32),
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Toolbar />
      <Divider />
      <List>
        {sidebarItems.map(({ href, title, Icon }) => (
          <Link href={href} passHref>
            <ListItemButton>
              <ListItem
                sx={{ width: theme.spacing(32) }}
                selected={title === 'seller'}
              >
                <ListItemIcon>
                  <Icon color={title === 'seller' ? 'primary' : undefined} />
                </ListItemIcon>
                <ListItemText primary={title} />
              </ListItem>
            </ListItemButton>
          </Link>
        ))}
      </List>
      <Box flexGrow={1} />
      <Box>
        <ListItemButton onClick={() => setDarkMode(!darkMode)}>
          <ListItem>
            <ListItemIcon>
              {darkMode ? <DarkModeRounded /> : <LightModeRounded />}
            </ListItemIcon>
            <ListItemText>Dark Mode</ListItemText>
          </ListItem>
        </ListItemButton>
      </Box>
    </Drawer>
  );
}
