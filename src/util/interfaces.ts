export interface InfoItem {
  uid: string;
  id?: string | undefined;
  name?: string | undefined;
  description: string;
  notes?: string;
  imageUrl?: string;
  tag?: string;
}

export interface ImageModule {
  default: string;
}
