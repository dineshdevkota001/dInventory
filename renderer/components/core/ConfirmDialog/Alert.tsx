import { DialogContentText } from '@mui/material';
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
  return (
    <Root {...{ open, onClose, title }}>
      {children ?? (
        <Content onConfirm={onConfirm} {...props}>
          <DialogContentText>{description}</DialogContentText>
        </Content>
      )}
    </Root>
  );
}
