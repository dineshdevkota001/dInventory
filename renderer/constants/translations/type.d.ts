type ISidebarKeys =
  | 'buyer'
  | 'seller'
  | 'inventory'
  | 'transaction'
  | 'notification';

type ITranslation = {
  ui: {
    sidebar: Record<ISidebarKeys, string>;
  };
};
