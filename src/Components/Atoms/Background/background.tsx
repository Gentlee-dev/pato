import { useDispatch, useSelector } from "react-redux";
import { setModal } from "Redux/Slides/modal";
import { RootSate } from "Redux/store";

/**
 * 전체화면 백그라운드
 * @param  child 안에 보일 엘리먼트
 * @returns
 */
const Background = ({
  children,
  modalNum = 1,
}: {
  children: React.ReactNode;
  modalNum?: number;
}) => {
  const dispatch = useDispatch();
  const open = useSelector((state: RootSate) => state.modal);

  if (modalNum !== open) return null;
  return (
    <div
      onClick={() => dispatch(setModal(modalNum))}
      className="fixed w-full h-[100vh] bg-black1/2 top-0 left-0 z-50"
    >
      {/* 버블링 막음 */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="fixed p-center w-4/5 max-w-sm "
      >
        {children}
      </div>
    </div>
  );
};

export default Background;
