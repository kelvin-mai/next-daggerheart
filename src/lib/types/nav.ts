export type NavItem = {
  name: string;
  badge?: string;
  url: string;
};

export type NavCategory = {
  name: string;
  badge?: string;
  requireAuth?: boolean;
  children?: NavItem[];
};
