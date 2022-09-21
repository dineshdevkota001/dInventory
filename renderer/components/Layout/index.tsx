import { Box, useMediaQuery, useTheme } from '@mui/material';
import { Stack } from '@mui/system';
import useDarkMode from 'hooks/mediaQuery/useDarkMode';
import { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function Layout({ children }: IHaveChildren) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
      <Sidebar open={isSidebarOpen} />
      <Stack direction="column" flexGrow={1} width="1px">
        <Topbar setSidebarOpen={setIsSidebarOpen} sidebarOpen={isSidebarOpen} />
        {children}
      </Stack>
    </>
  );
}
