import ButtonAlert from '@components/core/ConfirmDialog/ButtonAlert';
import { AddHomeRounded } from '@mui/icons-material';
import { Button } from '@mui/material';

export default function AddAddress() {
  return (
    <ButtonAlert
      title="Hello"
      description="This is just a test"
      button={<Button startIcon={<AddHomeRounded />}>Add New</Button>}
    />
  );
}
