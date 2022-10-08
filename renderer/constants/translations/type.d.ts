type ISidebarKeys =
  | 'inventory'
  | 'items'
  | 'home'
  | 'partners'
  | 'address'
  | 'transactions';

type ITranslation = {
  ui: {
    sidebar: Record<ISidebarKeys, string>;
  };
};
