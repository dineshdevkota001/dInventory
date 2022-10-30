import { cloneElement, ReactElement, useState } from 'react';
import Alert, { IAlertProps } from './Alert';

type IButtonAlertProps = Omit<IAlertProps, 'open' | 'onClose'> & {
  button: ReactElement<{ onClick: () => void }>;
};

export default function ButtonAlert({ button, ...props }: IButtonAlertProps) {
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
