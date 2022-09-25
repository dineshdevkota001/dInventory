import { Stack, Typography } from '@mui/material';

export default function UnderConstruction() {
  return (
    <Stack
      flexGrow={1}
      flexShrink={1}
      justifyContent="center"
      alignItems="center"
    >
      <Typography color="text.secondary">
        This Page is under Construction
      </Typography>
    </Stack>
  );
}
