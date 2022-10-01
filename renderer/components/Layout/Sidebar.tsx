import { useTheme } from '@mui/system';
import {
  Box,
  Divider,
  ListItemButton,
  ListItemText,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
} from '@mui/material';
import { sidebarItems } from '@constants/generative/layoutConfiguration';
import Link from 'next/link';
import { HubOutlined } from '@mui/icons-material';
import usePageConfiguration from '@hooks/usePageConfiguration';
import { useLanguage } from '@contexts/LanguageContext';
import { APP_NAME } from '@constants/static/configurations';
import { ROOT } from '@constants/static/routes';
import DarkModeButton from './DarkModeButton';

interface ISidebarProps {
  open?: boolean;
}

export default function Sidebar({ open }: ISidebarProps) {
  const theme = useTheme();
  const pageConfiguration = usePageConfiguration();
  const { text } = useLanguage();

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
      <Box>
        <Link href={ROOT} passHref>
          <ListItemButton>
            <ListItem>
              <ListItemIcon>
                <HubOutlined
                  color={
                    pageConfiguration.sidebarKey === ROOT
                      ? 'primary'
                      : undefined
                  }
                />
              </ListItemIcon>
              <ListItemText primary={APP_NAME} />
            </ListItem>
          </ListItemButton>
        </Link>
      </Box>
      <Divider />
      <List>
        {sidebarItems.map(({ href, titleKey, Icon }) => (
          <Link href={href} passHref key={titleKey}>
            <ListItemButton
              selected={titleKey === pageConfiguration.sidebarKey}
            >
              <ListItem>
                <ListItemIcon>
                  <Icon
                    color={
                      titleKey === pageConfiguration.sidebarKey
                        ? 'primary'
                        : undefined
                    }
                  />
                </ListItemIcon>
                <ListItemText primary={text.ui.sidebar?.[titleKey]} />
              </ListItem>
            </ListItemButton>
          </Link>
        ))}
      </List>
      <Box flexGrow={1} />
      <DarkModeButton />
    </Drawer>
  );
}
