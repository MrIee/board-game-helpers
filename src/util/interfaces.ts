export interface InfoItem {
  uid: string;
  id?: string | undefined;
  name?: string | undefined;
  description: string;
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
  type: string;
  value: string;
};
