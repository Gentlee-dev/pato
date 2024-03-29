"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";

import { setModal } from "Redux/Slides/modal";
import { Body3 } from "Components/Atoms/Text/text";
import Flex from "Components/Atoms/Flex/flex";
import {
  Space16,
  Space24,
  Space48,
  Space72,
  Space8,
} from "Components/Atoms/space";
import Button from "Components/Atoms/Button/btn";
import PageTitle from "Components/Molecules/PageTitle/pageTitle";
import { BigHorizenMetaInfo } from "Components/Molecules/MetaInfo/metaInfo";
import HR from "Components/Atoms/Hr/hr";
import { Scoring } from "Components/Atoms/Scoring/scoring";
import ImgInput from "Components/Atoms/Input/imgInput";
import { Thumbnail } from "Components/Atoms/StoreThumbnail/storeThumbnail";
import ChoiceTitle from "Components/Molecules/ChoiceTitle/choiceTitle";
import AlertModal from "Components/Molecules/Modal/alertModal";
import { GetRTDetailApi, postReviewApi } from "Api/apis";
import { RTDetail } from "interface";
import { useRouter } from "next/navigation";
import { setFormData } from "Util/function";

interface PosetReviewProps {
  searchParams: { name: string; address: string };
}

const TYPES = ["png", "jpg", "jpeg", "jfif", "JPG", "JPEG", "PNG"];

// const Postreview = ({ searchParams }: PosetReviewProps) => {
const Postreview = ({ params }: { params: { idx: number } }) => {
  const router = useRouter();
  const [parkingScore, setParkingScore] = useState(5);
  const [toiletScore, setToiletScore] = useState(5);
  const [imgFileList, setImgFileList] = useState<File[]>([]); // 이미지 파일
  const [imgSrcList, setImgSrcList] = useState<string[]>([]); // 이미지 미리보기
  const [reviewContent, setReviewContent] = useState("");

  const { data } = GetRTDetailApi(params.idx);
  const { restaurantName, address, restaurantId } =
    data?.data?.restaurantDetails || ({} as RTDetail);

  const dispatch = useDispatch();

  const onPickImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    // 파일이 null일경우
    if (!files) {
      alert("파일을 가져오지 못하였습니다. 다시 선택해주세요");
      return;
    }

    // 확장자가 안맞는경우
    const filesType = files[0].name.split(".")[1];
    if (TYPES.findIndex((el) => el === filesType) === -1) {
      alert(`${filesType} 파일확장자를 지원하지 않습니다.`);
      // 파일 선택시 밸류가 설정되어 같은파일 선택시 onChange가 안먹음
      // 밸류를 초기화하여 방지
      e.target.value = "";
      return;
    }

    // 미리보기
    const reader = new FileReader();
    reader.onload = (el) => {
      const src = el.target?.result || "";
      if (typeof src !== "string") return;
      setImgSrcList((imgsrcList: string[]) => imgsrcList.concat(src));
    };
    reader.readAsDataURL(files[0]);
    // 파일추가
    setImgFileList([...imgFileList, files[0]]);
    e.target.value = "";
  };
  const onClickImg = (idx: number) => {
    setImgFileList((imgFileList) =>
      imgFileList.filter((_, imgIdx) => imgIdx !== idx)
    );
    setImgSrcList((imgSrcList) =>
      imgSrcList.filter((_, imgIdx) => imgIdx !== idx)
    );
  };

  const onClickReview = async () => {
    if (parkingScore === 0 && toiletScore === 0) {
      dispatch(setModal(1));
      return;
    }

    const body = {
      restaurantId,
      parkingScore,
      toiletScore,
      reviewContent,
    };

    const formData: FormData = new FormData();
    setFormData(formData, body);
    for (let img of imgFileList) {
      formData.append("reviewImage", img);
    }

    await postReviewApi(formData);
    alert("리뷰 등록이 완료 되었습니다.");
    router.push(`/store/${params.idx}`);
  };

  return (
    <div className="px-16">
      <PageTitle title="리뷰" />
      <Space48 />
      <BigHorizenMetaInfo title="상호명" desc={restaurantName} />
      <BigHorizenMetaInfo title="주소" desc={address} />

      <HR size={1} my={24} />

      <Flex vertical y="items-start">
        <Flex>
          <Body3 title="주차장" />
          <Space16 />
          <Scoring
            score={parkingScore}
            setScore={setParkingScore}
            type="parking"
          />
        </Flex>
        <Space16 />
        <Flex>
          <Body3 title="화장실" />
          <Space16 />
          <Scoring
            score={toiletScore}
            setScore={setToiletScore}
            type="toilet"
          />
        </Flex>
      </Flex>

      <Space24 />
      <ChoiceTitle title="사진을 첨부해 주세요" />
      <Space16 />

      <Flex gap={16}>
        <ImgInput onchange={onPickImg} />
        {imgSrcList.map((el, idx) => {
          return (
            <button key={idx} onClick={() => onClickImg(idx)}>
              <Thumbnail src={el} w="w-63" h="h-63" r="rounded-lg" />
            </button>
          );
        })}
      </Flex>

      <Space24 />
      <ChoiceTitle title="리뷰를 남겨 주세요" />
      <Space8 />
      <textarea
        placeholder={`주차장과 화장실에 대한 리뷰를 남겨주세요. 
타인의 권리를 침해하거나 명예를 훼손하는 리뷰는 운영원칙 및 관련 법률에 제재를 받을 수 있습니다.`}
        className="w-full resize-none border-gray05 bg-gray03 border-1 rounded-lg h-150 overflow-auto p-16 font-medium text-14 leading-20"
        value={reviewContent}
        onChange={(e) => setReviewContent(e.target.value)}
      ></textarea>
      <Space72 />
      <Button onClick={onClickReview} title="리뷰 남기기" />
      <Space16 />
      <AlertModal />
    </div>
  );
};
export default Postreview;
