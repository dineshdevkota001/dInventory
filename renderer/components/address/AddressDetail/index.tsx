import EditableDetail from '@components/common/Utils/EditableDetail';
import { FormContent } from '@components/core/ConfirmDialog';
import { useAddressQuery } from '@generated/graphql';
import {
  DeleteForeverOutlined,
  EditOutlined,
  EditOffOutlined,
} from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import DeleteAddress from './DeleteAddressButton';

export default function AddressDetails({ id }: { id?: string }) {
  const [isEditing, setIsEditing] = useState(false);
  const [{ data }] = useAddressQuery({
    pause: !id,
    variables: { where: { id } },
  });

  const { city, country, district, ward, tole } = data?.address ?? {};

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isDirty },
  } = useForm({
    defaultValues: {
      city,
      country,
      district,
      ward,
      tole,
      id,
    },
  });

  if (!id) return null;
  return (
    <Stack sx={{}}>
      <Stack direction="row">
        <IconButton onClick={() => setIsEditing(x => !x)}>
          {isEditing ? (
            <EditOffOutlined color="action" />
          ) : (
            <EditOutlined color="info" />
          )}
        </IconButton>
        <DeleteAddress
          id={id}
          button={
            <IconButton>
              <DeleteForeverOutlined color="error" />
            </IconButton>
          }
        />
      </Stack>
      <FormContent
        onSubmit={handleSubmit(console.log)}
        isSubmitting={isSubmitting}
        confirmProps={{
          sx: {
            display: isEditing ? undefined : 'none',
          },
          disabled: !isDirty,
        }}
      >
        <EditableDetail {...{ control, isEditing }} name="city" />
        <EditableDetail {...{ control, isEditing }} name="country" />
        <EditableDetail {...{ control, isEditing }} name="district" />
        <EditableDetail {...{ control, isEditing }} name="ward" />
        <EditableDetail {...{ control, isEditing }} name="tole" />
      </FormContent>
    </Stack>
  );
}
