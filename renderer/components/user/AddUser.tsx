import { AddHomeRounded } from '@mui/icons-material';
import { Button, Checkbox, FormControlLabel, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import createUser from '@schemas/createUser';
import { ButtonAlert, FormContent } from '@components/core/ConfirmDialog';
import { ControlledInput } from '@components/common/Controlled';
import { useState } from 'react';
import { useCreateUserMutation } from '@generated/graphql';
import AddressAutocomplete from '@components/common/Controlled/Autocomplete/address';

export default function AddUser() {
  const [, createUserMutation] = useCreateUserMutation();

  const [isAdvancedShown, setIsAdvancedShown] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      addressId: '',
      institution: '',
      name: '',
    } as IUserCreateInput,
    resolver: yupResolver(createUser),
  });

  const onSubmit = async (value: IUserCreateInput) => {
    await createUserMutation({ data: value });
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
        <ControlledInput control={control} name="name" />
        <Stack direction="row" gap={1}>
          <ControlledInput control={control} name="institution" />
          <ControlledInput control={control} name="email" />
        </Stack>
        <ControlledInput
          control={control}
          name="description"
          multiline
          rows={4}
        />
        <AddressAutocomplete control={control} name="addressId" />
        <FormControlLabel
          control={<Checkbox checked={isAdvancedShown} />}
          onChange={() => setIsAdvancedShown(x => !x)}
          label="Show Advanced Options"
        />
        {isAdvancedShown && (
          <>
            <Stack direction="row" gap={1}>
              <ControlledInput control={control} name="balance" type="number" />
              <ControlledInput control={control} name="phoneNumber" />
            </Stack>
            <ControlledInput control={control} name="bankAccount" />
          </>
        )}
      </FormContent>
    </ButtonAlert>
  );
}
