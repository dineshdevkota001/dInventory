import { Stack } from '@mui/system';
import Sidebar from './Sidebar';

export default function Layout({ children }: IHaveChildren) {
  return (
    <>
      <Sidebar open />
      <Stack direction="column" flexGrow={1} width="1px">
        {children}
      </Stack>
    </>
  );
}
