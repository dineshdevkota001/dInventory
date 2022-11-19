import {
  List as MuiList,
  ListItemButton,
  ListItemText,
  Stack,
  TextField,
  useTheme,
} from '@mui/material';
import Link from 'next/link';

interface IListProps<T> extends IHaveChildren {
  data: T[];
  getLabel: (item: T) => string | JSX.Element;
  baseUrl: string;
  selectedId?: string;
}

export default function List<T extends { id: string }>({
  data,
  getLabel,
  children,
  baseUrl = '.',
  selectedId: id,
}: IListProps<T>) {
  const theme = useTheme();
  return (
    <Stack
      maxWidth={theme.spacing(40)}
      height={1}
      borderRight="solid 1px"
      borderColor="divider"
    >
      {/* Searchbar */}
      <TextField size="small" sx={{ px: 1.5, pt: 1.5 }} />
      {/* List */}
      <MuiList sx={{ flexGrow: 1 }}>
        {data?.map(item => (
          <Link key={item?.id} href={`${baseUrl}${item.id}`} passHref>
            <ListItemButton sx={{ marginRight: 1 }} selected={id === item.id}>
              <ListItemText>
                {getLabel?.(item) ?? JSON.stringify(item)}
              </ListItemText>
            </ListItemButton>
          </Link>
        ))}
      </MuiList>
      {children}
    </Stack>
  );
}
