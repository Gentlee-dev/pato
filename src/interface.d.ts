export type Palete = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type JustifyContent =
  | "justify-start"
  | "justify-end"
  | "justify-center"
  | "justify-between";
export type AlignItems = "items-center" | "items-start" | "items-end";

export interface RadioForm {
  idx: number;
  label: string;
  id: string;
}
export interface Option {
  title: string;
  option: RadioForm[];
}

export interface RT {
  id: number;
  parkingScore: number;
  toiletScore: number;
  restaurantThumbnail: string;
  restaurantName: string;
  restaurantType: string;
  address: string;
}

export interface RTDetail {
  restaurantId: number;
  isParkingLot: number;
  parkingCapacity: number;
  isToilet: number;
  toiletCleanliness: number;
  isSoap: number;
  isPaperTowel: number;
  parkingScore: number;
  toiletScore: number;
  address: string;
  restautantType: string;
  restaurantName: string;
}

export interface PostRT {
  address: string;
  restaurantName: string;
  locationX: number;
  locationY: number;
  isParkingLot: number;
  parkingCapacity: number;
  isToilet: number;
  toiletCleanliness: number;
  isSoap: number;
  isPaperTowel: number;
  reporter?: string;
}
export interface PutRT {
  restaurantId: number;
  isParkingLot: number;
  parkingCapacity: number;
  isToilet: number;
  toiletCleanliness: number;
  isSoap: number;
  isPaperTowel: number;
}
export interface PostReview {
  restaurantId: number;
  parkingScore: number;
  toiletScore: number;
  reviewContent: string;
}

export interface Review {
  reviewId: number;
  parkingScore: number;
  toiletScore: number;
  title: string;
  content: string;
  images: string[];
  createdAt: string;
}

export interface RTDetailWithfeedback {
  restaurantDetails: RTDetail;
  restaurantReviews: Review[];
  restaurantImages: string[];
  locationX: number;
  locationY: number;
  restaurantName: string;
  address: string;
  reporter: string;
}
