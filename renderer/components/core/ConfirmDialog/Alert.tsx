import { DialogContentText } from '@mui/material';
import { MouseEvent } from 'react';
import { Content, IContentProps } from './Content';
import { IRootProps, Root } from './Root';

export type IAlertProps = IRootProps &
  IContentProps & { description?: string } & Partial<IHaveChildren>;

export function Alert({
  open,
  onClose,
  title,
  onConfirm,
  children,
  description,
  ...props
}: IAlertProps) {
  const onConfirmWrapper = async () => {
    await onConfirm?.({} as MouseEvent<HTMLButtonElement>);
    onClose?.({}, 'backdropClick');
  };
  return (
    <Root {...{ open, onClose, title }}>
      {children ?? (
        <Content onConfirm={onConfirmWrapper} {...props}>
          <DialogContentText>{description}</DialogContentText>
        </Content>
      )}
    </Root>
  );
}
