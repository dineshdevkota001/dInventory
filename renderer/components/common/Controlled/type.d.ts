import { Control, Path } from 'react-hook-form';

export interface IControlledProps<T> {
  control: Control<T>;
  name: Path<T>;
}
