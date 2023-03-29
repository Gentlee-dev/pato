// 사이드바 메뉴
import Category from "./../Pages/ServiceCenter/category";

interface Restanrant {
  id: number;
  parkingScore: number;
  toiletScore: number;
  restaurantThumbnail: string;
  restaurantName: string;
  restaurantType: string;
  address: string;
}
interface GetRestaurantListApiParams {
  name: string;
  offset: number;
  limit: number;
}
