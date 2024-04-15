export interface IMenuItem {
  icon?: string;
  label: string;
  type: 'link' | 'sub-menu';
  link?: string;
  children?: IMenuItem[];
  onClick?: () => void;
}
