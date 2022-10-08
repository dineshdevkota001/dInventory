import MaterialReactTable, {
  MaterialReactTableProps,
} from 'material-react-table';

interface ITableProps<T> extends MaterialReactTableProps<T> {
  loading?: boolean;
}

export default function Table<T>({ loading, ...props }: ITableProps<T>) {
  if (loading) return null;
  return (
    <MaterialReactTable
      enableStickyFooter
      enableFullScreenToggle={false}
      enableHiding={false}
      enableStickyHeader
      muiTablePaperProps={{
        sx: {
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
      muiTableContainerProps={{
        sx: {
          flexGrow: 1,
        },
      }}
      {...props}
    />
  );
}
