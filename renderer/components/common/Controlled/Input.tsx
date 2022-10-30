import { TextField, TextFieldProps } from '@mui/material';
import snakeCaseToWords from '@utils/format/snakeCaseToWords';
import { Controller } from 'react-hook-form';
import { IControlledProps } from './type';

export default function ControlledInput<T>({
  control,
  name,
  ...props
}: IControlledProps<T> & TextFieldProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field,
        fieldState: { error, isTouched },
        formState: { isSubmitting },
      }) => (
        <TextField
          {...field}
          size="small"
          disabled={isSubmitting}
          helperText={error?.message}
          error={isTouched && !!error}
          label={snakeCaseToWords(name)}
          {...props}
        />
      )}
    />
  );
}
