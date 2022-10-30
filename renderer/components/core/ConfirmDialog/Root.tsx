import { Dialog, DialogProps, DialogTitle } from '@mui/material';

export type IRootProps = Partial<Pick<DialogProps, 'open' | 'onClose'>> & {
  title?: string;
};

export default function Root({
  open,
  onClose,
  title,
  children,
}: IRootProps & IHaveChildren) {
  return (
    <Dialog {...{ open, onClose }} PaperProps={{ sx: { minWidth: 300 } }}>
      <DialogTitle>{title}</DialogTitle>
      {children}
    </Dialog>
  );
}
