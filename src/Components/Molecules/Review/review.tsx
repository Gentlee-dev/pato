import Flex from "Components/Atoms/Flex/flex";
import { Body3, Body4, Caption2 } from "Components/Atoms/Text/text";
import Point, { SmallPoint } from "Components/Atoms/point";
import { Space16, Space8 } from "Components/Atoms/space";

const Review = ({}: // title,
// date,
// desc,
{
  // title: string;
  // date: string;
  // desc: string;
}) => {
  return (
    <Flex vertical y="items-start">
      <Flex x="justify-between">
        <Body3 title="최고의 부대시설" />
        <Caption2 title="2일전" color={7} />
      </Flex>
      <Space8 />
      <Body4 title="주차장은 유료로 한달에 8만원이나 내야하고, 화장실은 그냥 화장실만 갖춘 대박적인 부대시설 앉을때 마다 엉덩이가 시려우네요...^^ 어서 다른데로 이직하고 싶어요 !!" />
      <Space16 />
      <SmallPoint parking={5} toilet={5} />
    </Flex>
  );
};

export default Review;
