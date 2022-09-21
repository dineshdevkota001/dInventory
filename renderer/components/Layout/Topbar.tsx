import {
  ViewSidebarRounded,
  ChevronLeftRounded,
  HouseRounded,
} from '@mui/icons-material';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { APP_NAME } from 'constants/static/conf';
import { ROOT } from 'constants/static/routes';
import Link from 'next/link';
import { Dispatch } from 'react';

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
    <AppBar position="sticky" color="transparent" sx={{ width: 1 }}>
      <Toolbar sx={{ gap: 2, width: 1 }}>
        <IconButton
          color="inherit"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <ChevronLeftRounded /> : <ViewSidebarRounded />}
        </IconButton>
        <Typography variant="h5">{title ?? APP_NAME}</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Link href={ROOT}>
          <IconButton color="inherit">
            <HouseRounded />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
