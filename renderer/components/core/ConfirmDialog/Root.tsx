import { CloseRounded } from '@mui/icons-material';
import {
  Dialog,
  DialogProps,
  DialogTitle,
  IconButton,
  Stack,
} from '@mui/material';

export type IRootProps = Partial<Pick<DialogProps, 'open' | 'onClose'>> & {
  title?: string;
};

export function Root({
  open,
  onClose,
  title,
  children,
}: IRootProps & IHaveChildren) {
  return (
    <Dialog {...{ open, onClose }} PaperProps={{ sx: { minWidth: 300 } }}>
      <Stack direction="row" justifyContent="space-between" alignItems="start">
        <DialogTitle>{title}</DialogTitle>
        <IconButton
          onClick={onClose as () => void}
          sx={{ mr: 1.5, mt: 1.5 }}
          size="small"
        >
          <CloseRounded color="inherit" />
        </IconButton>
      </Stack>
      {children}
    </Dialog>
  );
}
