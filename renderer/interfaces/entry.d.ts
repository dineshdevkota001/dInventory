type IAddressEntry = Pick<IAddress, 'wardNo' | 'tole'>;

type IProfileEntry = Pick<
  IProfile,
  'name' | 'phone' | 'institution' | 'description'
>;

type ITemTypeEntry = Pick<IItemType, 'name' | 'description' | 'type'>;
