export interface IFeelingSliderParams {
  onSubmitFeeling(): any;
  feelingVal: any;
  setFeelingVal: any;
  activeEmoji: any;
}
export interface ICardParams {
  data: ICardData;
}

export interface ICardData {
  image: any;
  image_active: any;
  activeTextColor: string;
  activeBgColor: string;
  label: string;
  value: string;
  hasButton: boolean;
  displayArrow: boolean;
}
