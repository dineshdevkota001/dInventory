type ISidebarKeys =
  | 'inventory'
  | 'items'
  | 'home'
  | 'partners'
  | 'transactions';

type ITopbarTitleKeys = ISidebarKeys;

type ITranslation = {
  ui: {
    sidebar: Record<ISidebarKeys, string>;
    topbar: Record<ITopbarTitleKeys, string>;
  };
};
