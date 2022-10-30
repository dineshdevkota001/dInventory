import { LoadingButton } from '@mui/lab';
import { Button, ButtonGroup, ButtonProps, DialogContent } from '@mui/material';

export interface IContentProps {
  onCancel?: ButtonProps['onClick'];
  onConfirm?: ButtonProps['onClick'];
  confirmLoading?: boolean;
  confirmProps?: Partial<ButtonProps>;
  cancelProps?: Partial<ButtonProps>;
}

export default function Content({
  children,
  onCancel,
  onConfirm,
  confirmLoading,
  confirmProps,
  cancelProps,
}: IContentProps & IHaveChildren) {
  return (
    <>
      <DialogContent>{children}</DialogContent>
      <ButtonGroup fullWidth>
        <Button
          color="error"
          variant="text"
          onClick={onCancel}
          {...cancelProps}
        >
          Cancel
        </Button>
        <LoadingButton
          variant="text"
          onClick={onConfirm}
          loading={confirmLoading}
          {...confirmProps}
        >
          Confirm
        </LoadingButton>
      </ButtonGroup>
    </>
  );
}
