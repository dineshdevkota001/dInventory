import { object, string } from 'yup';
import { Shape } from './type';

export default object<Shape<IInventoryCreateInput>>({
  name: string().required('name is required'),
  description: string().nullable(),
});
