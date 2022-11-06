import { number, object, string } from 'yup';

export default object({
  name: string().required('name is required'),
  institution: string().required('institution is required'),
  addressId: string().required('addressId is required'),
  balance: number().nullable(),
  bankAccount: string().nullable(),
  description: string().nullable(),
  email: string().nullable(),
  phoneNumber: string().nullable(),
});
