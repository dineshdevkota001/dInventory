import { cloneElement, ReactElement, useState } from 'react';
import { Alert, IAlertProps } from './Alert';

export type IButtonAlertProps = Omit<IAlertProps, 'open' | 'onClose'> & {
  button: ReactElement<{ onClick: () => void }>;
};

export function ButtonAlert({ button, ...props }: IButtonAlertProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => (button ? setOpen(true) : undefined);
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      {button ? cloneElement(button, { onClick: handleOpen }) : null}
      <Alert {...{ open, onClose }} {...props} />
    </>
  );
}
