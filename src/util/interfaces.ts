export interface InfoItem {
  uid: string;
  id?: string | undefined;
  name?: string | undefined;
  description?: string;
  notes?: string;
  imageUrl?: string;
  tag?: string;
  module?: string;
  expansion?: string;
};

export interface ImageModule {
  default: string;
};
export interface FilterItem {
  type?: string;
  value: string;
  label: string;
  checked: boolean;
};
export interface CheckboxItem {
  value?: any;
  label: string;
  checked?: boolean;
  exclusive?: boolean;
}

export interface RandomItemResult {
  pickedItems: Array<any>;
  items: Array<any>;
};
