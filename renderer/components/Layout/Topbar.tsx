import {
  HouseRounded,
  MenuRounded,
  MenuOpenRounded,
  ArrowBackRounded,
  ArrowForwardRounded,
} from '@mui/icons-material';
import {
  AppBar,
  Box,
  ButtonGroup,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import { APP_NAME } from 'constants/static/conf';
import { ROOT } from 'constants/static/routes';
import Link from 'next/link';
import { Dispatch } from 'react';
import NavigationButtons from './NavigationButtons';

interface ITopbarProps {
  setSidebarOpen?: Dispatch<boolean>;
  sidebarOpen?: boolean;
  title?: string;
}

export default function Topbar({
  setSidebarOpen,
  sidebarOpen,
  title,
}: ITopbarProps) {
  return (
    <AppBar
      position="sticky"
      color="transparent"
      variant="outlined"
      sx={{ width: 1, borderLeftWidth: 0 }}
    >
      <Toolbar
        sx={{
          width: 1,
          justifyContent: 'space-between',
          display: 'flex',
        }}
      >
        <IconButton
          color="inherit"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <MenuOpenRounded /> : <MenuRounded />}
        </IconButton>
        <NavigationButtons />
        <TextField placeholder={`Search ${title ?? APP_NAME}`} size="small" />
        <Link href={ROOT}>
          <IconButton color="inherit">
            <HouseRounded />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
