import {
  Button,
  ButtonGroup,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
} from '@mui/material';
import { cloneElement, ReactElement, useState } from 'react';

type IAlertProps = Partial<Pick<DialogProps, 'open' | 'onClose'>> & {
  title?: string;
  onConfirm?: () => void;
  button: ReactElement<{ onClick: () => void }>;
};

export default function Alert({
  open: propOpen,
  onClose: propOnClose,
  title,
  button,
  onConfirm,
}: IAlertProps) {
  const [localOpen, setLocalOpen] = useState(false);

  const handleOpen = () => (button ? setLocalOpen(true) : undefined);
  const onClose = () => {
    if (button) setLocalOpen(false);
    (propOnClose as () => void)?.();
  };

  const open = button ? localOpen : propOpen;

  return (
    <>
      {button ? cloneElement(button, { onClick: handleOpen }) : null}
      <Dialog {...{ open, onClose }} PaperProps={{ sx: { minWidth: 300 } }}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>This is stuuff</DialogContentText>
        </DialogContent>
        <ButtonGroup fullWidth>
          <Button color="error" variant="text" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="text" onClick={onConfirm}>
            Confirm
          </Button>
        </ButtonGroup>
      </Dialog>
    </>
  );
}
