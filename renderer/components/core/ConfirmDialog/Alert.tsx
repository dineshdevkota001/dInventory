import { DialogContentText } from '@mui/material';
import Content, { IContentProps } from './Content';
import Root, { IRootProps } from './Root';

export type IAlertProps = IRootProps &
  IContentProps & { description?: string } & Partial<IHaveChildren>;

export default function Alert({
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
        <Content
          onCancel={onClose as () => void}
          onConfirm={onConfirm}
          {...props}
        >
          <DialogContentText>{description}</DialogContentText>
        </Content>
      )}
    </Root>
  );
}
