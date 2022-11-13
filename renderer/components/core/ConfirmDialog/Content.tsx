import { LoadingButton } from '@mui/lab';
import { ButtonProps, DialogContent, useTheme } from '@mui/material';
import { DetailedHTMLProps, FormHTMLAttributes } from 'react';

export interface IContentProps {
  onConfirm?: ButtonProps['onClick'];
  confirmLoading?: boolean;
  confirmProps?: Partial<ButtonProps>;
  confirmLabel?: string;
}

export function Content({
  children,
  onConfirm,
  confirmLoading,
  confirmProps,
  confirmLabel = 'Confirm',
}: IContentProps & IHaveChildren) {
  const theme = useTheme();
  return (
    <>
      <DialogContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: theme.spacing(2),
          mb: 1,
        }}
      >
        {children}
      </DialogContent>
      <LoadingButton
        variant="text"
        onClick={onConfirm}
        loading={confirmLoading}
        fullWidth
        size="large"
        {...confirmProps}
      >
        {confirmLabel}
      </LoadingButton>
    </>
  );
}

type IFormProps = DetailedHTMLProps<
  FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

type IFormContentProps = IContentProps &
  IHaveChildren & {
    onSubmit: IFormProps['onSubmit'];
    formProps?: IFormProps;
    isSubmitting?: boolean;
  };

export function FormContent({
  onSubmit,
  formProps,
  isSubmitting,
  ...props
}: IFormContentProps) {
  return (
    <form onSubmit={onSubmit} {...formProps}>
      <Content
        confirmProps={{
          type: 'submit',
        }}
        confirmLoading={isSubmitting}
        {...props}
      />
    </form>
  );
}
