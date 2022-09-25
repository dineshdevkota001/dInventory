type ISidebarKeys =
  | 'inventory'
  | 'items'
  | 'home'
  | 'partners'
  | 'transactions';

type ITranslation = {
  ui: {
    sidebar: Record<ISidebarKeys, string>;
  };
};
