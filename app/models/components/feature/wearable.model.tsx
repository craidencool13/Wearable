export interface ICardParams {
  onClickCard(): any;
  data: ICardData;
  isActive: boolean;
}

export interface ICardData {
  image: any;
  image_active: any;
  activeTextColor: string;
  activeBgColor: string;
  label: string;
  value: string;
  hasButton: boolean;
}
