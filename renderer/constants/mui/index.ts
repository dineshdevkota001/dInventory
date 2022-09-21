import { createTheme } from '@mui/material/styles';
import theme from './theme';

const muiConfiguration = createTheme(
  {
    components: {},
    palette: {
      mode: 'dark',
    },
  },
  theme,
);

export default muiConfiguration;
