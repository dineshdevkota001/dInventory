import { useTheme } from '@mui/system';
import {
  Box,
  Divider,
  ListItemButton,
  ListItemText,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
} from '@mui/material';
import { sidebarItems } from '@constants/generative/layoutConfiguration';
import Link from 'next/link';
import { useUserPrefs } from '@contexts/UserPrefs';
import { DarkModeRounded, LightModeRounded } from '@mui/icons-material';
import { useRouter } from 'next/router';

interface ISidebarProps {
  open?: boolean;
}

export default function Sidebar({ open }: ISidebarProps) {
  const theme = useTheme();
  const { darkMode, setDarkMode } = useUserPrefs();
  const { pathname } = useRouter();

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
      <Divider />
      <Toolbar>{pathname}</Toolbar>
      <Divider />
      <List>
        {sidebarItems.map(({ href, titleKey, Icon }) => (
          <Link href={href} passHref>
            <ListItemButton selected={titleKey}>
              <ListItem>
                <ListItemIcon>
                  <Icon color={titleKey ? 'primary' : undefined} />
                </ListItemIcon>
                <ListItemText primary={titleKey} />
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
