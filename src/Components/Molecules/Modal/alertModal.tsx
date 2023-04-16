import Background from "Components/Atoms/Background/background";
import { useDispatch } from "react-redux";

import { ModalButton } from "Components/Atoms/Button/btn";
import Flex from "Components/Atoms/Flex/flex";
import { Body1 } from "Components/Atoms/Text/text";
import { setModal } from "Redux/Slides/modal";

const AlertModal = ({}: {}) => {
  const dispatch = useDispatch();

  return (
    <Background modalNum={1}>
      <div className="bg-white rounded-t-lg py-32">
        <Flex x="justify-center">
          <Body1 title="최소" />
          <Body1 title="1개 이상의" color={0} />
        </Flex>
        <Flex x="justify-center">
          <Body1 title="장소에 별점을 남겨주세요" />
        </Flex>
      </div>
      <ModalButton onClick={() => dispatch(setModal(1))} title="확인" />
    </Background>
  );
};

export default AlertModal;
