import { Body4 } from "Components/Atoms/Text/text";
import Flex from "Components/Atoms/Flex/flex";

const ChoiceTitle = ({ title }: { title: string }) => {
  return (
    <Flex>
      <Body4 title={title} />
      <Body4 title="(선택)" color={5} />
    </Flex>
  );
};
export default ChoiceTitle;
