import { useMediaQuery } from '@mui/material';

export default function useDarkMode() {
  return useMediaQuery('(prefers-color-scheme: dark)');
}
