import { ButtonAlert, IButtonAlertProps } from '@components/core/ConfirmDialog';
import { useDeleteAddressMutation } from '@generated/graphql';

interface IDeleteAddressProps extends Pick<IButtonAlertProps, 'button'> {
  id: string;
}

export default function DeleteAddress({ button, id }: IDeleteAddressProps) {
  const [{ fetching }, deleteAddress] = useDeleteAddressMutation();

  const handleDelete = () =>
    deleteAddress({ where: { id } }).catch(console.log);

  return (
    <ButtonAlert
      {...{ button }}
      title="Delete Address!?"
      description="You cannot reverse this and this address will be deleted."
      onConfirm={handleDelete}
      confirmLoading={fetching}
      confirmProps={{
        color: 'error',
      }}
      confirmLabel="Delete"
    />
  );
}
