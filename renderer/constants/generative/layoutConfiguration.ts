import {
  StoreOutlined,
  Inventory2Outlined,
  LocalShippingOutlined,
  HandshakeOutlined,
  MoneyOutlined,
} from '@mui/icons-material';
import {
  HOME,
  INVENTORY,
  ITEMS,
  PARTNERS,
  TRANSACTIONS,
} from '@constants/static/routes';

export const sidebarItems: ISidebarItem[] = [
  {
    href: HOME,
    Icon: StoreOutlined,
    titleKey: 'home',
  },
  {
    href: INVENTORY,
    Icon: Inventory2Outlined,
    titleKey: 'inventory',
  },
  {
    href: ITEMS,
    Icon: LocalShippingOutlined,
    titleKey: 'items',
  },
  {
    href: PARTNERS,
    Icon: HandshakeOutlined,
    titleKey: 'partners',
  },
  {
    href: TRANSACTIONS,
    Icon: MoneyOutlined,
    titleKey: 'transactions',
  },
];

export const pageConfiguration = [
  {
    href: HOME,
    sidebarKey: 'home',
  },
  {
    href: INVENTORY,
    sidebarKey: 'inventory',
  },
  {
    href: ITEMS,
    sidebarKey: 'items',
  },
  {
    href: PARTNERS,
    sidebarKey: 'partners',
  },
  {
    href: TRANSACTIONS,
    sidebarKey: 'transactions',
  },
];
