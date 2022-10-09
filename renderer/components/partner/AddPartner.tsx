import Alert from '@components/core/ConfirmDialog/Alert';
import { AddShoppingCartRounded } from '@mui/icons-material';
import { Button } from '@mui/material';

export default function AddPartner() {
  return (
    <Alert
      title="Hello"
      button={<Button startIcon={<AddShoppingCartRounded />}>Add New</Button>}
    />
  );
}
