import { useMinimalAddressesQuery } from '@generated/graphql';
import formatAddress from '@utils/format/formatAddress';
import { IControlledProps } from '../type';
import ControlledAutocomplete from './Controlled';

type IAddressAutocompleteProps<T> = IControlledProps<T>;

export default function AddressAutocomplete<T>({
  control,
  name,
}: IAddressAutocompleteProps<T>) {
  const [{ data }] = useMinimalAddressesQuery();
  const addresses = data?.addresses?.items;

  return (
    <ControlledAutocomplete
      control={control}
      name={name}
      isOptionEqualToValue={(option, value) =>
        option?.id === (value?.id ?? (value as unknown as string))
      }
      options={addresses ?? []}
      getOptionLabel={item => formatAddress(item)}
    />
  );
}
