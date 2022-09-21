interface ISidebarItem {
  href: string;
  title: keyof ITranslation['ui']['sidebar'];
  Icon: React.FC<React.SVGProps>;
}
