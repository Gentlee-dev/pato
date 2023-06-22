import { Option } from "interface";

const OPTIONS: Option[] = [
  {
    title: "주차장 유/무",
    option: [
      { idx: 0, label: "없음", id: "nope" },
      { idx: 1, label: "있음(무료)", id: "fee" },
      { idx: 2, label: "있음(유료)", id: "free" },
    ],
  },
  {
    title: "주차 대수",
    option: [
      { idx: 0, label: "1~5대", id: "5" },
      { idx: 1, label: "~10대", id: "10" },
      { idx: 2, label: "~30대", id: "30" },
      { idx: 3, label: "대형", id: "big" },
    ],
  },
  {
    title: "화장실 유/무",
    option: [
      { idx: 0, label: "없음", id: "nope" },
      { idx: 1, label: "있음(내부/남녀분리)", id: "in_private" },
      { idx: 2, label: "있음(내부/남녀공용)", id: "in_public" },
      { idx: 3, label: "있음(외부/남녀분리)", id: "out_private" },
      { idx: 4, label: "있음(외부/남녀공용)", id: "out_public" },
    ],
  },
  {
    title: "화장실 청결도",
    option: [
      { idx: 0, label: "아주 깨끗함", id: "top" },
      { idx: 1, label: "깨끗함", id: "mid" },
      { idx: 2, label: "하지 않음", id: "bottom" },
    ],
  },
  {
    title: "세면대 비누",
    option: [
      { idx: 0, label: "없음", id: "binu_no" },
      { idx: 1, label: "있음(비누)", id: "binu" },
      { idx: 2, label: "있음(핸드워시)", id: "hand" },
    ],
  },
  {
    title: "세면대 페이퍼타올",
    option: [
      { idx: 0, label: "없음", id: "paper_no" },
      { idx: 1, label: "있음", id: "paper_yes" },
      { idx: 2, label: "없음(수건)", id: "towel" },
    ],
  },
];

interface OnlyOption {
  [idx: number]: string;
}
export const ONLY_OPTIONS: {
  [idx: string]: OnlyOption;
} = {
  isParkingLot: {
    0: "없음",
    1: "무료",
    2: "유료",
  },
  parkingCapacity: {
    0: "1~5대",
    1: "~10대",
    2: "~30대",
    3: "대형",
  },
  isToilet: {
    0: "없음",
    1: "내부 / 남녀분리",
    2: "내부 / 남녀공용",
    3: "외부 / 남녀분리",
    4: "외부 / 남녀공용",
  },
  toiletCleanliness: {
    0: "아주 깨끗함",
    1: "깨끗함",
    2: "깨끗하지 않음",
  },
  isSoap: {
    1: "비누",
    2: "핸드워시",
  },
  isPaperTowel: {
    0: "페이퍼타올",
    1: "수건",
  },
};

export default OPTIONS;
