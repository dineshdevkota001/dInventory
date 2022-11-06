import {
  AutocompleteProps,
  TextField,
  Autocomplete,
  TextFieldProps,
} from '@mui/material';
import snakeCaseToWords from '@utils/format/snakeCaseToWords';
import { Controller } from 'react-hook-form';
import { IControlledProps } from '../type';

export type IAutocompleteProps<T, U> = IControlledProps<T> &
  Omit<
    AutocompleteProps<U, false, false, false>,
    'renderInput' | 'onChange'
  > & {
    textfieldProps?: Omit<TextFieldProps, 'onChange'>;
    label?: string;
    onChange?: (
      onChange: (f: T[keyof T]) => void,
    ) => AutocompleteProps<U, false, false, false>['onChange'];
  };

export default function ControlledAutocomplete<T, U extends { id: string }>({
  control,
  name,
  textfieldProps,
  label,
  options,
  onChange,
  ...props
}: IAutocompleteProps<T, U>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field,
        fieldState: { error, isTouched },
        formState: { isSubmitting },
      }) => {
        const selectedOption = options.find(
          option => option.id === field.value,
        );
        return (
          <Autocomplete
            {...field}
            size="small"
            // value={{ id: field.value }}
            value={selectedOption}
            onChange={
              onChange?.(field.onChange) ??
              ((_e, value) => field.onChange(value?.id ?? value))
            }
            options={options}
            {...props}
            renderInput={params => (
              <TextField
                size="small"
                disabled={isSubmitting}
                error={!!error}
                helperText={error?.message}
                label={label ?? snakeCaseToWords(name)}
                {...params}
                {...(textfieldProps as any)}
              />
            )}
          />
        );
      }}
    />
  );
}
