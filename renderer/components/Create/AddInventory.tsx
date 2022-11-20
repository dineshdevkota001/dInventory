import { AddOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import createInventory from '@schemas/createInventory';
import { ButtonAlert, FormContent } from '@components/core/ConfirmDialog';
import { ControlledInput } from '@components/common/Controlled';
import { useCreateInventoryMutation } from '@generated/graphql';

export default function AddInventory() {
  const [, createInventoryMutation] = useCreateInventoryMutation();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      addressId: '',
      institution: '',
      name: '',
    } as IInventoryCreateInput,
    resolver: yupResolver(createInventory),
  });

  const onSubmit = async (value: IInventoryCreateInput) => {
    try {
      const r = await createInventoryMutation({ data: value });
      console.log({ r });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ButtonAlert
      title="Add Inventory"
      button={<Button startIcon={<AddOutlined />}>Add New</Button>}
    >
      <FormContent
        onSubmit={handleSubmit(onSubmit)}
        confirmLoading={isSubmitting}
      >
        <ControlledInput control={control} name="name" />
        <ControlledInput
          control={control}
          name="description"
          multiline
          rows={4}
        />
      </FormContent>
    </ButtonAlert>
  );
}
