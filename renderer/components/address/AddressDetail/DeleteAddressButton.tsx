import { ButtonAlert, IButtonAlertProps } from '@components/core/ConfirmDialog';
import { useRemoveAddressMutation } from '@generated/graphql';

interface IDeleteAddressProps extends Pick<IButtonAlertProps, 'button'> {
  id: string;
}

export default function DeleteAddress({ button, id }: IDeleteAddressProps) {
  const [{ fetching }, removeAddress] = useRemoveAddressMutation();

  const handleRemove = () =>
    removeAddress({ where: { id } }).catch(console.log);

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
