import { ButtonAlert, IButtonAlertProps } from '@components/core/ConfirmDialog';
import { useDeleteUserMutation } from '@generated/graphql';
import { useSnackbar } from 'notistack';

interface IDeleteAddressProps extends Pick<IButtonAlertProps, 'button'> {
  id: string;
}

export default function DeleteUser({ button, id }: IDeleteAddressProps) {
  const [{ fetching }, removeUser] = useDeleteUserMutation();
  const { enqueueSnackbar } = useSnackbar();

  const handleRemove = async () => {
    try {
      await removeUser({ where: { id } });
      enqueueSnackbar('Deleted User');
    } catch (e) {
      enqueueSnackbar(e.message ?? "Could't remove user", {
        variant: 'error',
      });
    }
  };

  return (
    <ButtonAlert
      {...{ button }}
      title="Delete Address!?"
      description="You cannot reverse this and this address will be deleted."
      onConfirm={handleRemove}
      confirmLoading={fetching}
      confirmProps={{
        color: 'error',
      }}
      confirmLabel="Delete"
    />
  );
}
