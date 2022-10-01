import {
  HouseOutlined,
  MenuOutlined,
  MenuOpenOutlined,
} from '@mui/icons-material';
import { AppBar, IconButton, TextField, Toolbar } from '@mui/material';
import { APP_NAME } from '@constants/static/configurations';
import { ROOT } from '@constants/static/routes';
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
          {sidebarOpen ? <MenuOpenOutlined /> : <MenuOutlined />}
        </IconButton>
        {/* <NavigationButtons /> */}
        <TextField placeholder={`Search ${title ?? APP_NAME}`} fullWidth />
        <Link href={ROOT} passHref>
          <IconButton color="inherit">
            <HouseOutlined />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
