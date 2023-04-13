import { Space16, Space8 } from "Components/Atoms/space";
import ParkingSVG from "/public/svg/parking.svg";
import ToiletSVG from "/public/svg/toilet.svg";
import { Body1 } from "./Text/text";

/**
 * 주차장, 화장실 별점 atom
 * @param {number} parking 주차장 별점
 * @param {number} toilet  화장실 별점
 */
const Point = ({ parking, toilet }: { parking: number; toilet: number }) => {
  return (
    <div className="flex">
      <div className="flex">
        <ParkingSVG />
        <Space8 />
        <Body1 title={String(parking)} color={7} />
      </div>
      <Space16 />
      <div className="flex">
        <ToiletSVG />
        <Space8 />
        <Body1 title={String(toilet)} color={7} />
      </div>
    </div>
  );
};
export default Point;
