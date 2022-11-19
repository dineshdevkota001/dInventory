import EditableDetail from '@components/common/Utils/EditableDetail';
import { FormContent } from '@components/core/ConfirmDialog';
import { useUserQuery } from '@generated/graphql';
import {
  DeleteForeverOutlined,
  EditOutlined,
  EditOffOutlined,
} from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import DeleteUser from './DeleteButton';

export default function UserDetails({ id }: { id?: string }) {
  const [isEditing, setIsEditing] = useState(false);
  const [{ data }] = useUserQuery({
    pause: !id,
    variables: { where: { id } },
  });

  const { balance, institution, name, address, description, email } =
    data?.user ?? {};

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isDirty },
  } = useForm({
    defaultValues: {
      balance,
      institution,
      name,
      addressId: address?.id ?? '',
      description,
      email,
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
        <DeleteUser
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
        <EditableDetail {...{ control }} name="balance" />
        <EditableDetail {...{ control, isEditing }} name="name" />
        <EditableDetail {...{ control, isEditing }} name="institution" />
        <EditableDetail {...{ control, isEditing }} name="description" />
        <EditableDetail {...{ control, isEditing }} name="email" />
        <EditableDetail {...{ control, isEditing }} name="addressId" />
      </FormContent>
    </Stack>
  );
}
