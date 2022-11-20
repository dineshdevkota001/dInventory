import { useInventoryQuery } from '@generated/graphql';
import { DeleteOutlined, EditOutlined } from '@mui/icons-material';
import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';

export default function Inventory() {
  const { query } = useRouter();
  const id = query?.inventoryId as string;

  const [{ data }] = useInventoryQuery({
    variables: {
      where: {
        id,
      },
    },
    pause: !id,
  });

  const { name, description } = data?.inventory ?? {};

  return (
    <Stack>
      <Card>
        <CardHeader>{name}</CardHeader>
        <CardContent>
          <Typography>{description}</Typography>
        </CardContent>
        <CardActionArea>
          <IconButton>
            <EditOutlined />
          </IconButton>
          <IconButton>
            <DeleteOutlined />
          </IconButton>
        </CardActionArea>
      </Card>
    </Stack>
  );
}
