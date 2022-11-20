import { AddOutlined } from '@mui/icons-material';
import { Button, Checkbox, FormControlLabel, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import createAddress from '@schemas/createAddress';
import { ButtonAlert, FormContent } from '@components/core/ConfirmDialog';
import { ControlledInput } from '@components/common/Controlled';
import { useState } from 'react';
import { useCreateAddressMutation } from '@generated/graphql';

export default function AddAddress() {
  const [, createAddressMutation] = useCreateAddressMutation();

  const [isAdvancedShown, setIsAdvancedShown] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      tole: '',
      ward: 0,
    } as IAddressCreateInput,
    resolver: yupResolver(createAddress),
  });

  const onSubmit = async (value: IAddressCreateInput) => {
    const { tole, ward } = value;
    if (isAdvancedShown) await createAddressMutation({ data: value });
    else await createAddressMutation({ data: { tole, ward } });
  };

  return (
    <ButtonAlert
      title="Add Address"
      button={<Button startIcon={<AddOutlined />}>Add New</Button>}
    >
      <FormContent
        onSubmit={handleSubmit(onSubmit)}
        confirmLoading={isSubmitting}
      >
        <Stack direction="row" gap={1}>
          <ControlledInput control={control} name="ward" type="number" />
          <ControlledInput control={control} name="tole" />
        </Stack>
        <FormControlLabel
          control={<Checkbox checked={isAdvancedShown} />}
          onChange={() => setIsAdvancedShown(x => !x)}
          label="Show Advanced Options"
        />
        {isAdvancedShown && (
          <>
            <Stack direction="row" gap={1}>
              <ControlledInput control={control} name="district" />
              <ControlledInput control={control} name="city" />
            </Stack>
            <ControlledInput control={control} name="country" />
          </>
        )}
      </FormContent>
    </ButtonAlert>
  );
}
