import { AddHomeRounded } from '@mui/icons-material';
import { Button, Stack, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import createAddress from 'schema/createAddress';
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
      title="Hello"
      description="This is just a test"
      button={<Button startIcon={<AddHomeRounded />}>Add New</Button>}
    >
      <FormContent
        onSubmit={handleSubmit(onSubmit)}
        confirmLoading={isSubmitting}
      >
        <Stack direction="row" gap={1}>
          <ControlledInput control={control} name="ward" type="number" />
          <ControlledInput control={control} name="tole" />
        </Stack>
        <TextField
          type="checkbox"
          onChange={() => setIsAdvancedShown(x => !x)}
          label="Show Advanced Options"
          variant="standard"
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
