import { number, object, string } from 'yup';

export default object({
  tole: string().required('Tole Name is required'),
  ward: number().required('Ward is required'),
  city: string().nullable(),
  country: string().nullable(),
  district: string().nullable(),
});
