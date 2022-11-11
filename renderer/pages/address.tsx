import AddAddress from '@components/address/AddAddress';
import { useAddressesQuery } from '@generated/graphql';
import { DeleteOutlineOutlined } from '@mui/icons-material';
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
  TextField,
  useTheme,
} from '@mui/material';
import { Stack } from '@mui/system';

export default function AddressPane() {
  const theme = useTheme();
  const [{ data }] = useAddressesQuery();
  const addresses = data?.addresses?.items;

  return (
    <Stack
      maxWidth={theme.spacing(40)}
      height={1}
      borderRight="solid 1px"
      borderColor="divider"
    >
      <TextField size="small" sx={{ px: 1.5, pt: 1.5 }} />
      <List sx={{ flexGrow: 1 }}>
        {addresses?.map(({ id, city, tole }) => (
          <ListItem key={id}>
            <ListItemButton sx={{ marginRight: 1 }}>
              <ListItemText>
                {tole}, {city}
              </ListItemText>
            </ListItemButton>
            <ListItemSecondaryAction>
              <IconButton>
                <DeleteOutlineOutlined color="warning" />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <AddAddress />
    </Stack>
  );
}
