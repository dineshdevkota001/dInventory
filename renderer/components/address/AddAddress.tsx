import Alert from '@components/core/ConfirmDialog/Alert';
import { AddHomeRounded } from '@mui/icons-material';
import { Button, Dialog } from '@mui/material';

export default function AddAddress() {
  return (
    <Alert
      title="Hello"
      button={<Button startIcon={<AddHomeRounded />}>Add New</Button>}
    />
  );
}
