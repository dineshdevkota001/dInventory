import { Stack, Typography } from '@mui/material';
import snakeCaseToWords from '@utils/format/snakeCaseToWords';
import { Controller } from 'react-hook-form';
import { ControlledInput, IControlledProps } from '../Controlled';

interface IEditableDetailProps<T> extends Partial<IControlledProps<T>> {
  title?: string;
  isEditing?: boolean;
}

export default function EditableDetail<T>({
  control,
  name,
  isEditing,
  title = snakeCaseToWords(name),
}: IEditableDetailProps<T>) {
  return (
    <Stack direction="row" width={1} gap={4} alignItems="center">
      <Typography color="text.secondary" minWidth={200} align="right">
        {title}
      </Typography>
      {isEditing ? (
        <ControlledInput name={name} control={control} label={null} />
      ) : (
        <Controller
          control={control}
          name={name}
          render={({ field: { value } }) => (
            <Typography>{`${value}`}</Typography>
          )}
        />
      )}
    </Stack>
  );
}
